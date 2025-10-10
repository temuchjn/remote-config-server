System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      FBInstant.initializeAsync().then(function () {
        FBInstant.setLoadingProgress(10);
        return topLevelImport('cc');
      }).then(function (engine) {
        FBInstant.setLoadingProgress(50);
        return application.init(engine);
      }).then(function () {
        FBInstant.setLoadingProgress(99);
        return application.start();
      }).then(function () {
        FBInstant.setLoadingProgress(100);
        return FBInstant.startGameAsync();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});