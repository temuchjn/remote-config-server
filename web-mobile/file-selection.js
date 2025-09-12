const LOCAL_STORAGE_KEY = 'lastValidFileSelection';

// File validation configuration - extensible for future requirements
const FILE_VALIDATION_RULES = [
  {
    name: 'symbols',
    description: 'Symbol file',
    validator: (filename) => filename.toLowerCase().startsWith('symbols'),
    required: true
  },
  {
    name: 'paytable',
    description: 'Paytable file',
    validator: (filename) => filename.toLowerCase().startsWith('paytable'),
    required: true
  }
  // Add more validation rules here as needed
];

// Main setup function
function setupFileSelection() {
    const fileInput = document.getElementById('fileInput');
    const clearSelectionBtn = document.getElementById('clearSelectionBtn');
    const restoredStateMessage = document.getElementById('restoredStateMessage');

    fileInput.addEventListener('change', async function(event) {
        const files = Array.from(event.target.files);
        restoredStateMessage.style.display = 'none'; // Hide restored message on new selection

        if (files.length === 0) {
            clearUI();
            return;
        }

        const validationResult = processAndValidateFiles(files);

        if (validationResult.isValid) {
            await readAndSaveFilesToLocalStorage(files, validationResult);
        } else {
            // If validation fails, ensure the clear button is hidden and local storage is cleared
            clearLocalStorageAndUI();
        }
    });

    clearSelectionBtn.addEventListener('click', () => {
        clearLocalStorageAndUI();
    });

    restoreSelectionFromLocalStorage();
}

function processAndValidateFiles(files) {
    const selectedFilesList = document.getElementById('selectedFilesList');
    const validationMessages = document.getElementById('validationMessages');

    displaySelectedFiles(files, selectedFilesList);
    const validationResult = validateFiles(files);
    displayValidationResults(validationResult, validationMessages);

    console.log('Files selected:', files.map(f => ({ name: f.name, size: f.size, type: f.type })));
    return validationResult;
}

async function readAndSaveFilesToLocalStorage(files, validationResult) {
    const fileReadPromises = files.map(file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    content: event.target.result // File content as plain text
                });
            };
            reader.onerror = (error) => reject(error);
            reader.readAsText(file); // Read as text instead of Data URL
        });
    });

    try {
        const filesWithContent = await Promise.all(fileReadPromises);
        assignFileContentToWindow(filesWithContent);

        const selectionData = {
            files: filesWithContent,
            validationResult: validationResult
        };

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectionData));
        document.getElementById('clearSelectionBtn').style.display = 'inline-block';
        console.log('Successfully saved files and content to localStorage.');

    } catch (error) {
        console.error('Error reading or saving files:', error);
        let errorMessage = 'An error occurred while reading the files.';
        if (error.name === 'QuotaExceededError') {
            errorMessage = '❌ Error: The selected files are too large to save. Please select smaller files.';
        }
        document.getElementById('validationMessages').innerHTML += `<div class="validation-overall error">${errorMessage}</div>`;
        clearLocalStorageAndUI(); // Clear any partial data
    }
}

function assignFileContentToWindow(filesWithContent) {
    console.log('Assigning file content to window object...');
    FILE_VALIDATION_RULES.forEach(rule => {
        const foundFile = filesWithContent.find(file => rule.validator(file.name));
        if (foundFile) {
            window[rule.name] = JSON.parse(foundFile.content);
            console.log(`Assigned content of ${foundFile.name} to window.${rule.name}`);
        } else {
            // Ensure old values are cleared if a file is no longer present
            delete window[rule.name];
        }
    });
}

function restoreSelectionFromLocalStorage() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        try {
            const { files, validationResult } = JSON.parse(savedData);
            assignFileContentToWindow(files);

            displaySelectedFiles(files, document.getElementById('selectedFilesList'));
            displayValidationResults(validationResult, document.getElementById('validationMessages'));

            const restoredStateMessage = document.getElementById('restoredStateMessage');
            restoredStateMessage.textContent = 'Restored files and content from the last session. You can start processing or select new files.';
            restoredStateMessage.style.display = 'block';

            document.getElementById('clearSelectionBtn').style.display = 'inline-block';

            console.log('Restored file content is now available on the window object (e.g., window.symbol).');

        } catch (error) {
            console.error('Failed to parse or restore data from localStorage:', error);
            clearLocalStorageAndUI(); // Clear potentially corrupted data
        }
    }
}

function clearLocalStorageAndUI() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    restoredFiles = []; // Clear the global variable
    clearUI();
    document.getElementById('fileInput').value = ''; // Reset file input
}

function clearUI() {
    document.getElementById('selectedFilesList').innerHTML = '';
    document.getElementById('validationMessages').innerHTML = '';
    document.getElementById('restoredStateMessage').style.display = 'none';
    document.getElementById('clearSelectionBtn').style.display = 'none';
}

function displaySelectedFiles(files, container) {
  const fileListHTML = files.map(file =>
    `<div class="file-item">📄 ${file.name} (${formatFileSize(file.size)})</div>`
  ).join('');

  container.innerHTML = `
    <div class="files-header">Selected Files (${files.length}):</div>
    ${fileListHTML}
  `;
}

function validateFiles(files) {
  const filenames = files.map(f => f.name);
  const results = {
    isValid: true,
    messages: [],
    missingRequired: [],
    foundRequired: []
  };

  FILE_VALIDATION_RULES.forEach(rule => {
    const matchingFiles = filenames.filter(rule.validator);

    if (matchingFiles.length > 0) {
      results.foundRequired.push({ rule: rule, files: matchingFiles });
    } else if (rule.required) {
      results.isValid = false;
      results.missingRequired.push(rule);
    }
  });

  return results;
}

function displayValidationResults(validationResult, container) {
  let messagesHTML = '';

  if (validationResult.foundRequired.length > 0) {
    messagesHTML += '<div class="validation-success">✅ Required files found:</div>';
    validationResult.foundRequired.forEach(found => {
      messagesHTML += `<div class="validation-item success">• ${found.rule.description}: ${found.files.join(', ')}</div>`;
    });
  }

  if (validationResult.missingRequired.length > 0) {
    messagesHTML += '<div class="validation-error">❌ Missing required files:</div>';
    validationResult.missingRequired.forEach(missing => {
      messagesHTML += `<div class="validation-item error">• ${missing.description} (must start with "${missing.name}")</div>`;
    });
  }

  if (validationResult.isValid) {
    messagesHTML += '<div class="validation-overall success">🎉 All required files are present!</div>';
  } else {
    messagesHTML += '<div class="validation-overall error">⚠️ Please select the missing required files.</div>';
  }

  container.innerHTML = messagesHTML;
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Initialize file selection when page loads
document.addEventListener('DOMContentLoaded', setupFileSelection);
