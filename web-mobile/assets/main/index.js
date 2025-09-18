System.register("chunks:///_virtual/AnimationConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "07bc63vq1FLKout9v/5AOPu", "AnimationConfig", undefined);
      /**
       * @file AnimationConfig.ts
       * @brief Manages animation configurations and profiles for the slot machine.
       */
      // #region Type Definitions
      /**
       * Defines the animation properties for a single reel.
       */
      /**
       * Defines UI-related animation timings.
       */
      /**
       * A complete animation profile, containing configurations for all reels and UI elements.
       */
      // #endregion

      // #region Animation Profiles
      /**
       * Collection of predefined animation profiles.
       */
      var ANIMATION_PROFILES = exports('ANIMATION_PROFILES', {
        normal: {
          name: 'normal',
          description: 'Standard gameplay animation speed and feel.',
          reelConfigs: [{
            // Reel 0
            reelIndex: 0,
            spinSpeed: 5000,
            spinDuration: 2.0,
            accelerationDuration: 0.5,
            decelerationDuration: 0.5,
            delayReel: 0.0,
            anticipationDistance: 200,
            bounceIntensity: 0.2,
            bounceDuration: 0.2
          }, {
            // Reel 1
            reelIndex: 1,
            spinSpeed: 5000,
            spinDuration: 2.0,
            accelerationDuration: 0.5,
            decelerationDuration: 0.5,
            delayReel: 0.1,
            anticipationDistance: 200,
            bounceIntensity: 0.2,
            bounceDuration: 0.2
          }, {
            // Reel 2
            reelIndex: 2,
            spinSpeed: 5000,
            spinDuration: 2.0,
            accelerationDuration: 0.5,
            decelerationDuration: 0.5,
            delayReel: 0.3,
            anticipationDistance: 200,
            bounceIntensity: 0.2,
            bounceDuration: 0.2
          }],
          ui: {
            winAnimationDuration: 0.3,
            autoSpinDelay: 1000,
            buttonFeedbackDuration: 0.5,
            popupAnimationDuration: 0.25,
            transitionDuration: 0.2
          }
        },
        autoSpin: {
          name: 'autoSpin',
          description: 'Faster animations for auto-spin or turbo mode.',
          reelConfigs: [{
            // Reel 0
            reelIndex: 0,
            spinSpeed: 8000,
            spinDuration: 1.0,
            accelerationDuration: 0.25,
            decelerationDuration: 0.25,
            delayReel: 0.0,
            anticipationDistance: 150,
            bounceIntensity: 0.15,
            bounceDuration: 0.15
          }, {
            // Reel 1
            reelIndex: 1,
            spinSpeed: 8000,
            spinDuration: 1.0,
            accelerationDuration: 0.25,
            decelerationDuration: 0.25,
            delayReel: 0.05,
            anticipationDistance: 150,
            bounceIntensity: 0.15,
            bounceDuration: 0.15
          }, {
            // Reel 2
            reelIndex: 2,
            spinSpeed: 8000,
            spinDuration: 1.0,
            accelerationDuration: 0.25,
            decelerationDuration: 0.25,
            delayReel: 0.15,
            anticipationDistance: 150,
            bounceIntensity: 0.15,
            bounceDuration: 0.15
          }],
          ui: {
            winAnimationDuration: 0.15,
            autoSpinDelay: 500,
            buttonFeedbackDuration: 0.25,
            popupAnimationDuration: 0.15,
            transitionDuration: 0.1
          }
        },
        suspense: {
          name: 'suspense',
          description: 'Suspenseful animation with slow final reel when first two reels match.',
          reelConfigs: [{
            // Reel 0 - Normal speed
            reelIndex: 0,
            spinSpeed: 5000,
            spinDuration: 2.0,
            accelerationDuration: 0.5,
            decelerationDuration: 0.5,
            delayReel: 0.0,
            anticipationDistance: 200,
            bounceIntensity: 0.2,
            bounceDuration: 0.2
          }, {
            // Reel 1 - Normal speed
            reelIndex: 1,
            spinSpeed: 5000,
            spinDuration: 2.0,
            accelerationDuration: 0.5,
            decelerationDuration: 0.5,
            delayReel: 0.1,
            anticipationDistance: 200,
            bounceIntensity: 0.2,
            bounceDuration: 0.2
          }, {
            // Reel 2 - Slow suspenseful spin
            reelIndex: 2,
            spinSpeed: 5000,
            // Much slower speed
            spinDuration: 4.0,
            // Longer duration for suspense
            accelerationDuration: 0.5,
            decelerationDuration: 2.0,
            // Extended deceleration for dramatic effect
            delayReel: 0.3,
            // Longer delay to let first two reels stop first
            anticipationDistance: 1000,
            // More anticipation distance
            bounceIntensity: 0.3,
            // More dramatic bounce
            bounceDuration: 0.4 // Longer bounce for emphasis
          }],

          ui: {
            winAnimationDuration: 0.4,
            // Longer win animation for suspense payoff
            autoSpinDelay: 1000,
            buttonFeedbackDuration: 0.5,
            popupAnimationDuration: 0.3,
            transitionDuration: 0.2
          }
        }
      });

      // #endregion

      // #region AnimationConfig Manager

      /**
       * Manages the active animation profile and provides access to configuration values.
       */
      var AnimationConfig = exports('AnimationConfig', /*#__PURE__*/function () {
        function AnimationConfig() {
          this._currentProfile = void 0;
          // Set 'normal' as the default profile on initialization
          this._currentProfile = ANIMATION_PROFILES.normal;
        }

        /**
         * Gets the singleton instance of the AnimationConfig manager.
         */
        AnimationConfig.getInstance = function getInstance() {
          if (!AnimationConfig._instance) {
            AnimationConfig._instance = new AnimationConfig();
          }
          return AnimationConfig._instance;
        }

        /**
         * Sets the active animation profile by name.
         * @param profileName The name of the profile to activate (e.g., 'normal', 'autoSpin').
         */;
        var _proto = AnimationConfig.prototype;
        _proto.setProfile = function setProfile(profileName) {
          if (ANIMATION_PROFILES[profileName]) {
            this._currentProfile = ANIMATION_PROFILES[profileName];
          } else {
            console.warn("[AnimationConfig] Profile '" + profileName + "' not found. Using default.");
            this._currentProfile = ANIMATION_PROFILES.normal;
          }
        }

        /**
         * Gets the configuration for a specific reel from the current profile.
         * @param reelIndex The index of the reel.
         * @returns The configuration for the specified reel, or the first reel's config as a fallback.
         */;
        _proto.getReelConfig = function getReelConfig(reelIndex) {
          var config = this._currentProfile.reelConfigs.find(function (c) {
            return c.reelIndex === reelIndex;
          });
          // Fallback to the first available config if the specific index is not found
          return config || this._currentProfile.reelConfigs[0];
        }

        /**
         * Gets the UI animation configuration from the current profile.
         */;
        _proto.getUIConfig = function getUIConfig() {
          return this._currentProfile.ui;
        }

        /**
         * Gets the currently active animation profile.
         */;
        _proto.getCurrentProfile = function getCurrentProfile() {
          return this._currentProfile;
        };
        return AnimationConfig;
      }());

      // #endregion
      AnimationConfig._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AttackView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './AttackViewModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Sprite, Button, Color, tween, v3, director, BaseView, AttackViewModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      Button = module.Button;
      Color = module.Color;
      tween = module.tween;
      v3 = module.v3;
      director = module.director;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      AttackViewModel = module.AttackViewModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24;
      cclegacy._RF.push({}, "61a85CfdqpJ3rYS52F9av3G", "AttackView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Attack View - UI for attack scene
       */
      var AttackView = exports('AttackView', (_dec = ccclass('AttackView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property([Node]), _dec9 = property([Sprite]), _dec10 = property([Label]), _dec11 = property([Label]), _dec12 = property([Label]), _dec13 = property([Button]), _dec14 = property([Node]), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Button), _dec24 = property(Node), _dec25 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(AttackView, _BaseView);
        function AttackView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          // Header UI
          _initializerDefineProperty(_this, "goldLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "attacksRemainingLabel", _descriptor2, _assertThisInitialized(_this));
          // Target Info UI
          _initializerDefineProperty(_this, "targetInfoContainer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPlayerNameLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPlayerLevelLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetCityNameLabel", _descriptor6, _assertThisInitialized(_this));
          // Buildings UI
          _initializerDefineProperty(_this, "buildingNodes", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingSprites", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingNameLabels", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingLevelLabels", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardLabels", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "attackButtons", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "destroyedOverlays", _descriptor13, _assertThisInitialized(_this));
          // Action Buttons
          _initializerDefineProperty(_this, "newTargetButton", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backButton", _descriptor15, _assertThisInitialized(_this));
          // Loading UI
          _initializerDefineProperty(_this, "loadingContainer", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingLabel", _descriptor17, _assertThisInitialized(_this));
          // Result UI
          _initializerDefineProperty(_this, "resultContainer", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultTitleLabel", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultMessageLabel", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultRewardLabel", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultCloseButton", _descriptor22, _assertThisInitialized(_this));
          // Notification UI
          _initializerDefineProperty(_this, "notificationContainer", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notificationLabel", _descriptor24, _assertThisInitialized(_this));
          _this._viewModel = null;
          _this._currentTarget = null;
          return _this;
        }
        var _proto = AttackView.prototype;
        /**
         * Setup UI components
         */
        _proto.setupUI = function setupUI() {
          // Initialize UI state
          this.updateHeaderDisplay();
          this.hideTargetInfo();
          this.hideAllBuildings();
          this.hideResultUI();
          this.hideNotification();
          this.showLoading('Loading target...');
        }

        /**
         * Bind UI events
         */;
        _proto.bindEvents = function bindEvents() {
          var _this2 = this;
          // Action buttons
          if (this.newTargetButton) {
            this.newTargetButton.node.on(Button.EventType.CLICK, this.onNewTargetClicked, this);
          }
          if (this.backButton) {
            this.backButton.node.on(Button.EventType.CLICK, this.onBackClicked, this);
          }

          // Attack buttons
          var _loop = function _loop(i) {
            var button = _this2.attackButtons[i];
            if (button) {
              button.node.on(Button.EventType.CLICK, function () {
                return _this2.onAttackClicked(i);
              }, _this2);
            }
          };
          for (var i = 0; i < this.attackButtons.length; i++) {
            _loop(i);
          }

          // Result close button
          if (this.resultCloseButton) {
            this.resultCloseButton.node.on(Button.EventType.CLICK, this.onResultCloseClicked, this);
          }
        }

        /**
         * Update UI based on data changes
         */;
        _proto.updateUI = function updateUI(key, value, oldValue) {
          // Handle ViewModel data changes if needed
        }

        /**
         * Refresh entire UI
         */;
        _proto.refreshUI = function refreshUI() {
          this.updateHeaderDisplay();
          this.updateTargetDisplay();
          this.updateBuildingsDisplay();
        }

        /**
         * Set ViewModel and setup event listeners
         */;
        _proto.setViewModel = function setViewModel(viewModel) {
          _BaseView.prototype.setViewModel.call(this, viewModel);
          this._viewModel = viewModel;
          if (this._viewModel) {
            this.setupViewModelEvents();
          }
        }

        /**
         * Setup ViewModel event listeners
         */;
        _proto.setupViewModelEvents = function setupViewModelEvents() {
          if (!this._viewModel) return;
          this._viewModel.on('loadingTarget', this.onLoadingTarget, this);
          this._viewModel.on('targetLoaded', this.onTargetLoaded, this);
          this._viewModel.on('targetLoadError', this.onTargetLoadError, this);
          this._viewModel.on('resourceUpdated', this.onResourceUpdated, this);
          this._viewModel.on('attackStarted', this.onAttackStarted, this);
          this._viewModel.on('attackCompleted', this.onAttackCompleted, this);
          this._viewModel.on('attackError', this.onAttackError, this);
          this._viewModel.on('buildingAlreadyDestroyed', this.onBuildingAlreadyDestroyed, this);
          this._viewModel.on('noAttacksRemaining', this.onNoAttacksRemaining, this);
          this._viewModel.on('navigateToScene', this.onNavigateToScene, this);
        }

        /**
         * Update header display
         */;
        _proto.updateHeaderDisplay = function updateHeaderDisplay() {
          if (!this._viewModel) return;

          // Update gold display
          if (this.goldLabel) {
            this.goldLabel.string = this.formatNumber(this._viewModel.currentGold);
          }

          // Update attacks remaining
          if (this.attacksRemainingLabel) {
            this.attacksRemainingLabel.string = "Attacks: " + this._viewModel.attacksRemaining;
          }
        }

        /**
         * Update target display
         */;
        _proto.updateTargetDisplay = function updateTargetDisplay() {
          if (!this._viewModel || !this._currentTarget) {
            this.hideTargetInfo();
            return;
          }
          this.showTargetInfo();
          if (this.targetPlayerNameLabel) {
            this.targetPlayerNameLabel.string = this._currentTarget.playerName;
          }
          if (this.targetPlayerLevelLabel) {
            this.targetPlayerLevelLabel.string = "Level " + this._currentTarget.playerLevel;
          }
          if (this.targetCityNameLabel) {
            this.targetCityNameLabel.string = this._currentTarget.cityName;
          }
        }

        /**
         * Update buildings display
         */;
        _proto.updateBuildingsDisplay = function updateBuildingsDisplay() {
          if (!this._currentTarget) {
            this.hideAllBuildings();
            return;
          }
          var buildings = this._currentTarget.buildings;
          for (var i = 0; i < buildings.length && i < this.buildingNodes.length; i++) {
            var building = buildings[i];
            this.updateBuildingUI(i, building);
          }

          // Hide unused building slots
          for (var _i = buildings.length; _i < this.buildingNodes.length; _i++) {
            if (this.buildingNodes[_i]) {
              this.buildingNodes[_i].active = false;
            }
          }
        }

        /**
         * Update individual building UI
         */;
        _proto.updateBuildingUI = function updateBuildingUI(index, building) {
          // Show building node
          if (this.buildingNodes[index]) {
            this.buildingNodes[index].active = true;
          }

          // Update building name
          if (this.buildingNameLabels[index]) {
            this.buildingNameLabels[index].string = this.getBuildingDisplayName(building.buildingType);
          }

          // Update building level
          if (this.buildingLevelLabels[index]) {
            this.buildingLevelLabels[index].string = "Level " + building.level;
          }

          // Update reward label
          if (this.rewardLabels[index]) {
            this.rewardLabels[index].string = this.formatNumber(building.potentialReward) + " Gold";
          }

          // Update attack button
          if (this.attackButtons[index]) {
            var _this$_viewModel, _this$_viewModel2;
            this.attackButtons[index].interactable = !building.isDestroyed && ((_this$_viewModel = this._viewModel) == null ? void 0 : _this$_viewModel.hasAttacksRemaining) && !((_this$_viewModel2 = this._viewModel) != null && _this$_viewModel2.isAttacking);
          }

          // Update destroyed overlay
          if (this.destroyedOverlays[index]) {
            this.destroyedOverlays[index].active = building.isDestroyed;
          }

          // Update building sprite
          this.updateBuildingSprite(index, building);
        }

        /**
         * Update building sprite based on state
         */;
        _proto.updateBuildingSprite = function updateBuildingSprite(index, building) {
          if (!this.buildingSprites[index]) return;
          var sprite = this.buildingSprites[index];
          if (building.isDestroyed) {
            sprite.color = Color.GRAY;
          } else {
            // Color based on level and potential reward
            var rewardLevel = building.potentialReward;
            if (rewardLevel >= 400) {
              sprite.color = Color.YELLOW; // High reward
            } else if (rewardLevel >= 200) {
              sprite.color = Color.GREEN; // Medium reward
            } else {
              sprite.color = Color.WHITE; // Low reward
            }
          }
        }

        /**
         * Get building display name
         */;
        _proto.getBuildingDisplayName = function getBuildingDisplayName(buildingType) {
          var buildingNames = {
            'house': 'House',
            'shop': 'Shop',
            'factory': 'Factory',
            'tower': 'Tower',
            'castle': 'Castle'
          };
          return buildingNames[buildingType] || 'Building';
        }

        /**
         * Show loading UI
         */;
        _proto.showLoading = function showLoading(message) {
          if (this.loadingContainer) {
            this.loadingContainer.active = true;
          }
          if (this.loadingLabel) {
            this.loadingLabel.string = message;
          }
        }

        /**
         * Hide loading UI
         */;
        _proto.hideLoading = function hideLoading() {
          if (this.loadingContainer) {
            this.loadingContainer.active = false;
          }
        }

        /**
         * Show target info
         */;
        _proto.showTargetInfo = function showTargetInfo() {
          if (this.targetInfoContainer) {
            this.targetInfoContainer.active = true;
          }
        }

        /**
         * Hide target info
         */;
        _proto.hideTargetInfo = function hideTargetInfo() {
          if (this.targetInfoContainer) {
            this.targetInfoContainer.active = false;
          }
        }

        /**
         * Hide all buildings
         */;
        _proto.hideAllBuildings = function hideAllBuildings() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.buildingNodes), _step; !(_step = _iterator()).done;) {
            var buildingNode = _step.value;
            if (buildingNode) {
              buildingNode.active = false;
            }
          }
        }

        /**
         * Show attack result
         */;
        _proto.showAttackResult = function showAttackResult(result) {
          if (this.resultContainer) {
            this.resultContainer.active = true;
          }
          if (this.resultTitleLabel) {
            this.resultTitleLabel.string = result.success ? 'Attack Successful!' : 'Attack Failed!';
          }
          if (this.resultMessageLabel) {
            this.resultMessageLabel.string = result.message;
          }
          if (this.resultRewardLabel) {
            if (result.goldEarned > 0) {
              this.resultRewardLabel.string = "+" + this.formatNumber(result.goldEarned) + " Gold";
              this.resultRewardLabel.node.active = true;
            } else {
              this.resultRewardLabel.node.active = false;
            }
          }
        }

        /**
         * Hide attack result
         */;
        _proto.hideResultUI = function hideResultUI() {
          if (this.resultContainer) {
            this.resultContainer.active = false;
          }
        }

        /**
         * Show notification
         */;
        _proto.showNotification = function showNotification(message, duration) {
          var _this3 = this;
          if (duration === void 0) {
            duration = 3.0;
          }
          if (this.notificationContainer && this.notificationLabel) {
            this.notificationLabel.string = message;
            this.notificationContainer.active = true;

            // Auto-hide after duration
            this.scheduleOnce(function () {
              _this3.hideNotification();
            }, duration);
          }
        }

        /**
         * Hide notification
         */;
        _proto.hideNotification = function hideNotification() {
          if (this.notificationContainer) {
            this.notificationContainer.active = false;
          }
        }

        /**
         * Format number for display
         */;
        _proto.formatNumber = function formatNumber(num) {
          if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
          } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
          }
          return num.toString();
        }

        /**
         * Animate building attack
         */;
        _proto.animateBuildingAttack = function animateBuildingAttack(buildingIndex) {
          if (buildingIndex < 0 || buildingIndex >= this.buildingNodes.length) return;
          var buildingNode = this.buildingNodes[buildingIndex];
          if (!buildingNode) return;

          // Shake animation
          var originalPosition = buildingNode.position;
          tween(buildingNode).to(0.1, {
            position: v3(originalPosition.x + 10, originalPosition.y, originalPosition.z)
          }).to(0.1, {
            position: v3(originalPosition.x - 10, originalPosition.y, originalPosition.z)
          }).to(0.1, {
            position: v3(originalPosition.x + 5, originalPosition.y, originalPosition.z)
          }).to(0.1, {
            position: v3(originalPosition.x - 5, originalPosition.y, originalPosition.z)
          }).to(0.1, {
            position: originalPosition
          }).start();
        }

        // Event Handlers

        /**
         * Handle loading target
         */;
        _proto.onLoadingTarget = function onLoadingTarget(isLoading) {
          if (isLoading) {
            this.showLoading('Loading target...');
            this.hideTargetInfo();
            this.hideAllBuildings();
          } else {
            this.hideLoading();
          }
        }

        /**
         * Handle target loaded
         */;
        _proto.onTargetLoaded = function onTargetLoaded(target) {
          this._currentTarget = target;
          this.hideLoading();
          this.refreshUI();
        }

        /**
         * Handle target load error
         */;
        _proto.onTargetLoadError = function onTargetLoadError(error) {
          this.hideLoading();
          this.showNotification('Failed to load target. Using offline mode.');
        }

        /**
         * Handle resource updated
         */;
        _proto.onResourceUpdated = function onResourceUpdated(event) {
          this.updateHeaderDisplay();
        }

        /**
         * Handle attack started
         */;
        _proto.onAttackStarted = function onAttackStarted(event) {
          var _this$_currentTarget;
          var buildingIndex = ((_this$_currentTarget = this._currentTarget) == null ? void 0 : _this$_currentTarget.buildings.findIndex(function (b) {
            return b.buildingId === event.buildingId;
          })) || -1;
          if (buildingIndex >= 0) {
            this.animateBuildingAttack(buildingIndex);
          }
          this.showNotification("Attacking " + event.targetPlayer + "...");
          this.updateBuildingsDisplay(); // Update button states
        }

        /**
         * Handle attack completed
         */;
        _proto.onAttackCompleted = function onAttackCompleted(result) {
          this.showAttackResult(result);
          this.updateHeaderDisplay();
          this.updateBuildingsDisplay();
        }

        /**
         * Handle attack error
         */;
        _proto.onAttackError = function onAttackError(event) {
          this.showNotification("Attack failed: " + event.error);
          this.updateBuildingsDisplay();
        }

        /**
         * Handle building already destroyed
         */;
        _proto.onBuildingAlreadyDestroyed = function onBuildingAlreadyDestroyed(event) {
          this.showNotification('Building is already destroyed!');
        }

        /**
         * Handle no attacks remaining
         */;
        _proto.onNoAttacksRemaining = function onNoAttacksRemaining() {
          this.showNotification('No attacks remaining! Get a new target.');
        }

        /**
         * Handle navigate to scene
         */;
        _proto.onNavigateToScene = function onNavigateToScene(sceneName) {
          director.loadScene(sceneName);
        }

        // Button Event Handlers

        /**
         * Handle new target button click
         */;
        _proto.onNewTargetClicked = /*#__PURE__*/
        function () {
          var _onNewTargetClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._viewModel) {
                    _context.next = 3;
                    break;
                  }
                  _context.next = 3;
                  return this._viewModel.executeCommand('getNewTarget');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onNewTargetClicked() {
            return _onNewTargetClicked.apply(this, arguments);
          }
          return onNewTargetClicked;
        }()
        /**
         * Handle back button click
         */;

        _proto.onBackClicked = function onBackClicked() {
          if (this._viewModel) {
            this._viewModel.executeCommand('goBack');
          }
        }

        /**
         * Handle attack button click
         */;
        _proto.onAttackClicked = /*#__PURE__*/
        function () {
          var _onAttackClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(buildingIndex) {
            var building;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this._viewModel || !this._currentTarget)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  building = this._currentTarget.buildings[buildingIndex];
                  if (!building) {
                    _context2.next = 6;
                    break;
                  }
                  _context2.next = 6;
                  return this._viewModel.executeCommand('attackBuilding', building.buildingId);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onAttackClicked(_x) {
            return _onAttackClicked.apply(this, arguments);
          }
          return onAttackClicked;
        }()
        /**
         * Handle result close button click
         */;

        _proto.onResultCloseClicked = function onResultCloseClicked() {
          this.hideResultUI();
        }

        /**
         * Called when view is shown
         */;
        _proto.onShow = function onShow() {
          _BaseView.prototype.onShow.call(this);

          // Initialize ViewModel if not already done
          if (!this._viewModel) {
            this._viewModel = new AttackViewModel();
            this.setViewModel(this._viewModel);
            this._viewModel.initialize();
          }
        }

        /**
         * Cleanup on destroy
         */;
        _proto.onDestroy = function onDestroy() {
          // Remove button event listeners
          if (this.newTargetButton) {
            this.newTargetButton.node.off(Button.EventType.CLICK, this.onNewTargetClicked, this);
          }
          if (this.backButton) {
            this.backButton.node.off(Button.EventType.CLICK, this.onBackClicked, this);
          }
          for (var i = 0; i < this.attackButtons.length; i++) {
            var button = this.attackButtons[i];
            if (button) {
              button.node.off(Button.EventType.CLICK);
            }
          }
          if (this.resultCloseButton) {
            this.resultCloseButton.node.off(Button.EventType.CLICK, this.onResultCloseClicked, this);
          }

          // Remove ViewModel event listeners
          if (this._viewModel) {
            this._viewModel.off('loadingTarget', this.onLoadingTarget, this);
            this._viewModel.off('targetLoaded', this.onTargetLoaded, this);
            this._viewModel.off('targetLoadError', this.onTargetLoadError, this);
            this._viewModel.off('resourceUpdated', this.onResourceUpdated, this);
            this._viewModel.off('attackStarted', this.onAttackStarted, this);
            this._viewModel.off('attackCompleted', this.onAttackCompleted, this);
            this._viewModel.off('attackError', this.onAttackError, this);
            this._viewModel.off('buildingAlreadyDestroyed', this.onBuildingAlreadyDestroyed, this);
            this._viewModel.off('noAttacksRemaining', this.onNoAttacksRemaining, this);
            this._viewModel.off('navigateToScene', this.onNavigateToScene, this);
          }
          _BaseView.prototype.onDestroy.call(this);
        };
        return AttackView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "attacksRemainingLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetInfoContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetPlayerNameLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetPlayerLevelLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetCityNameLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buildingNodes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buildingSprites", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buildingNameLabels", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "buildingLevelLabels", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabels", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "attackButtons", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "destroyedOverlays", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "newTargetButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "backButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "loadingContainer", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "loadingLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "resultContainer", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "resultTitleLabel", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "resultMessageLabel", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "resultRewardLabel", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "resultCloseButton", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "notificationContainer", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "notificationLabel", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AttackViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseViewModel.ts', './ServiceLocator.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseViewModel, ServiceLocator, logError;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseViewModel = module.BaseViewModel;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "80ea6qkB3hNk5+Xy4zFn1kg", "AttackViewModel", undefined);

      /**
       * Attack target player data
       */

      /**
       * Attack building data
       */

      /**
       * Attack result data
       */

      /**
       * Attack ViewModel - Handles attack scene logic
       */
      var AttackViewModel = exports('AttackViewModel', /*#__PURE__*/function (_BaseViewModel) {
        _inheritsLoose(AttackViewModel, _BaseViewModel);
        // Default attacks per session

        function AttackViewModel() {
          var _this;
          _this = _BaseViewModel.call(this) || this;
          _this._gameService = null;
          _this._resourceManager = null;
          _this._attackTarget = null;
          _this._isAttacking = false;
          _this._attacksRemaining = 3;
          return _this;
        }

        /**
         * Initialize ViewModel
         */
        var _proto = AttackViewModel.prototype;
        _proto.onInitialize = function onInitialize() {
          this.setupServices();
          this.setupEventListeners();
          this.loadAttackTarget();
        }

        /**
         * Setup services
         */;
        _proto.setupServices = function setupServices() {
          var serviceLocator = ServiceLocator.getInstance();
          this._gameService = serviceLocator.getService('GameService');
          this._resourceManager = serviceLocator.getService('ResourceManager');
          if (!this._gameService) {
            logError('GameService not found');
          }
          if (!this._resourceManager) {
            logError('ResourceManager not found');
          }
        }

        /**
         * Setup event listeners
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          // Resource manager events
          if (this._resourceManager) {
            this._resourceManager.on('resourceChanged', this.onResourceChanged, this);
          }
        }

        /**
         * Load attack target from server
         */;
        _proto.loadAttackTarget = /*#__PURE__*/
        function () {
          var _loadAttackTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var targetData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  this.emit('loadingTarget', true);
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 5;
                  return this._gameService.getAttackTarget();
                case 5:
                  targetData = _context.sent;
                  this._attackTarget = this.processTargetData(targetData);
                  _context.next = 10;
                  break;
                case 9:
                  // Generate mock target for offline mode
                  this._attackTarget = this.generateMockTarget();
                case 10:
                  this.emit('targetLoaded', this._attackTarget);
                  this.emit('loadingTarget', false);
                  _context.next = 21;
                  break;
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](0);
                  logError('Failed to load attack target:', _context.t0);
                  this.emit('targetLoadError', _context.t0);
                  this.emit('loadingTarget', false);

                  // Fallback to mock target
                  this._attackTarget = this.generateMockTarget();
                  this.emit('targetLoaded', this._attackTarget);
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 14]]);
          }));
          function loadAttackTarget() {
            return _loadAttackTarget.apply(this, arguments);
          }
          return loadAttackTarget;
        }()
        /**
         * Process target data from server
         */;

        _proto.processTargetData = function processTargetData(serverData) {
          var _serverData$buildings;
          return {
            playerId: serverData.playerId || 'unknown',
            playerName: serverData.playerName || 'Unknown Player',
            playerLevel: serverData.playerLevel || 1,
            cityName: serverData.cityName || 'Unknown City',
            buildings: ((_serverData$buildings = serverData.buildings) == null ? void 0 : _serverData$buildings.map(function (building) {
              return {
                buildingId: building.id || '',
                buildingType: building.type || 'building',
                level: building.level || 1,
                isDestroyed: building.isDestroyed || false,
                potentialReward: building.potentialReward || 100
              };
            })) || []
          };
        }

        /**
         * Generate mock target for testing/offline mode
         */;
        _proto.generateMockTarget = function generateMockTarget() {
          var playerNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
          var cityNames = ['Village', 'Town', 'City', 'Metropolis', 'Capital'];
          var buildingTypes = ['house', 'shop', 'factory', 'tower', 'castle'];
          var randomName = playerNames[Math.floor(Math.random() * playerNames.length)];
          var randomCity = cityNames[Math.floor(Math.random() * cityNames.length)];
          var randomLevel = Math.floor(Math.random() * 10) + 1;
          var buildings = [];
          for (var i = 0; i < 5; i++) {
            buildings.push({
              buildingId: "building_" + i,
              buildingType: buildingTypes[i],
              level: Math.floor(Math.random() * 3) + 1,
              isDestroyed: Math.random() < 0.2,
              // 20% chance of being destroyed
              potentialReward: Math.floor(Math.random() * 500) + 100
            });
          }
          return {
            playerId: "player_" + Date.now(),
            playerName: randomName,
            playerLevel: randomLevel,
            cityName: randomCity,
            buildings: buildings
          };
        }

        /**
         * Execute command
         */;
        _proto.executeCommand = /*#__PURE__*/
        function () {
          var _executeCommand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(command) {
            var _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = command;
                  _context2.next = _context2.t0 === 'attackBuilding' ? 3 : _context2.t0 === 'getNewTarget' ? 4 : _context2.t0 === 'goBack' ? 5 : _context2.t0 === 'refreshTarget' ? 6 : 7;
                  break;
                case 3:
                  return _context2.abrupt("return", this.attackBuilding(_args2.length <= 1 ? undefined : _args2[1]));
                case 4:
                  return _context2.abrupt("return", this.getNewTarget());
                case 5:
                  return _context2.abrupt("return", this.goBack());
                case 6:
                  return _context2.abrupt("return", this.loadAttackTarget());
                case 7:
                  throw new Error("Unknown command: " + command);
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function executeCommand(_x) {
            return _executeCommand.apply(this, arguments);
          }
          return executeCommand;
        }()
        /**
         * Attack a specific building
         */;

        _proto.attackBuilding = /*#__PURE__*/
        function () {
          var _attackBuilding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(buildingId) {
            var building, attackResult, serverResult;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(!this._attackTarget || this._isAttacking)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return", null);
                case 2:
                  building = this._attackTarget.buildings.find(function (b) {
                    return b.buildingId === buildingId;
                  });
                  if (building) {
                    _context3.next = 6;
                    break;
                  }
                  logError("Building not found: " + buildingId);
                  return _context3.abrupt("return", null);
                case 6:
                  if (!building.isDestroyed) {
                    _context3.next = 9;
                    break;
                  }
                  this.emit('buildingAlreadyDestroyed', {
                    buildingId: buildingId
                  });
                  return _context3.abrupt("return", null);
                case 9:
                  if (!(this._attacksRemaining <= 0)) {
                    _context3.next = 12;
                    break;
                  }
                  this.emit('noAttacksRemaining');
                  return _context3.abrupt("return", null);
                case 12:
                  _context3.prev = 12;
                  this._isAttacking = true;
                  this.emit('attackStarted', {
                    buildingId: buildingId,
                    targetPlayer: this._attackTarget.playerName
                  });
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context3.next = 22;
                    break;
                  }
                  _context3.next = 18;
                  return this._gameService.attackPlayer(this._attackTarget.playerId, buildingId);
                case 18:
                  serverResult = _context3.sent;
                  attackResult = this.processAttackResult(serverResult, buildingId);
                  _context3.next = 23;
                  break;
                case 22:
                  // Generate mock attack result
                  attackResult = this.generateMockAttackResult(buildingId, building);
                case 23:
                  _context3.next = 25;
                  return this.processAttackSuccess(attackResult);
                case 25:
                  this._attacksRemaining--;
                  this._isAttacking = false;
                  this.emit('attackCompleted', attackResult);
                  return _context3.abrupt("return", attackResult);
                case 31:
                  _context3.prev = 31;
                  _context3.t0 = _context3["catch"](12);
                  logError('Attack failed:', _context3.t0);
                  this._isAttacking = false;
                  this.emit('attackError', {
                    buildingId: buildingId,
                    error: _context3.t0.message
                  });
                  return _context3.abrupt("return", null);
                case 37:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[12, 31]]);
          }));
          function attackBuilding(_x2) {
            return _attackBuilding.apply(this, arguments);
          }
          return attackBuilding;
        }()
        /**
         * Process attack result from server
         */;

        _proto.processAttackResult = function processAttackResult(serverResult, buildingId) {
          return {
            success: serverResult.success || false,
            buildingId: buildingId,
            goldEarned: serverResult.goldEarned || 0,
            damageDealt: serverResult.damageDealt || false,
            message: serverResult.message || 'Attack completed'
          };
        }

        /**
         * Generate mock attack result
         */;
        _proto.generateMockAttackResult = function generateMockAttackResult(buildingId, building) {
          var success = Math.random() < 0.7; // 70% success rate
          var goldEarned = success ? Math.floor(building.potentialReward * (0.5 + Math.random() * 0.5)) : 0;
          var damageDealt = success && Math.random() < 0.3; // 30% chance to destroy building

          return {
            success: success,
            buildingId: buildingId,
            goldEarned: goldEarned,
            damageDealt: damageDealt,
            message: success ? damageDealt ? 'Building destroyed! Great attack!' : 'Attack successful!' : 'Attack failed! Better luck next time.'
          };
        }

        /**
         * Process successful attack
         */;
        _proto.processAttackSuccess = /*#__PURE__*/
        function () {
          var _processAttackSuccess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(attackResult) {
            var building;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(!attackResult.success || !this._attackTarget)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  if (!(attackResult.goldEarned > 0 && this._resourceManager)) {
                    _context4.next = 5;
                    break;
                  }
                  _context4.next = 5;
                  return this._resourceManager.addGold(attackResult.goldEarned, 'attack_reward');
                case 5:
                  // Update building state if damaged
                  if (attackResult.damageDealt) {
                    building = this._attackTarget.buildings.find(function (b) {
                      return b.buildingId === attackResult.buildingId;
                    });
                    if (building) {
                      building.isDestroyed = true;
                    }
                  }
                case 6:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function processAttackSuccess(_x3) {
            return _processAttackSuccess.apply(this, arguments);
          }
          return processAttackSuccess;
        }()
        /**
         * Get new attack target
         */;

        _proto.getNewTarget = /*#__PURE__*/
        function () {
          var _getNewTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this._attackTarget = null;
                  this._attacksRemaining = 3; // Reset attacks
                  _context5.next = 4;
                  return this.loadAttackTarget();
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function getNewTarget() {
            return _getNewTarget.apply(this, arguments);
          }
          return getNewTarget;
        }()
        /**
         * Go back to main scene
         */;

        _proto.goBack = function goBack() {
          this.emit('navigateToScene', 'Main');
        }

        // Event Handlers

        /**
         * Handle resource changes
         */;
        _proto.onResourceChanged = function onResourceChanged(event) {
          this.emit('resourceUpdated', event);
        }

        // Getters

        /**
         * Get current attack target
         */;
        /**
         * Cleanup resources
         */
        _proto.destroy = function destroy() {
          // Remove event listeners
          if (this._resourceManager) {
            this._resourceManager.off('resourceChanged', this.onResourceChanged, this);
          }

          // Clear references
          this._gameService = null;
          this._resourceManager = null;
          this._attackTarget = null;
          this._isAttacking = false;
          _BaseViewModel.prototype.destroy.call(this);
        };
        _createClass(AttackViewModel, [{
          key: "attackTarget",
          get: function get() {
            return this._attackTarget;
          }

          /**
           * Get current gold amount
           */
        }, {
          key: "currentGold",
          get: function get() {
            return this._resourceManager ? this._resourceManager.getGold() : 0;
          }

          /**
           * Check if currently attacking
           */
        }, {
          key: "isAttacking",
          get: function get() {
            return this._isAttacking;
          }

          /**
           * Get remaining attacks
           */
        }, {
          key: "attacksRemaining",
          get: function get() {
            return this._attacksRemaining;
          }

          /**
           * Check if has attacks remaining
           */
        }, {
          key: "hasAttacksRemaining",
          get: function get() {
            return this._attacksRemaining > 0;
          }

          /**
           * Get target player name
           */
        }, {
          key: "targetPlayerName",
          get: function get() {
            return this._attackTarget ? this._attackTarget.playerName : '';
          }

          /**
           * Get target city name
           */
        }, {
          key: "targetCityName",
          get: function get() {
            return this._attackTarget ? this._attackTarget.cityName : '';
          }

          /**
           * Get target player level
           */
        }, {
          key: "targetPlayerLevel",
          get: function get() {
            return this._attackTarget ? this._attackTarget.playerLevel : 1;
          }

          /**
           * Get available buildings for attack
           */
        }, {
          key: "availableBuildings",
          get: function get() {
            if (!this._attackTarget) return [];
            return this._attackTarget.buildings.filter(function (building) {
              return !building.isDestroyed;
            });
          }

          /**
           * Get destroyed buildings
           */
        }, {
          key: "destroyedBuildings",
          get: function get() {
            if (!this._attackTarget) return [];
            return this._attackTarget.buildings.filter(function (building) {
              return building.isDestroyed;
            });
          }

          /**
           * Get total potential reward
           */
        }, {
          key: "totalPotentialReward",
          get: function get() {
            if (!this._attackTarget) return 0;
            return this.availableBuildings.reduce(function (total, building) {
              return total + building.potentialReward;
            }, 0);
          }
        }]);
        return AttackViewModel;
      }(BaseViewModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _extends, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98eb43ZEzhKurU5Otb++Pg0", "BaseModel", undefined);

      /**
       * Base Model class for MVVM architecture
       * All data models should extend this class
       */
      var BaseModel = exports('BaseModel', /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(BaseModel, _EventTarget);
        function BaseModel() {
          var _this;
          _this = _EventTarget.call(this) || this;
          _this._data = {};
          return _this;
        }

        /**
         * Get data property
         */
        var _proto = BaseModel.prototype;
        _proto.getData = function getData(key) {
          return this._data[key];
        }

        /**
         * Set data property and notify observers
         */;
        _proto.setData = function setData(key, value) {
          var oldValue = this._data[key];
          if (oldValue !== value) {
            this._data[key] = value;
            this.emit('dataChanged', {
              key: key,
              value: value,
              oldValue: oldValue
            });
            this.emit(key + "Changed", {
              value: value,
              oldValue: oldValue
            });
          }
        }

        /**
         * Initialize model with data
         */;
        _proto.initialize = function initialize(data) {
          this._data = _extends({}, data);
          this.emit('initialized', this._data);
        }

        /**
         * Get all data
         */;
        _proto.getAllData = function getAllData() {
          return _extends({}, this._data);
        }

        /**
         * Reset model to initial state
         */;
        _proto.reset = function reset() {
          this._data = {};
          this.emit('reset');
        }

        /**
         * Validate model data
         */;
        /**
         * Serialize model to JSON
         */
        _proto.toJSON = function toJSON() {
          return this.getAllData();
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(json) {
          this.initialize(json);
        };
        return BaseModel;
      }(EventTarget));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, EventTarget, logError;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }, function (module) {
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff8c2OV8JFBAIhJgSoFtCDP", "BaseService", undefined);

      /**
       * Base Service class for handling business logic and external communications
       */
      var BaseService = exports('BaseService', /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(BaseService, _EventTarget);
        function BaseService() {
          var _this;
          _this = _EventTarget.call(this) || this;
          _this._isInitialized = false;
          _this._isConnected = false;
          return _this;
        }

        /**
         * Initialize service
         */
        var _proto = BaseService.prototype;
        _proto.initialize = /*#__PURE__*/
        function () {
          var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._isInitialized) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return this.onInitialize();
                case 5:
                  this._isInitialized = true;
                  this.emit('initialized');
                  _context.next = 14;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](2);
                  logError("Failed to initialize " + this.constructor.name + ":", _context.t0);
                  this.emit('initializationFailed', _context.t0);
                  throw _context.t0;
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 9]]);
          }));
          function initialize() {
            return _initialize.apply(this, arguments);
          }
          return initialize;
        }()
        /**
         * Override this method to handle service initialization
         */;
        /**
         * Connect to external service
         */
        _proto.connect = /*#__PURE__*/
        function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this._isConnected) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.prev = 2;
                  _context2.next = 5;
                  return this.onConnect();
                case 5:
                  this._isConnected = true;
                  this.emit('connected');
                  _context2.next = 14;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](2);
                  logError("Failed to connect " + this.constructor.name + ":", _context2.t0);
                  this.emit('connectionFailed', _context2.t0);
                  throw _context2.t0;
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[2, 9]]);
          }));
          function connect() {
            return _connect.apply(this, arguments);
          }
          return connect;
        }()
        /**
         * Override this method to handle connection logic
         */;
        /**
         * Disconnect from external service
         */
        _proto.disconnect = /*#__PURE__*/
        function () {
          var _disconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this._isConnected) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  _context3.prev = 2;
                  _context3.next = 5;
                  return this.onDisconnect();
                case 5:
                  this._isConnected = false;
                  this.emit('disconnected');
                  _context3.next = 14;
                  break;
                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](2);
                  logError("Failed to disconnect " + this.constructor.name + ":", _context3.t0);
                  this.emit('disconnectionFailed', _context3.t0);
                  throw _context3.t0;
                case 14:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[2, 9]]);
          }));
          function disconnect() {
            return _disconnect.apply(this, arguments);
          }
          return disconnect;
        }()
        /**
         * Override this method to handle disconnection logic
         */;
        /**
         * Cleanup resources
         */
        _proto.destroy = function destroy() {
          if (this._isConnected) {
            this.disconnect()["catch"](console.error);
          }
          this._isInitialized = false;
          this.targetOff(this);
        };
        _createClass(BaseService, [{
          key: "isInitialized",
          get:
          /**
           * Check if service is initialized
           */
          function get() {
            return this._isInitialized;
          }

          /**
           * Check if service is connected
           */
        }, {
          key: "isConnected",
          get: function get() {
            return this._isConnected;
          }
        }]);
        return BaseService;
      }(EventTarget));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Component, logInfo;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      logInfo = module.logInfo;
    }],
    execute: function () {
      cclegacy._RF.push({}, "56b2ebPjTVDHKvVrG5T16ZC", "BaseView", undefined);

      /**
       * Base View class for MVVM architecture
       * All UI components should extend this class
       */
      var BaseView = exports('BaseView', /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseView, _Component);
        function BaseView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._viewModel = null;
          _this._isInitialized = false;
          return _this;
        }
        var _proto = BaseView.prototype;
        /**
         * Set the ViewModel for this View
         */
        _proto.setViewModel = function setViewModel(viewModel) {
          if (this._viewModel) {
            this._viewModel.off('modelDataChanged', this.onViewModelDataChanged, this);
            this._viewModel.off('modelInitialized', this.onViewModelInitialized, this);
          }
          this._viewModel = viewModel;
          if (this._viewModel) {
            this._viewModel.on('modelDataChanged', this.onViewModelDataChanged, this);
            this._viewModel.on('modelInitialized', this.onViewModelInitialized, this);
          }
        }

        /**
         * Get the current ViewModel
         */;
        _proto.getViewModel = function getViewModel() {
          return this._viewModel;
        }

        /**
         * Initialize View
         */;
        _proto.onLoad = function onLoad() {
          logInfo("BaseView: onLoad called for " + this.constructor.name);
          this.initializeView();
        }

        /**
         * Initialize View components
         */;
        _proto.initializeView = function initializeView() {
          logInfo("BaseView: initializeView called for " + this.constructor.name);
          this._isInitialized = true;
          this.setupUI();
          this.bindEvents();
          logInfo("BaseView: initializeView completed for " + this.constructor.name);
        }

        /**
         * Setup UI components - override in derived classes
         */;
        /**
         * Handle ViewModel data changes
         */
        _proto.onViewModelDataChanged = function onViewModelDataChanged(event) {
          this.updateUI(event.key, event.value, event.oldValue);
        }

        /**
         * Handle ViewModel initialization
         */;
        _proto.onViewModelInitialized = function onViewModelInitialized(data) {
          this.refreshUI();
        }

        /**
         * Update UI based on data changes - override in derived classes
         */;
        /**
         * Execute command through ViewModel
         */
        _proto.executeCommand = /*#__PURE__*/
        function () {
          var _executeCommand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(command) {
            var _this$_viewModel,
              _len2,
              args,
              _key2,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._viewModel) {
                    _context.next = 5;
                    break;
                  }
                  for (_len2 = _args.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = _args[_key2];
                  }
                  _context.next = 4;
                  return (_this$_viewModel = this._viewModel).executeCommand.apply(_this$_viewModel, [command].concat(args));
                case 4:
                  return _context.abrupt("return", _context.sent);
                case 5:
                  return _context.abrupt("return", null);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function executeCommand(_x) {
            return _executeCommand.apply(this, arguments);
          }
          return executeCommand;
        }()
        /**
         * Show view
         */;

        _proto.show = function show() {
          this.node.active = true;
          this.onShow();
        }

        /**
         * Hide view
         */;
        _proto.hide = function hide() {
          this.node.active = false;
          this.onHide();
        }

        /**
         * Called when view is shown - override in derived classes
         */;
        _proto.onShow = function onShow() {
          // Override in derived classes
        }

        /**
         * Called when view is hidden - override in derived classes
         */;
        _proto.onHide = function onHide() {
          // Override in derived classes
        }

        /**
         * Check if View is initialized
         */;
        /**
         * Cleanup resources
         */
        _proto.onDestroy = function onDestroy() {
          if (this._viewModel) {
            this._viewModel.off('modelDataChanged', this.onViewModelDataChanged, this);
            this._viewModel.off('modelInitialized', this.onViewModelInitialized, this);
            this._viewModel.destroy();
          }
          this._viewModel = null;
          this._isInitialized = false;
        };
        _createClass(BaseView, [{
          key: "isInitialized",
          get: function get() {
            return this._isInitialized;
          }
        }]);
        return BaseView;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "55b46hrskpGdLofNgPAYLjo", "BaseViewModel", undefined);
      /**
       * Base ViewModel class for MVVM architecture
       * Handles communication between Model and View
       */
      var BaseViewModel = exports('BaseViewModel', /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(BaseViewModel, _EventTarget);
        function BaseViewModel() {
          var _this;
          _this = _EventTarget.call(this) || this;
          _this._model = null;
          _this._isInitialized = false;
          return _this;
        }

        /**
         * Set the model for this ViewModel
         */
        var _proto = BaseViewModel.prototype;
        _proto.setModel = function setModel(model) {
          if (this._model) {
            this._model.off('dataChanged', this.onModelDataChanged, this);
            this._model.off('initialized', this.onModelInitialized, this);
          }
          this._model = model;
          if (this._model) {
            this._model.on('dataChanged', this.onModelDataChanged, this);
            this._model.on('initialized', this.onModelInitialized, this);
          }
        }

        /**
         * Get the current model
         */;
        _proto.getModel = function getModel() {
          return this._model;
        }

        /**
         * Initialize ViewModel
         */;
        _proto.initialize = function initialize() {
          this._isInitialized = true;
          this.onInitialize();
          this.emit('initialized');
        }

        /**
         * Override this method to handle initialization
         */;
        _proto.onInitialize = function onInitialize() {
          // Override in derived classes
        }

        /**
         * Handle model data changes
         */;
        _proto.onModelDataChanged = function onModelDataChanged(event) {
          this.emit('modelDataChanged', event);
        }

        /**
         * Handle model initialization
         */;
        _proto.onModelInitialized = function onModelInitialized(data) {
          this.emit('modelInitialized', data);
        }

        /**
         * Execute command
         */;
        /**
         * Cleanup resources
         */
        _proto.destroy = function destroy() {
          if (this._model) {
            this._model.off('dataChanged', this.onModelDataChanged, this);
            this._model.off('initialized', this.onModelInitialized, this);
          }
          this._model = null;
          this._isInitialized = false;
          this.targetOff(this);
        };
        _createClass(BaseViewModel, [{
          key: "isInitialized",
          get:
          /**
           * Check if ViewModel is initialized
           */
          function get() {
            return this._isInitialized;
          }
        }]);
        return BaseViewModel;
      }(EventTarget));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseModel.ts', './GameConfig.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, BaseModel, GameConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseModel = module.BaseModel;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "633f6BVZdtJtLlKywU7kdHc", "BuildingModel", undefined);

      /**
       * Building data structure
       */

      /**
       * Building Model - Represents a single building in a city
       */
      var BuildingModel = exports('BuildingModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(BuildingModel, _BaseModel);
        function BuildingModel(id, cityLevel) {
          var _this;
          _this = _BaseModel.call(this) || this;
          _this.DEFAULT_MAX_LEVEL = 3;
          _this.DEFAULT_COST_MULTIPLIER = 1.5;
          var gameConfig = GameConfig.getInstance();
          var buildingConfig = gameConfig.getBuildingConfig(cityLevel, id);
          if (!buildingConfig) {
            throw new Error("Building config for id " + id + " in city level " + cityLevel + " not found");
          }
          _this.initialize({
            id: id,
            name: buildingConfig.name,
            level: 0,
            maxLevel: buildingConfig.maxLevel || _this.DEFAULT_MAX_LEVEL,
            baseCost: buildingConfig.baseCost,
            costMultiplier: buildingConfig.costMultiplier || _this.DEFAULT_COST_MULTIPLIER
          });
          return _this;
        }

        /**
         * Get building ID (e.g., 'house', 'shop')
         */
        var _proto = BuildingModel.prototype;
        /**
         * Calculate upgrade cost for next level
         */
        _proto.getUpgradeCost = function getUpgradeCost() {
          if (this.isMaxLevel()) {
            return 0;
          }
          var nextLevel = this.level + 1;
          return Math.floor(this.baseCost * Math.pow(this.costMultiplier, nextLevel - 1));
        }

        /**
         * Check if building is at maximum level
         */;
        _proto.isMaxLevel = function isMaxLevel() {
          return this.level >= this.maxLevel;
        }

        /**
         * Check if building can be upgraded
         */;
        _proto.canUpgrade = function canUpgrade() {
          return !this.isMaxLevel();
        }

        /**
         * Upgrade building to next level
         */;
        _proto.upgrade = function upgrade() {
          if (this.canUpgrade()) {
            this.level += 1;
            this.emit('upgraded', {
              buildingId: this.id,
              newLevel: this.level,
              isMaxLevel: this.isMaxLevel()
            });
            return true;
          }
          return false;
        }

        /**
         * Get upgrade progress (0-1)
         */;
        _proto.getUpgradeProgress = function getUpgradeProgress() {
          return this.maxLevel > 0 ? this.level / this.maxLevel : 0;
        }

        /**
         * Reset building to level 0
         */;
        _proto.resetBuilding = function resetBuilding() {
          this.level = 0;
          this.emit('reset', {
            buildingId: this.id
          });
        }

        /**
         * Validate model data
         */;
        _proto.validate = function validate() {
          var level = this.level;
          var maxLevel = this.maxLevel;
          var baseCost = this.baseCost;
          var costMultiplier = this.costMultiplier;
          var id = this.id;
          return id && id.length > 0 && level >= 0 && maxLevel > 0 && level <= maxLevel && baseCost > 0 && costMultiplier >= 1;
        }

        /**
         * Serialize to JSON
         */;
        _proto.toJSON = function toJSON() {
          return {
            id: this.id,
            level: this.level,
            maxLevel: this.maxLevel,
            baseCost: this.baseCost,
            costMultiplier: this.costMultiplier
          };
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(data) {
          this.initialize({
            id: data.id || '',
            level: data.level || 0,
            maxLevel: data.maxLevel || this.DEFAULT_MAX_LEVEL,
            baseCost: data.baseCost || 100,
            costMultiplier: data.costMultiplier || this.DEFAULT_COST_MULTIPLIER
          });
        };
        _createClass(BuildingModel, [{
          key: "id",
          get: function get() {
            return this.getData('id') || '';
          }
        }, {
          key: "name",
          get: function get() {
            return this.getData('name') || '';
          },
          set: function set(value) {
            this.setData('name', value);
          }

          /**
           * Get current level
           */
        }, {
          key: "level",
          get: function get() {
            return this.getData('level') || 0;
          }

          /**
           * Set building level
           */,
          set: function set(value) {
            var maxLevel = this.maxLevel;
            this.setData('level', Math.max(0, Math.min(value, maxLevel)));
          }

          /**
           * Get maximum level
           */
        }, {
          key: "maxLevel",
          get: function get() {
            return this.getData('maxLevel') || this.DEFAULT_MAX_LEVEL;
          }

          /**
           * Set maximum level
           */,
          set: function set(value) {
            this.setData('maxLevel', Math.max(1, value));
          }

          /**
           * Get base cost for level 1
           */
        }, {
          key: "baseCost",
          get: function get() {
            return this.getData('baseCost') || 100;
          }

          /**
           * Set base cost
           */,
          set: function set(value) {
            this.setData('baseCost', Math.max(1, value));
          }

          /**
           * Get cost multiplier per level
           */
        }, {
          key: "costMultiplier",
          get: function get() {
            return this.getData('costMultiplier') || this.DEFAULT_COST_MULTIPLIER;
          }

          /**
           * Set cost multiplier
           */,
          set: function set(value) {
            this.setData('costMultiplier', Math.max(1, value));
          }
        }]);
        return BuildingModel;
      }(BaseModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheatComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, log, Component, ServiceLocator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      log = module.log;
      Component = module.Component;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8ce81yCyoNLqrIyVJ1RA1ee", "CheatComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CheatComponent = exports('CheatComponent', (_dec = ccclass('CheatComponent'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CheatComponent, _Component);
        function CheatComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "inputEnergy", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inputGold", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CheatComponent.prototype;
        /**
         * Handle click event for setting energy values
         * Validates input, retrieves player model, and updates energy with proper error handling
         */
        _proto.onClickBtnSetEnergy = function onClickBtnSetEnergy() {
          try {
            // Validate input field exists
            if (!this.inputEnergy) {
              log("Error: Energy input field is not assigned");
              return;
            }

            // Parse and validate energy value
            var energyInput = this.inputEnergy.string.trim();
            if (!energyInput) {
              log("Error: Energy input is empty");
              return;
            }
            var energyValue = Number(energyInput);

            // Validate numeric input
            if (isNaN(energyValue)) {
              log("Error: Energy input is not a valid number");
              return;
            }

            // Validate energy range (must be non-negative and reasonable)
            if (energyValue < 0) {
              log("Error: Energy value cannot be negative");
              return;
            }
            if (energyValue > 999999) {
              log("Error: Energy value is too large (max: 999999)");
              return;
            }

            // Get game service and player model
            var serviceLocator = ServiceLocator.getInstance();
            var gameService = serviceLocator.getService('GameService');
            if (!gameService) {
              log("Error: GameService not found");
              return;
            }
            var playerModel = gameService.getPlayerModel();
            if (!playerModel) {
              log("Error: PlayerModel not found");
              return;
            }
            var resourceModel = playerModel.resources;
            if (!resourceModel) {
              log("Error: ResourceModel not found");
              return;
            }

            // Set the energy value
            resourceModel.energy = energyValue;
            log("Energy successfully set to: " + energyValue);

            // Clear input field after successful operation
            this.inputEnergy.string = '';
          } catch (error) {
            log("Error in onClickBtnSetEnergy: " + error);
          }
        }

        /**
         * Handle click event for setting gold values
         * Validates input, retrieves player model, and updates gold with proper error handling
         */;
        _proto.onClickBtnSetGold = function onClickBtnSetGold() {
          try {
            // Validate input field exists
            if (!this.inputGold) {
              log("Error: Gold input field is not assigned");
              return;
            }

            // Parse and validate gold value
            var goldInput = this.inputGold.string.trim();
            if (!goldInput) {
              log("Error: Gold input is empty");
              return;
            }
            var goldValue = Number(goldInput);

            // Validate numeric input
            if (isNaN(goldValue)) {
              log("Error: Gold input is not a valid number");
              return;
            }

            // Validate gold range (must be non-negative and reasonable)
            if (goldValue < 0) {
              log("Error: Gold value cannot be negative");
              return;
            }
            if (goldValue > 999999999) {
              log("Error: Gold value is too large (max: 999999999)");
              return;
            }

            // Get game service and player model
            var serviceLocator = ServiceLocator.getInstance();
            var gameService = serviceLocator.getService('GameService');
            if (!gameService) {
              log("Error: GameService not found");
              return;
            }
            var playerModel = gameService.getPlayerModel();
            if (!playerModel) {
              log("Error: PlayerModel not found");
              return;
            }
            var resourceModel = playerModel.resources;
            if (!resourceModel) {
              log("Error: ResourceModel not found");
              return;
            }

            // Set the gold value
            resourceModel.gold = goldValue;
            log("Gold successfully set to: " + goldValue);

            // Clear input field after successful operation
            this.inputGold.string = '';
          } catch (error) {
            log("Error in onClickBtnSetGold: " + error);
          }
        };
        _proto.onClickBtnClose = function onClickBtnClose() {
          this.hide();
        };
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.hide = function hide() {
          this.node.active = false;
        };
        return CheatComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inputEnergy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inputGold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CityModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseModel.ts', './BuildingModel.ts', './GameConfig.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, BaseModel, BuildingModel, GameConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseModel = module.BaseModel;
    }, function (module) {
      BuildingModel = module.BuildingModel;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a76bbBagQFNAr+y6UZNWnbX", "CityModel", undefined);

      /**
       * City data structure
       */

      /**
       * City Model - Represents a city with multiple buildings
       */
      var CityModel = exports('CityModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(CityModel, _BaseModel);
        function CityModel(level) {
          var _this;
          _this = _BaseModel.call(this) || this;
          _this._buildings = new Map();
          var gameConfig = GameConfig.getInstance();
          var cityConfig = gameConfig.getCityConfig(level);
          if (!cityConfig) {
            throw new Error("City config for level " + level + " not found");
          }
          _this.initialize({
            id: cityConfig.id,
            name: cityConfig.name,
            level: cityConfig.level,
            isCompleted: false,
            completionReward: cityConfig.completionReward
          });
          _this.initializeBuildings();
          return _this;
        }

        /**
         * Initialize buildings for this city
         */
        var _proto = CityModel.prototype;
        _proto.initializeBuildings = function initializeBuildings() {
          var gameConfig = GameConfig.getInstance();
          var cityConfig = gameConfig.getCityConfig(this.level);

          // Use configuration from GameConfig
          for (var i = 0; i < cityConfig.buildings.length; i++) {
            var buildingConfig = cityConfig.buildings[i];
            var building = new BuildingModel(buildingConfig.id, this.level);
            building.on('upgraded', this.onBuildingUpgraded, this);
            building.on('reset', this.onBuildingReset, this);
            this._buildings.set(buildingConfig.id, building);
          }
        }

        /**
         * Get city ID
         */;
        /**
         * Get all buildings
         */
        _proto.getBuildings = function getBuildings() {
          return Array.from(this._buildings.values());
        }

        /**
         * Get building by ID
         */;
        _proto.getBuilding = function getBuilding(buildingId) {
          return this._buildings.get(buildingId) || null;
        }

        /**
         * Get building by index
         */;
        _proto.getBuildingByIndex = function getBuildingByIndex(index) {
          var buildings = this.getBuildings();
          return buildings[index] || null;
        }

        /**
         * Check if all buildings are at maximum level
         */;
        _proto.areAllBuildingsMaxLevel = function areAllBuildingsMaxLevel() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._buildings.values()), _step; !(_step = _iterator()).done;) {
            var building = _step.value;
            if (!building.isMaxLevel()) {
              return false;
            }
          }
          return true;
        }

        /**
         * Get city completion progress (0-1)
         */;
        _proto.getCompletionProgress = function getCompletionProgress() {
          var totalLevels = 0;
          var maxTotalLevels = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._buildings.values()), _step2; !(_step2 = _iterator2()).done;) {
            var building = _step2.value;
            totalLevels += building.level;
            maxTotalLevels += building.maxLevel;
          }
          return maxTotalLevels > 0 ? totalLevels / maxTotalLevels : 0;
        }

        /**
         * Get total upgrade cost for all buildings to next level
         */;
        _proto.getTotalUpgradeCost = function getTotalUpgradeCost() {
          var totalCost = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._buildings.values()), _step3; !(_step3 = _iterator3()).done;) {
            var building = _step3.value;
            if (building.canUpgrade()) {
              totalCost += building.getUpgradeCost();
            }
          }
          return totalCost;
        }

        /**
         * Upgrade a specific building
         */;
        _proto.upgradeBuilding = function upgradeBuilding(buildingId) {
          var building = this._buildings.get(buildingId);
          if (building && building.canUpgrade()) {
            return building.upgrade();
          }
          return false;
        }

        /**
         * Handle building upgrade event
         */;
        _proto.onBuildingUpgraded = function onBuildingUpgraded(event) {
          this.emit('buildingUpgraded', event);

          // Check if city is completed
          if (this.areAllBuildingsMaxLevel() && !this.isCompleted) {
            this.completeCity();
          }
        }

        /**
         * Handle building reset event
         */;
        _proto.onBuildingReset = function onBuildingReset(event) {
          this.emit('buildingReset', event);

          // Mark city as not completed if it was completed
          if (this.isCompleted) {
            this.setData('isCompleted', false);
            this.emit('cityIncomplete', {
              cityId: this.id
            });
          }
        }

        /**
         * Complete the city
         */;
        _proto.completeCity = function completeCity() {
          this.setData('isCompleted', true);
          this.emit('cityCompleted', {
            cityId: this.id,
            cityName: this.name,
            reward: this.completionReward
          });
        }

        /**
         * Reset all buildings in the city
         */;
        _proto.resetCity = function resetCity() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._buildings.values()), _step4; !(_step4 = _iterator4()).done;) {
            var building = _step4.value;
            building.resetBuilding();
          }
          this.setData('isCompleted', false);
          this.emit('cityReset', {
            cityId: this.id
          });
        }

        /**
         * Validate model data
         */;
        _proto.validate = function validate() {
          var id = this.id;
          var name = this.name;
          var level = this.level;
          var completionReward = this.completionReward;

          // Validate basic properties
          if (!id || !name || level < 1 || completionReward < 0) {
            return false;
          }

          // Validate buildings
          var gameConfig = GameConfig.getInstance();
          var cityConfig = gameConfig.getCityConfig(this.level);
          var expectedBuildingCount = cityConfig && cityConfig.buildings ? cityConfig.buildings.length : 5;
          if (this._buildings.size !== expectedBuildingCount) {
            return false;
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._buildings.values()), _step5; !(_step5 = _iterator5()).done;) {
            var building = _step5.value;
            if (!building.validate()) {
              return false;
            }
          }
          return true;
        }

        /**
         * Serialize to JSON
         */;
        _proto.toJSON = function toJSON() {
          var buildings = [];
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._buildings.values()), _step6; !(_step6 = _iterator6()).done;) {
            var building = _step6.value;
            buildings.push(building.toJSON());
          }
          return {
            id: this.id,
            name: this.name,
            level: this.level,
            isCompleted: this.isCompleted,
            buildings: buildings,
            completionReward: this.completionReward
          };
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(data) {
          this.initialize({
            id: data.id || '',
            name: data.name || '',
            level: data.level || 1,
            isCompleted: data.isCompleted || false,
            completionReward: data.completionReward || 0
          });

          // Clear existing buildings
          for (var _iterator7 = _createForOfIteratorHelperLoose(this._buildings.values()), _step7; !(_step7 = _iterator7()).done;) {
            var _building = _step7.value;
            _building.targetOff(this);
          }
          this._buildings.clear();

          // Load buildings from data
          if (data.buildings && data.buildings.length > 0) {
            for (var _iterator8 = _createForOfIteratorHelperLoose(data.buildings), _step8; !(_step8 = _iterator8()).done;) {
              var buildingData = _step8.value;
              var building = new BuildingModel(buildingData.id, this.level);
              building.fromJSON(buildingData);
              building.on('upgraded', this.onBuildingUpgraded, this);
              building.on('reset', this.onBuildingReset, this);
              this._buildings.set(building.id, building);
            }
          }
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._buildings.values()), _step9; !(_step9 = _iterator9()).done;) {
            var building = _step9.value;
            building.targetOff(this);
            building.reset();
          }
          this._buildings.clear();
          _BaseModel.prototype.reset.call(this);
        };
        _createClass(CityModel, [{
          key: "id",
          get: function get() {
            return this.getData('id') || '';
          }

          /**
           * Get city name
           */
        }, {
          key: "name",
          get: function get() {
            return this.getData('name') || '';
          }

          /**
           * Set city name
           */,
          set: function set(value) {
            this.setData('name', value);
          }

          /**
           * Get city level
           */
        }, {
          key: "level",
          get: function get() {
            return this.getData('level') || 1;
          }

          /**
           * Get completion status
           */
        }, {
          key: "isCompleted",
          get: function get() {
            return this.getData('isCompleted') || false;
          }

          /**
           * Get completion reward
           */
        }, {
          key: "completionReward",
          get: function get() {
            return this.getData('completionReward') || 0;
          }
        }]);
        return CityModel;
      }(BaseModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CityView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './CityViewModel.ts', './Logger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, ProgressBar, Node, Sprite, Button, log, v3, Color, tween, director, BaseView, CityViewModel, logError;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      Sprite = module.Sprite;
      Button = module.Button;
      log = module.log;
      v3 = module.v3;
      Color = module.Color;
      tween = module.tween;
      director = module.director;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      CityViewModel = module.CityViewModel;
    }, function (module) {
      logError = module.logError;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "b5969WZCAFGrZEV8MPqMTNc", "CityView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * City View - UI for city building scene
       */
      var CityView = exports('CityView', (_dec = ccclass('CityView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(ProgressBar), _dec5 = property(Label), _dec6 = property([Node]), _dec7 = property([Sprite]), _dec8 = property([Label]), _dec9 = property([Label]), _dec10 = property([Button]), _dec11 = property([Label]), _dec12 = property(Button), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Button), _dec17 = property(Node), _dec18 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(CityView, _BaseView);
        function CityView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          // Header UI
          _initializerDefineProperty(_this, "cityNameLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cityProgressBar", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cityProgressLabel", _descriptor4, _assertThisInitialized(_this));
          // Building UI
          _initializerDefineProperty(_this, "buildingNodes", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingSprites", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingNameLabels", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildingLevelLabels", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeButtons", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeCostLabels", _descriptor10, _assertThisInitialized(_this));
          // Navigation
          _initializerDefineProperty(_this, "backButton", _descriptor11, _assertThisInitialized(_this));
          // Completion UI
          _initializerDefineProperty(_this, "completionContainer", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "completionTitleLabel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "completionRewardLabel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "completionCloseButton", _descriptor15, _assertThisInitialized(_this));
          // Notification UI
          _initializerDefineProperty(_this, "notificationContainer", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notificationLabel", _descriptor17, _assertThisInitialized(_this));
          _this._viewModel = null;
          _this._buildingData = [];
          return _this;
        }
        var _proto = CityView.prototype;
        /**
         * Setup UI components
         */
        _proto.setupUI = function setupUI() {
          this.bindUI();
          // Initialize UI state
          this.updateHeaderDisplay();
          this.updateBuildingDisplay();
          this.hideCompletionUI();
          this.hideNotification();
        };
        _proto.bindUI = function bindUI() {
          for (var i = 0; i < this.buildingNodes.length; i++) {
            var buildingNode = this.buildingNodes[i];
            var buildingSprite = buildingNode.getChildByName('BuildingSprite');
            var buildingNameLabel = buildingNode.getChildByName('BuildingNameLabel');
            var buildingLevelLabel = buildingNode.getChildByName('BuildingLevelLabel');
            var upgradeButton = buildingNode.getChildByName('UpgradeButton');
            var upgradeCostLabel = upgradeButton.getChildByName('UpgradeCostLabel');
            if (buildingSprite) {
              this.buildingSprites.push(buildingSprite.getComponent(Sprite));
            }
            if (buildingNameLabel) {
              this.buildingNameLabels.push(buildingNameLabel.getComponent(Label));
            }
            if (buildingLevelLabel) {
              this.buildingLevelLabels.push(buildingLevelLabel.getComponent(Label));
            }
            if (upgradeButton) {
              this.upgradeButtons.push(upgradeButton.getComponent(Button));
            }
            if (upgradeCostLabel) {
              this.upgradeCostLabels.push(upgradeCostLabel.getComponent(Label));
            }
          }
        }

        /**
         * Bind UI events
         */;
        _proto.bindEvents = function bindEvents() {
          var _this2 = this;
          // Back button
          if (this.backButton) {
            this.backButton.node.on(Button.EventType.CLICK, this.onBackClicked, this);
          }

          // Upgrade buttons
          var _loop = function _loop(i) {
            var button = _this2.upgradeButtons[i];
            if (button) {
              button.node.on(Button.EventType.CLICK, function () {
                return _this2.onUpgradeClicked(i);
              }, _this2);
            }
          };
          for (var i = 0; i < this.upgradeButtons.length; i++) {
            _loop(i);
          }

          // Completion close button
          if (this.completionCloseButton) {
            this.completionCloseButton.node.on(Button.EventType.CLICK, this.onCompletionCloseClicked, this);
          }
        }

        /**
         * Update UI based on data changes
         */;
        _proto.updateUI = function updateUI(key, value, oldValue) {
          // Handle ViewModel data changes if needed
        }

        /**
         * Refresh entire UI
         */;
        _proto.refreshUI = function refreshUI() {
          this.updateHeaderDisplay();
          this.updateBuildingDisplay();
        }

        /**
         * Set ViewModel and setup event listeners
         */;
        _proto.setViewModel = function setViewModel(viewModel) {
          _BaseView.prototype.setViewModel.call(this, viewModel);
          this._viewModel = viewModel;
          if (this._viewModel) {
            this.setupViewModelEvents();
          }
        }

        /**
         * Setup ViewModel event listeners
         */;
        _proto.setupViewModelEvents = function setupViewModelEvents() {
          if (!this._viewModel) return;
          this._viewModel.on('cityDataLoaded', this.onCityDataLoaded, this);
          this._viewModel.on('resourceUpdated', this.onResourceUpdated, this);
          this._viewModel.on('buildingDataUpdated', this.onBuildingDataUpdated, this);
          this._viewModel.on('cityProgressUpdated', this.onCityProgressUpdated, this);
          this._viewModel.on('buildingUpgradeSuccess', this.onBuildingUpgradeSuccess, this);
          this._viewModel.on('buildingUpgradeError', this.onBuildingUpgradeError, this);
          this._viewModel.on('insufficientGold', this.onInsufficientGold, this);
          this._viewModel.on('buildingMaxLevel', this.onBuildingMaxLevel, this);
          this._viewModel.on('cityCompleted', this.onCityCompleted, this);
          this._viewModel.on('showCityCompletion', this.onShowCityCompletion, this);
          this._viewModel.on('navigateToScene', this.onNavigateToScene, this);
        }

        /**
         * Update header display
         */;
        _proto.updateHeaderDisplay = function updateHeaderDisplay() {
          if (!this._viewModel) return;

          // Update city name
          if (this.cityNameLabel) {
            this.cityNameLabel.string = this._viewModel.currentCityName || 'City';
          }

          // Update gold display
          if (this.goldLabel) {
            this.goldLabel.string = this.formatNumber(this._viewModel.currentGold);
          }

          // Update city progress
          if (this.cityProgressBar) {
            this.cityProgressBar.progress = this._viewModel.cityCompletionProgress;
          }
          if (this.cityProgressLabel) {
            var progress = Math.round(this._viewModel.cityCompletionProgress * 100);
            this.cityProgressLabel.string = progress + "%";
          }
        }

        /**
         * Update building display
         */;
        _proto.updateBuildingDisplay = function updateBuildingDisplay() {
          var _this3 = this;
          if (!this._viewModel) return;

          // Get all building data asynchronously and update UI when ready
          this._viewModel.executeCommand('getAllBuildingsData').then(function (buildingData) {
            _this3._buildingData = buildingData;

            // Update each building UI
            for (var i = 0; i < _this3._buildingData.length && i < _this3.buildingNodes.length; i++) {
              var _buildingData = _this3._buildingData[i];
              _this3.updateBuildingUI(i, _buildingData);
            }
          })["catch"](function (error) {
            logError('Failed to get building data:', error);
          });
        }

        /**
         * Update individual building UI
         */;
        _proto.updateBuildingUI = function updateBuildingUI(index, buildingData) {
          log('updateBuildingUI', index, buildingData);
          // Update building name
          if (this.buildingNameLabels[index]) {
            this.buildingNameLabels[index].string = buildingData.buildingName;
          }

          // Update building level
          if (this.buildingLevelLabels[index]) {
            this.buildingLevelLabels[index].string = "Level " + buildingData.currentLevel + "/" + buildingData.maxLevel;
          }

          // Update upgrade button
          if (this.upgradeButtons[index]) {
            this.upgradeButtons[index].interactable = buildingData.canUpgrade;
          }

          // Update upgrade cost
          if (this.upgradeCostLabels[index]) {
            if (buildingData.isMaxLevel) {
              this.upgradeCostLabels[index].string = 'MAX LEVEL';
            } else {
              this.upgradeCostLabels[index].string = this.formatNumber(buildingData.upgradeCost);
            }
          }

          // Update building sprite based on level
          this.updateBuildingSprite(index, buildingData);
        }

        /**
         * Update building sprite based on level
         */;
        _proto.updateBuildingSprite = function updateBuildingSprite(index, buildingData) {
          if (!this.buildingSprites[index]) return;
          var sprite = this.buildingSprites[index];

          // Change sprite color/scale based on level (placeholder implementation)
          var levelProgress = buildingData.currentLevel / buildingData.maxLevel;
          var scale = 0.8 + levelProgress * 0.4; // Scale from 0.8 to 1.2

          if (this.buildingNodes[index]) {
            this.buildingNodes[index].scale = v3(scale, scale, 1);
          }

          // Change color based on level
          if (buildingData.isMaxLevel) {
            sprite.color = Color.YELLOW; // Gold for max level
          } else if (buildingData.currentLevel > 0) {
            sprite.color = Color.GREEN; // Green for upgraded
          } else {
            sprite.color = Color.WHITE; // White for level 0
          }
        }

        /**
         * Show completion UI
         */;
        _proto.showCompletionUI = function showCompletionUI(cityName, reward) {
          if (this.completionContainer) {
            this.completionContainer.active = true;
          }
          if (this.completionTitleLabel) {
            this.completionTitleLabel.string = cityName + " Completed!";
          }
          if (this.completionRewardLabel) {
            this.completionRewardLabel.string = "Reward: " + this.formatNumber(reward) + " Gold";
          }
        }

        /**
         * Hide completion UI
         */;
        _proto.hideCompletionUI = function hideCompletionUI() {
          if (this.completionContainer) {
            this.completionContainer.active = false;
          }
        }

        /**
         * Show notification
         */;
        _proto.showNotification = function showNotification(message, duration) {
          var _this4 = this;
          if (duration === void 0) {
            duration = 3.0;
          }
          if (this.notificationContainer && this.notificationLabel) {
            this.notificationLabel.string = message;
            this.notificationContainer.active = true;

            // Auto-hide after duration
            this.scheduleOnce(function () {
              _this4.hideNotification();
            }, duration);
          }
        }

        /**
         * Hide notification
         */;
        _proto.hideNotification = function hideNotification() {
          if (this.notificationContainer) {
            this.notificationContainer.active = false;
          }
        }

        /**
         * Format number for display
         */;
        _proto.formatNumber = function formatNumber(num) {
          if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
          } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
          }
          return num.toString();
        }

        /**
         * Animate building upgrade
         */;
        _proto.animateBuildingUpgrade = function animateBuildingUpgrade(buildingIndex) {
          if (buildingIndex < 0 || buildingIndex >= this.buildingNodes.length) return;
          var buildingNode = this.buildingNodes[buildingIndex];
          if (!buildingNode) return;

          // Scale animation
          tween(buildingNode).to(0.2, {
            scale: v3(1.3, 1.3, 1)
          }).to(0.2, {
            scale: v3(1.0, 1.0, 1)
          }).start();

          // Particle effect or other visual feedback can be added here
        }

        // Event Handlers

        /**
         * Handle city data loaded
         */;
        _proto.onCityDataLoaded = function onCityDataLoaded() {
          this.refreshUI();
        }

        /**
         * Handle resource updated
         */;
        _proto.onResourceUpdated = function onResourceUpdated(event) {
          this.updateHeaderDisplay();
        }

        /**
         * Handle building data updated
         */;
        _proto.onBuildingDataUpdated = function onBuildingDataUpdated(buildingData) {
          this._buildingData = buildingData;
          this.updateBuildingDisplay();
        }

        /**
         * Handle city progress updated
         */;
        _proto.onCityProgressUpdated = function onCityProgressUpdated(progressData) {
          this.updateHeaderDisplay();
        }

        /**
         * Handle building upgrade success
         */;
        _proto.onBuildingUpgradeSuccess = function onBuildingUpgradeSuccess(event) {
          var buildingIndex = this._buildingData.findIndex(function (data) {
            return data.buildingId === event.buildingId;
          });
          if (buildingIndex >= 0) {
            this.animateBuildingUpgrade(buildingIndex);
          }
          this.showNotification("Building upgraded to level " + event.newLevel + "!");
        }

        /**
         * Handle building upgrade error
         */;
        _proto.onBuildingUpgradeError = function onBuildingUpgradeError(event) {
          this.showNotification("Upgrade failed: " + event.error);
        }

        /**
         * Handle insufficient gold
         */;
        _proto.onInsufficientGold = function onInsufficientGold(event) {
          this.showNotification("Need " + this.formatNumber(event.required) + " gold, have " + this.formatNumber(event.available));
        }

        /**
         * Handle building max level
         */;
        _proto.onBuildingMaxLevel = function onBuildingMaxLevel(event) {
          this.showNotification('Building is already at maximum level!');
        }

        /**
         * Handle city completed
         */;
        _proto.onCityCompleted = function onCityCompleted(event) {
          this.updateHeaderDisplay();
          this.updateBuildingDisplay();
        }

        /**
         * Handle show city completion
         */;
        _proto.onShowCityCompletion = function onShowCityCompletion(event) {
          this.showCompletionUI(event.cityName, event.reward);
        }

        /**
         * Handle navigate to scene
         */;
        _proto.onNavigateToScene = function onNavigateToScene(sceneName) {
          director.loadScene(sceneName);
        }

        // Button Event Handlers

        /**
         * Handle back button click
         */;
        _proto.onBackClicked = function onBackClicked() {
          if (this._viewModel) {
            this._viewModel.executeCommand('goBack');
          }
        }

        /**
         * Handle upgrade button click
         */;
        _proto.onUpgradeClicked = /*#__PURE__*/
        function () {
          var _onUpgradeClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(buildingIndex) {
            var buildingData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log("Upgrading building at index " + buildingIndex + " _buildingData = " + JSON.stringify(this._buildingData));
                  if (!(!this._viewModel || buildingIndex >= this._buildingData.length)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  buildingData = this._buildingData[buildingIndex];
                  _context.next = 6;
                  return this._viewModel.executeCommand('upgradeBuilding', buildingData.buildingId);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onUpgradeClicked(_x) {
            return _onUpgradeClicked.apply(this, arguments);
          }
          return onUpgradeClicked;
        }()
        /**
         * Handle completion close button click
         */;

        _proto.onCompletionCloseClicked = function onCompletionCloseClicked() {
          this.hideCompletionUI();
        };
        _proto.start = function start() {
          this.onShow();
        }

        /**
         * Called when view is shown
         */;
        _proto.onShow = function onShow() {
          _BaseView.prototype.onShow.call(this);

          // Initialize ViewModel if not already done
          if (!this._viewModel) {
            this._viewModel = new CityViewModel();
            this.setViewModel(this._viewModel);
            this._viewModel.initialize();
          }
        }

        /**
         * Cleanup on destroy
         */;
        _proto.onDestroy = function onDestroy() {
          // Remove ViewModel event listeners
          if (this._viewModel) {
            this._viewModel.off('cityDataLoaded', this.onCityDataLoaded, this);
            this._viewModel.off('resourceUpdated', this.onResourceUpdated, this);
            this._viewModel.off('buildingDataUpdated', this.onBuildingDataUpdated, this);
            this._viewModel.off('cityProgressUpdated', this.onCityProgressUpdated, this);
            this._viewModel.off('buildingUpgradeSuccess', this.onBuildingUpgradeSuccess, this);
            this._viewModel.off('buildingUpgradeError', this.onBuildingUpgradeError, this);
            this._viewModel.off('insufficientGold', this.onInsufficientGold, this);
            this._viewModel.off('buildingMaxLevel', this.onBuildingMaxLevel, this);
            this._viewModel.off('cityCompleted', this.onCityCompleted, this);
            this._viewModel.off('showCityCompletion', this.onShowCityCompletion, this);
            this._viewModel.off('navigateToScene', this.onNavigateToScene, this);
          }
          _BaseView.prototype.onDestroy.call(this);
        };
        return CityView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cityNameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cityProgressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cityProgressLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buildingNodes", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buildingSprites", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buildingNameLabels", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buildingLevelLabels", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "upgradeButtons", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "upgradeCostLabels", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "backButton", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "completionContainer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "completionTitleLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "completionRewardLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "completionCloseButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "notificationContainer", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "notificationLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CityViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseViewModel.ts', './ServiceLocator.ts', './PlayerModel.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseViewModel, ServiceLocator, PlayerModel, logError;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseViewModel = module.BaseViewModel;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      PlayerModel = module.PlayerModel;
    }, function (module) {
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6d06cDAGnNH/Yd34TjODrwn", "CityViewModel", undefined);

      /**
       * Building upgrade data
       */

      /**
       * City ViewModel - Handles city building scene logic
       */
      var CityViewModel = exports('CityViewModel', /*#__PURE__*/function (_BaseViewModel) {
        _inheritsLoose(CityViewModel, _BaseViewModel);
        function CityViewModel() {
          var _this;
          _this = _BaseViewModel.call(this) || this;
          _this._gameService = null;
          _this._resourceManager = null;
          _this._playerModel = null;
          _this._currentCity = null;
          return _this;
        }

        /**
         * Initialize ViewModel
         */
        var _proto = CityViewModel.prototype;
        _proto.onInitialize = function onInitialize() {
          this.setupServices();
          this.setupModels();
          this.setupEventListeners();
          this.loadCityData();
        }

        /**
         * Setup services
         */;
        _proto.setupServices = function setupServices() {
          var serviceLocator = ServiceLocator.getInstance();
          this._gameService = serviceLocator.getService('GameService');
          this._resourceManager = serviceLocator.getService('ResourceManager');
          if (!this._gameService) {
            logError('GameService not found');
          }
          if (!this._resourceManager) {
            logError('ResourceManager not found');
          }
        }

        /**
         * Setup models
         */;
        _proto.setupModels = function setupModels() {
          // Get player model from GameService (single source of truth)
          var serviceLocator = ServiceLocator.getInstance();
          var gameService = serviceLocator.getService('GameService');
          if (gameService) {
            this._playerModel = gameService.getPlayerModel();
          }
          if (!this._playerModel) {
            logError('CityViewModel failed to get PlayerModel from GameService. This is a critical error.');
            // Fallback to a new instance to prevent crashes, but this indicates an architectural problem.
            this._playerModel = new PlayerModel();
          }
          if (this._playerModel) {
            this._currentCity = this._playerModel.currentCity;
          }
        }

        /**
         * Setup event listeners
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          // Resource manager events
          if (this._resourceManager) {
            this._resourceManager.on('resourceChanged', this.onResourceChanged, this);
            this._resourceManager.on('insufficientResources', this.onInsufficientResources, this);
          }

          // City events
          if (this._currentCity) {
            this._currentCity.on('buildingUpgraded', this.onBuildingUpgraded, this);
            this._currentCity.on('cityCompleted', this.onCityCompleted, this);
          }

          // Player model events
          if (this._playerModel) {
            this._playerModel.on('currentCityChanged', this.onCurrentCityChanged, this);
          }
        }

        /**
         * Load city data
         */;
        _proto.loadCityData = /*#__PURE__*/
        function () {
          var _loadCityData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  if (!(this._gameService && this._gameService.isReady && this._currentCity)) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 4;
                  return this._gameService.getCityData(this._currentCity.id);
                case 4:
                  _context.sent;
                case 5:
                  this.emit('cityDataLoaded');
                  _context.next = 12;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  logError('Failed to load city data:', _context.t0);
                  this.emit('cityDataLoadError', _context.t0);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 8]]);
          }));
          function loadCityData() {
            return _loadCityData.apply(this, arguments);
          }
          return loadCityData;
        }()
        /**
         * Execute command
         */;

        _proto.executeCommand = /*#__PURE__*/
        function () {
          var _executeCommand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(command) {
            var _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = command;
                  _context2.next = _context2.t0 === 'upgradeBuilding' ? 3 : _context2.t0 === 'getBuildingData' ? 4 : _context2.t0 === 'getAllBuildingsData' ? 5 : _context2.t0 === 'getCityProgress' ? 6 : _context2.t0 === 'goBack' ? 7 : _context2.t0 === 'refreshData' ? 8 : 9;
                  break;
                case 3:
                  return _context2.abrupt("return", this.upgradeBuilding(_args2.length <= 1 ? undefined : _args2[1]));
                case 4:
                  return _context2.abrupt("return", this.getBuildingData(_args2.length <= 1 ? undefined : _args2[1]));
                case 5:
                  return _context2.abrupt("return", this.getAllBuildingsData());
                case 6:
                  return _context2.abrupt("return", this.getCityProgress());
                case 7:
                  return _context2.abrupt("return", this.goBack());
                case 8:
                  return _context2.abrupt("return", this.loadCityData());
                case 9:
                  throw new Error("Unknown command: " + command);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function executeCommand(_x) {
            return _executeCommand.apply(this, arguments);
          }
          return executeCommand;
        }()
        /**
         * Upgrade a building
         */;

        _proto.upgradeBuilding = /*#__PURE__*/
        function () {
          var _upgradeBuilding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(buildingId) {
            var building, upgradeCost, goldSpent, success;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(!this._currentCity || !this._resourceManager || !this._gameService)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 2:
                  building = this._currentCity.getBuilding(buildingId);
                  if (building) {
                    _context3.next = 6;
                    break;
                  }
                  logError("Building not found: " + buildingId);
                  return _context3.abrupt("return", false);
                case 6:
                  if (building.canUpgrade()) {
                    _context3.next = 9;
                    break;
                  }
                  this.emit('buildingMaxLevel', {
                    buildingId: buildingId
                  });
                  return _context3.abrupt("return", false);
                case 9:
                  upgradeCost = building.getUpgradeCost(); // Check if player has enough gold
                  if (this._resourceManager.hasEnoughGold(upgradeCost)) {
                    _context3.next = 13;
                    break;
                  }
                  this.emit('insufficientGold', {
                    required: upgradeCost,
                    available: this._resourceManager.getGold(),
                    buildingId: buildingId
                  });
                  return _context3.abrupt("return", false);
                case 13:
                  _context3.prev = 13;
                  if (!this._gameService.isReady) {
                    _context3.next = 17;
                    break;
                  }
                  _context3.next = 17;
                  return this._gameService.upgradeBuilding(this._currentCity.id, buildingId);
                case 17:
                  _context3.next = 19;
                  return this._resourceManager.spendGold(upgradeCost, 'building_upgrade');
                case 19:
                  goldSpent = _context3.sent;
                  if (goldSpent) {
                    _context3.next = 22;
                    break;
                  }
                  throw new Error('Failed to spend gold for upgrade');
                case 22:
                  // Upgrade building locally
                  success = building.upgrade();
                  if (success) {
                    _context3.next = 27;
                    break;
                  }
                  _context3.next = 26;
                  return this._resourceManager.addGold(upgradeCost, 'upgrade_refund');
                case 26:
                  throw new Error('Failed to upgrade building');
                case 27:
                  this.emit('buildingUpgradeSuccess', {
                    buildingId: buildingId,
                    newLevel: building.level,
                    costPaid: upgradeCost,
                    isMaxLevel: building.isMaxLevel()
                  });
                  return _context3.abrupt("return", true);
                case 31:
                  _context3.prev = 31;
                  _context3.t0 = _context3["catch"](13);
                  logError('Building upgrade failed:', _context3.t0);
                  this.emit('buildingUpgradeError', {
                    buildingId: buildingId,
                    error: _context3.t0.message
                  });
                  return _context3.abrupt("return", false);
                case 36:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[13, 31]]);
          }));
          function upgradeBuilding(_x2) {
            return _upgradeBuilding.apply(this, arguments);
          }
          return upgradeBuilding;
        }()
        /**
         * Get building data for UI
         */;

        _proto.getBuildingData = function getBuildingData(buildingId) {
          if (!this._currentCity) return null;
          var building = this._currentCity.getBuilding(buildingId);
          if (!building) return null;
          var currentGold = this._resourceManager ? this._resourceManager.getGold() : 0;
          var upgradeCost = building.getUpgradeCost();
          return {
            buildingId: building.id,
            buildingName: building.name,
            currentLevel: building.level,
            maxLevel: building.maxLevel,
            upgradeCost: upgradeCost,
            canUpgrade: building.canUpgrade() && currentGold >= upgradeCost,
            isMaxLevel: building.isMaxLevel()
          };
        }

        /**
         * Get all buildings data
         */;
        _proto.getAllBuildingsData = function getAllBuildingsData() {
          var _this2 = this;
          if (!this._currentCity) return [];
          var buildings = this._currentCity.getBuildings();
          return buildings.map(function (building) {
            return _this2.getBuildingData(building.id);
          }).filter(function (data) {
            return data !== null;
          });
        }

        /**
         * Get city completion progress
         */;
        _proto.getCityProgress = function getCityProgress() {
          if (!this._currentCity) {
            return {
              progress: 0,
              isCompleted: false,
              completionReward: 0,
              cityName: '',
              cityLevel: 1
            };
          }
          return {
            progress: this._currentCity.getCompletionProgress(),
            isCompleted: this._currentCity.isCompleted,
            completionReward: this._currentCity.completionReward,
            cityName: this._currentCity.name,
            cityLevel: this._currentCity.level
          };
        }

        /**
         * Go back to main scene
         */;
        _proto.goBack = function goBack() {
          this.emit('navigateToScene', 'Main');
        }

        // Event Handlers

        /**
         * Handle resource changes
         */;
        _proto.onResourceChanged = function onResourceChanged(event) {
          this.emit('resourceUpdated', event);

          // Update building upgrade availability
          this.emit('buildingDataUpdated', this.getAllBuildingsData());
        }

        /**
         * Handle insufficient resources
         */;
        _proto.onInsufficientResources = function onInsufficientResources(event) {
          this.emit('insufficientResources', event);
        }

        /**
         * Handle building upgraded
         */;
        _proto.onBuildingUpgraded = function onBuildingUpgraded(event) {
          this.emit('buildingUpgraded', event);

          // Update all building data
          this.emit('buildingDataUpdated', this.getAllBuildingsData());

          // Update city progress
          this.emit('cityProgressUpdated', this.getCityProgress());
        }

        /**
         * Handle city completed
         */;
        _proto.onCityCompleted = function onCityCompleted(event) {
          this.emit('cityCompleted', event);

          // Show completion celebration
          this.emit('showCityCompletion', {
            cityName: event.cityName,
            reward: event.reward
          });
        }

        /**
         * Handle current city changed
         */;
        _proto.onCurrentCityChanged = function onCurrentCityChanged(event) {
          this._currentCity = event.city;

          // Setup new city event listeners
          if (this._currentCity) {
            this._currentCity.on('buildingUpgraded', this.onBuildingUpgraded, this);
            this._currentCity.on('cityCompleted', this.onCityCompleted, this);
          }
          this.emit('currentCityChanged', event);
          this.loadCityData();
        }

        // Getters

        /**
         * Get current gold amount
         */;
        /**
         * Cleanup resources
         */
        _proto.destroy = function destroy() {
          // Remove event listeners
          if (this._resourceManager) {
            this._resourceManager.off('resourceChanged', this.onResourceChanged, this);
            this._resourceManager.off('insufficientResources', this.onInsufficientResources, this);
          }
          if (this._currentCity) {
            this._currentCity.off('buildingUpgraded', this.onBuildingUpgraded, this);
            this._currentCity.off('cityCompleted', this.onCityCompleted, this);
          }
          if (this._playerModel) {
            this._playerModel.off('currentCityChanged', this.onCurrentCityChanged, this);
          }

          // Clear references
          this._gameService = null;
          this._resourceManager = null;
          this._playerModel = null;
          this._currentCity = null;
          _BaseViewModel.prototype.destroy.call(this);
        };
        _createClass(CityViewModel, [{
          key: "currentGold",
          get: function get() {
            return this._resourceManager ? this._resourceManager.getGold() : 0;
          }

          /**
           * Get current city name
           */
        }, {
          key: "currentCityName",
          get: function get() {
            return this._currentCity ? this._currentCity.name : '';
          }

          /**
           * Get current city level
           */
        }, {
          key: "currentCityLevel",
          get: function get() {
            return this._currentCity ? this._currentCity.level : 1;
          }

          /**
           * Get city completion progress (0-1)
           */
        }, {
          key: "cityCompletionProgress",
          get: function get() {
            return this._currentCity ? this._currentCity.getCompletionProgress() : 0;
          }

          /**
           * Check if city is completed
           */
        }, {
          key: "isCityCompleted",
          get: function get() {
            return this._currentCity ? this._currentCity.isCompleted : false;
          }

          /**
           * Get completion reward
           */
        }, {
          key: "completionReward",
          get: function get() {
            return this._currentCity ? this._currentCity.completionReward : 0;
          }

          /**
           * Get total upgrade cost for all buildings
           */
        }, {
          key: "totalUpgradeCost",
          get: function get() {
            return this._currentCity ? this._currentCity.getTotalUpgradeCost() : 0;
          }

          /**
           * Check if all buildings are at max level
           */
        }, {
          key: "areAllBuildingsMaxLevel",
          get: function get() {
            return this._currentCity ? this._currentCity.areAllBuildingsMaxLevel() : false;
          }
        }]);
        return CityViewModel;
      }(BaseViewModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "66d91NhnKdHrKQGSP28w7dY", "ConfigScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ConfigScene = exports('ConfigScene', (_dec = ccclass('ConfigScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ConfigScene, _Component);
        function ConfigScene() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ConfigScene.prototype;
        _proto.onClickBtnPlay = function onClickBtnPlay() {
          var hostname = window.location.hostname;
          var isGDVersion = hostname.indexOf("onrender.com") > -1;
          if (isGDVersion) {
            var fileSelectionContainer = document.getElementById("fileSelectionContainer");
            fileSelectionContainer.remove();
          }
          director.loadScene('Loading');
        };
        return ConfigScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DebugPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, Component, logger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      logger = module.logger;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "ebfbcg9OqZACa/ny+s7m52s", "DebugPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Debug Panel for viewing and exporting logs
       * Add this component to a node in your scene to access debug features
       */
      var DebugPanel = exports('DebugPanel', (_dec = ccclass('DebugPanel'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugPanel, _Component);
        function DebugPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "debugContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "logDisplay", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showLogsButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exportLogsButton", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clearLogsButton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeButton", _descriptor6, _assertThisInitialized(_this));
          _this._isVisible = false;
          return _this;
        }
        var _proto = DebugPanel.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.setupUI();
          this.bindEvents();

          // Hide panel initially
          this.hidePanel();

          // Add global access for debugging
          globalThis.debugPanel = this;
          globalThis.showDebugPanel = function () {
            return _this2.showPanel();
          };
          globalThis.hideDebugPanel = function () {
            return _this2.hidePanel();
          };
          globalThis.exportLogs = function () {
            return _this2.exportLogs();
          };
          logger.info('DebugPanel initialized - Use showDebugPanel() to open');
        };
        _proto.setupUI = function setupUI() {
          if (this.logDisplay) {
            this.logDisplay.string = 'Debug logs will appear here...';
          }
        };
        _proto.bindEvents = function bindEvents() {
          if (this.showLogsButton) {
            this.showLogsButton.node.on(Button.EventType.CLICK, this.refreshLogs, this);
          }
          if (this.exportLogsButton) {
            this.exportLogsButton.node.on(Button.EventType.CLICK, this.exportLogs, this);
          }
          if (this.clearLogsButton) {
            this.clearLogsButton.node.on(Button.EventType.CLICK, this.clearLogs, this);
          }
          if (this.closeButton) {
            this.closeButton.node.on(Button.EventType.CLICK, this.hidePanel, this);
          }
        }

        /**
         * Show debug panel
         */;
        _proto.showPanel = function showPanel() {
          if (this.debugContainer) {
            this.debugContainer.active = true;
            this._isVisible = true;
            this.refreshLogs();
            logger.info('Debug panel opened');
          }
        }

        /**
         * Hide debug panel
         */;
        _proto.hidePanel = function hidePanel() {
          if (this.debugContainer) {
            this.debugContainer.active = false;
            this._isVisible = false;
            logger.info('Debug panel closed');
          }
        }

        /**
         * Toggle panel visibility
         */;
        _proto.togglePanel = function togglePanel() {
          if (this._isVisible) {
            this.hidePanel();
          } else {
            this.showPanel();
          }
        }

        /**
         * Refresh log display
         */;
        _proto.refreshLogs = function refreshLogs() {
          if (this.logDisplay) {
            var recentLogs = logger.getRecentLogs(20); // Show last 20 logs
            this.logDisplay.string = recentLogs || 'No logs available';
            logger.info("Refreshed logs display (" + logger.getLogsCount() + " total logs)");
          }
        }

        /**
         * Export logs to localStorage and try to download
         */;
        _proto.exportLogs = function exportLogs() {
          try {
            // Export to localStorage
            logger.exportToLocalStorage('coinmaster_debug_logs');

            // Try to download (works in web builds)
            logger.downloadLogs('coinmaster_debug.log');

            // Also log the recent logs for easy copying
            var allLogs = logger.getAllLogs();
            console.log('=== ALL DEBUG LOGS ===');
            console.log(allLogs);
            console.log('=== END DEBUG LOGS ===');
            logger.info('Logs exported successfully');
          } catch (error) {
            logger.error("Failed to export logs: " + error);
          }
        }

        /**
         * Clear all logs
         */;
        _proto.clearLogs = function clearLogs() {
          logger.clear();
          this.refreshLogs();
          logger.info('All logs cleared');
        }

        /**
         * Get logs as string for manual copying
         */;
        _proto.getLogsForCopy = function getLogsForCopy() {
          return logger.getAllLogs();
        };
        _proto.onDestroy = function onDestroy() {
          // Clean up global references
          if (globalThis.debugPanel === this) {
            delete globalThis.debugPanel;
            delete globalThis.showDebugPanel;
            delete globalThis.hideDebugPanel;
            delete globalThis.exportLogs;
          }
        };
        return DebugPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debugContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "logDisplay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showLogsButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "exportLogsButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clearLogsButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      // Global functions for easy access in console
      globalThis.getDebugLogs = function () {
        var logs = logger.getAllLogs();
        console.log('=== DEBUG LOGS ===');
        console.log(logs);
        console.log('=== END LOGS ===');
        return logs;
      };
      globalThis.getRecentDebugLogs = function (count) {
        if (count === void 0) {
          count = 20;
        }
        var logs = logger.getRecentLogs(count);
        console.log("=== RECENT " + count + " DEBUG LOGS ===");
        console.log(logs);
        console.log('=== END LOGS ===');
        return logs;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMachineConfig.ts', './Logger.ts'], function (exports) {
  var _extends, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, JsonAsset, SlotMachineConfig, logError, logWarn, logInfo;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      SlotMachineConfig = module.SlotMachineConfig;
    }, function (module) {
      logError = module.logError;
      logWarn = module.logWarn;
      logInfo = module.logInfo;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d9f60PXBJNyb5CfJnbSHGG", "GameConfig", undefined);

      /**
       * Building configuration data
       */

      /**
       * City configuration data
       */

      /**
       * Attack configuration data
       */

      /**
       * Raid configuration data
       */

      /**
       * Game configuration data structure
       */

      /**
       * Game Configuration Manager
       */
      var GameConfig = exports('GameConfig', /*#__PURE__*/function () {
        function GameConfig() {
          this._config = void 0;
          this._isLoaded = false;
        }
        /**
         * Get singleton instance
         */
        GameConfig.getInstance = function getInstance() {
          if (!GameConfig._instance) {
            GameConfig._instance = new GameConfig();
          }
          return GameConfig._instance;
        }

        /**
         * Load configuration from server or local storage
         */;
        var _proto = GameConfig.prototype;
        _proto.loadConfig = /*#__PURE__*/
        function () {
          var _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(serverConfig) {
            var slotMachineConfig, defaultConfig;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  slotMachineConfig = SlotMachineConfig.getInstance();
                  _context.next = 4;
                  return slotMachineConfig.loadConfig();
                case 4:
                  _context.next = 6;
                  return this.loadDefaultConfig();
                case 6:
                  defaultConfig = _context.sent;
                  if (serverConfig) {
                    // Merge server config with defaults
                    this._config = this.mergeConfigs(defaultConfig, serverConfig);
                    logInfo('Game config loaded from server');
                  } else {
                    // Use default config
                    this._config = defaultConfig;
                    logInfo('Using default game config');
                  }
                  this._config.slotMachine = slotMachineConfig.getDefaultConfig();
                  this._isLoaded = true;
                  this.validateConfig();
                  _context.next = 18;
                  break;
                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](0);
                  logError('Failed to load game config:', _context.t0);
                  // Fallback to an empty config or handle error appropriately
                  this._config = {};
                  this._isLoaded = true;
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 13]]);
          }));
          function loadConfig(_x) {
            return _loadConfig.apply(this, arguments);
          }
          return loadConfig;
        }();
        _proto.loadDefaultConfig = function loadDefaultConfig() {
          return new Promise(function (resolve, reject) {
            resources.load('config/game', JsonAsset, function (err, asset) {
              if (err) {
                logError('Failed to load default game config:', err);
                return reject(err);
              }
              resolve(asset.json);
            });
          });
        }

        /**
         * Merge two configuration objects
         */;
        _proto.mergeConfigs = function mergeConfigs(defaultConfig, serverConfig) {
          var merged = _extends({}, defaultConfig);

          // Merge top-level properties
          Object.keys(serverConfig).forEach(function (key) {
            if (serverConfig[key] !== undefined) {
              if (typeof serverConfig[key] === 'object' && !Array.isArray(serverConfig[key])) {
                merged[key] = _extends({}, merged[key], serverConfig[key]);
              } else {
                merged[key] = serverConfig[key];
              }
            }
          });
          return merged;
        }

        /**
         * Validate configuration
         */;
        _proto.validateConfig = function validateConfig() {
          if (!this._config.version) {
            throw new Error('Config version is required');
          }
          if (!this._config.slotMachine || !this._config.slotMachine.symbols || this._config.slotMachine.symbols.length === 0) {
            throw new Error('Slot machine configuration is invalid');
          }
          if (!this._config.cities || this._config.cities.length === 0) {
            throw new Error('Cities configuration is required');
          }

          // Validate slot machine configuration
          var slotConfig = SlotMachineConfig.getInstance();
          var validation = slotConfig.validateConfig(this._config.slotMachine);
          if (!validation.isValid) {
            logWarn('Slot machine configuration validation failed:', validation.errors);
          }
        }

        /**
         * Get full configuration
         */;
        _proto.getConfig = function getConfig() {
          return _extends({}, this._config);
        }

        /**
         * Get slot machine configuration
         */;
        _proto.getSlotMachineConfig = function getSlotMachineConfig() {
          return _extends({}, this._config.slotMachine);
        }

        /**
         * Get city configuration by level
         */;
        _proto.getCityConfig = function getCityConfig(level) {
          return this._config.cities.find(function (city) {
            return city.level === level;
          }) || null;
        }

        /**
         * Get all city configurations
         */;
        _proto.getCityConfigs = function getCityConfigs() {
          return [].concat(this._config.cities);
        }

        /**
         * Get building configuration
         */;
        _proto.getBuildingConfig = function getBuildingConfig(cityLevel, buildingId) {
          var cityConfig = this.getCityConfig(cityLevel);
          if (!cityConfig) return null;
          return cityConfig.buildings.find(function (building) {
            return building.id === buildingId;
          }) || null;
        }

        /**
         * Get attack configuration
         */;
        _proto.getAttackConfig = function getAttackConfig() {
          return _extends({}, this._config.attack);
        }

        /**
         * Get raid configuration
         */;
        _proto.getRaidConfig = function getRaidConfig() {
          return _extends({}, this._config.raid);
        }

        /**
         * Get main event configurations
         */;
        _proto.getMainEventConfigs = function getMainEventConfigs() {
          return [].concat(this._config.mainEvents);
        }

        /**
         * Get active main event
         */;
        _proto.getActiveMainEvent = function getActiveMainEvent() {
          var currentTime = Date.now();
          return this._config.mainEvents.find(function (event) {
            return event.isActive && currentTime >= event.startTime && currentTime <= event.endTime;
          }) || null;
        }

        /**
         * Get resource configuration
         */;
        _proto.getResourceConfig = function getResourceConfig() {
          return _extends({}, this._config.resources);
        }

        /**
         * Check if configuration is loaded
         */;
        /**
         * Update configuration (for runtime changes)
         */
        _proto.updateConfig = function updateConfig(updates) {
          this._config = this.mergeConfigs(this._config, updates);
          this.validateConfig();
        }

        /**
         * Reset to default configuration
         */;
        _proto.resetToDefault = /*#__PURE__*/
        function () {
          var _resetToDefault = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return this.loadDefaultConfig();
                case 3:
                  this._config = _context2.sent;
                  this._isLoaded = true;
                  logInfo('Game config reset to default');
                  _context2.next = 11;
                  break;
                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](0);
                  logError('Failed to reset game config to default:', _context2.t0);
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 8]]);
          }));
          function resetToDefault() {
            return _resetToDefault.apply(this, arguments);
          }
          return resetToDefault;
        }();
        _createClass(GameConfig, [{
          key: "isLoaded",
          get: function get() {
            return this._isLoaded;
          }

          /**
           * Get configuration version
           */
        }, {
          key: "version",
          get: function get() {
            return this._config.version;
          }
        }]);
        return GameConfig;
      }());
      GameConfig._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseService.ts', './ServiceLocator.ts', './PlayerModel.ts', './GameConfig.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, log, BaseService, ServiceLocator, PlayerModel, GameConfig, logInfo, logError, logWarn;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      BaseService = module.BaseService;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      PlayerModel = module.PlayerModel;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      logInfo = module.logInfo;
      logError = module.logError;
      logWarn = module.logWarn;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9752a1L7WVLfbHz4Q/KJfZp", "GameService", undefined);

      /**
       * Game-specific network commands
       */
      var GameCommand = exports('GameCommand', /*#__PURE__*/function (GameCommand) {
        GameCommand["GET_PLAYER_DATA"] = "getPlayerData";
        GameCommand["UPDATE_PLAYER_DATA"] = "updatePlayerData";
        GameCommand["SPIN_WHEEL"] = "spinWheel";
        GameCommand["GET_SPIN_CONFIG"] = "getSpinConfig";
        GameCommand["SPIN_SLOT_MACHINE"] = "spinSlotMachine";
        GameCommand["GET_SLOT_MACHINE_CONFIG"] = "getSlotMachineConfig";
        GameCommand["UPGRADE_BUILDING"] = "upgradeBuilding";
        GameCommand["GET_CITY_DATA"] = "getCityData";
        GameCommand["ATTACK_PLAYER"] = "attackPlayer";
        GameCommand["GET_ATTACK_TARGET"] = "getAttackTarget";
        GameCommand["RAID_PLAYER"] = "raidPlayer";
        GameCommand["GET_RAID_TARGET"] = "getRaidTarget";
        GameCommand["GET_MAIN_EVENT"] = "getMainEvent";
        GameCommand["CLAIM_EVENT_MILESTONE"] = "claimEventMilestone";
        GameCommand["COLLECT_RESOURCES"] = "collectResources";
        return GameCommand;
      }({}));

      /**
       * Spin request data
       */

      /**
       * Building upgrade request data
       */

      /**
       * Attack request data
       */

      /**
       * Raid request data
       */

      /**
       * Game Service - Handles game-specific server communication
       */
      var GameService = exports('GameService', /*#__PURE__*/function (_BaseService) {
        _inheritsLoose(GameService, _BaseService);
        function GameService() {
          var _this;
          _this = _BaseService.call(this) || this;
          _this._networkService = null;
          _this._playerModel = null;
          _this._isOnline = false;
          _this._autoSaveInterval = null;
          return _this;
        }

        /**
         * Get player model instance
         */
        var _proto = GameService.prototype;
        _proto.getPlayerModel = function getPlayerModel() {
          return this._playerModel;
        }

        /**
         * Initialize Game Service
         */;
        _proto.onInitialize = /*#__PURE__*/
        function () {
          var _onInitialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this$_networkService,
              _this2 = this,
              _this$_networkService2;
            var serviceLocator;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  logInfo('Initializing Game Service...');

                  // Initialize player model first
                  this._playerModel = new PlayerModel();
                  logInfo('Player Model initialized in GameService');

                  // Get network service and determine online status
                  serviceLocator = ServiceLocator.getInstance();
                  this._networkService = serviceLocator.getService('NetworkService');
                  if (this._networkService && this._networkService.isConnected) {
                    this._isOnline = true;
                    logInfo('NetworkService found, starting in online mode');
                    this.setupNetworkEventListeners();
                  } else {
                    this._isOnline = false;
                    logWarn('NetworkService not found or not connected, starting in offline mode');
                  }

                  // Add listeners for network status changes
                  (_this$_networkService = this._networkService) == null || _this$_networkService.on('connection', function () {
                    return _this2.handleNetworkStatusChange(true);
                  });
                  (_this$_networkService2 = this._networkService) == null || _this$_networkService2.on('connectionLost', function () {
                    return _this2.handleNetworkStatusChange(false);
                  });

                  // Load player data based on network status
                  _context.next = 10;
                  return this.loadPlayerData();
                case 10:
                  // Start auto-saving player data
                  this.startAutoSave();
                  logInfo('Game Service initialized successfully');
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onInitialize() {
            return _onInitialize.apply(this, arguments);
          }
          return onInitialize;
        }()
        /**
         * Connect to game server
         */;

        _proto.onConnect = /*#__PURE__*/
        function () {
          var _onConnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._networkService) {
                    _context2.next = 2;
                    break;
                  }
                  throw new Error('NetworkService not available');
                case 2:
                  // Network service handles the actual connection
                  // This service just needs to be ready for game commands
                  logInfo('Game Service ready for commands');
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onConnect() {
            return _onConnect.apply(this, arguments);
          }
          return onConnect;
        }()
        /**
         * Disconnect from game server
         */;

        _proto.onDisconnect = /*#__PURE__*/
        function () {
          var _onDisconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  logInfo('Game Service disconnected');
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onDisconnect() {
            return _onDisconnect.apply(this, arguments);
          }
          return onDisconnect;
        }()
        /**
         * Setup network event listeners
         */;

        _proto.setupNetworkEventListeners = function setupNetworkEventListeners() {
          if (!this._networkService) return;
          this._networkService.on('extensionResponse', this.onExtensionResponse.bind(this));
          this._networkService.on('connectionLost', this.onConnectionLost.bind(this));
          this._networkService.on('loggedOut', this.onLoggedOut.bind(this));
        }

        /**
         * Handle extension responses
         */;
        _proto.onExtensionResponse = function onExtensionResponse(response) {
          // Handle specific game responses that don't have pending requests
          switch (response.command) {
            case 'resourceUpdate':
              this.emit('resourceUpdate', response.data);
              break;
            case 'eventUpdate':
              this.emit('eventUpdate', response.data);
              break;
            case 'playerUpdate':
              this.emit('playerUpdate', response.data);
              break;
          }
        }

        /**
         * Handle connection lost
         */;
        _proto.onConnectionLost = function onConnectionLost(reason) {
          this.emit('connectionLost', reason);
        }

        /**
         * Handle logout
         */;
        _proto.onLoggedOut = function onLoggedOut() {
          this.emit('loggedOut');
        }

        /**
         * Send game request
         */;
        _proto.sendGameRequest = /*#__PURE__*/
        function () {
          var _sendGameRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(command, data, timeout) {
            var request, response;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  logInfo("Sending game command: " + command);
                  if (this._networkService) {
                    _context4.next = 4;
                    break;
                  }
                  logWarn("NetworkService not available, simulating response for command: " + command);
                  // Return mock data for offline mode
                  return _context4.abrupt("return", this.getMockResponse(command, data));
                case 4:
                  logInfo("Sending game command: " + command + " passed");
                  request = {
                    command: command,
                    data: data,
                    timeout: timeout
                  };
                  _context4.next = 8;
                  return this._networkService.sendRequest(request);
                case 8:
                  response = _context4.sent;
                  if (response.success) {
                    _context4.next = 11;
                    break;
                  }
                  throw new Error(response.error || 'Unknown server error');
                case 11:
                  return _context4.abrupt("return", response.data);
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function sendGameRequest(_x, _x2, _x3) {
            return _sendGameRequest.apply(this, arguments);
          }
          return sendGameRequest;
        }()
        /**
         * Get mock response for offline mode
         */;

        _proto.getMockResponse = function getMockResponse(command, data) {
          switch (command) {
            case GameCommand.GET_PLAYER_DATA:
              return {
                playerData: null // Will be handled by LoadingViewModel to create new player
              };

            case GameCommand.SPIN_SLOT_MACHINE:
              return this.getMockSlotSpinResult((data == null ? void 0 : data.betMultiplier) || 1);
            default:
              return {
                success: true
              };
          }
        }

        /**
         * Generate mock slot machine spin result for offline mode
         */;
        _proto.getMockSlotSpinResult = function getMockSlotSpinResult(betMultiplier) {
          // Mock symbols for slot machine
          var mockSymbols = [{
            id: 'gold1',
            type: 'gold',
            value: 10,
            weight: 30
          }, {
            id: 'gold2',
            type: 'gold',
            value: 20,
            weight: 25
          }, {
            id: 'energy1',
            type: 'energy',
            value: 5,
            weight: 20
          }
          // { id: 'attack1', type: 'attack', value: 1, weight: 15 },
          // { id: 'raid1', type: 'raid', value: 1, weight: 10 }
          ];

          // Generate random reel results (3 reels, 1 row each)
          var reelResults = [];
          for (var reel = 0; reel < 3; reel++) {
            var randomIndex = Math.floor(Math.random() * mockSymbols.length);
            reelResults.push([mockSymbols[randomIndex]]);
          }

          // Check for winning combinations
          var winCombinations = [];
          var totalPayout = 0;

          // Simple win logic: if all 3 symbols are the same type
          var firstSymbol = reelResults[0][0];
          var isWin = reelResults.every(function (reel) {
            return reel[0].type === firstSymbol.type;
          });
          if (isWin) {
            var basePayout = firstSymbol.value * 3; // 3 matching symbols
            totalPayout = basePayout;
            winCombinations.push({
              paylineId: 'line1',
              symbols: [firstSymbol, reelResults[1][0], reelResults[2][0]],
              positions: [[0, 0], [1, 0], [2, 0]],
              payout: basePayout,
              multiplier: 1
            });
          }

          // Apply bet multiplier
          var finalPayout = totalPayout * betMultiplier;

          // Determine final reward type based on winning symbol or random
          var rewardType = 'gold';
          var rewardAmount = finalPayout;
          if (isWin) {
            rewardType = firstSymbol.type;
            if (rewardType === 'attack' || rewardType === 'raid') {
              rewardAmount = 1; // Special actions give 1 use
            }
          } else {
            // Even on loss, give small consolation prize
            rewardAmount = Math.floor(betMultiplier * 2);
          }
          var mockSlotSpinResult = {
            reelResults: reelResults,
            winCombinations: winCombinations,
            totalPayout: finalPayout,
            betMultiplier: betMultiplier,
            finalReward: {
              type: rewardType,
              amount: rewardAmount,
              multiplier: betMultiplier
            }
          };
          return {
            slotSpinResult: mockSlotSpinResult
          };
        }

        // Player Data Methods

        /**
         * Get player data from server
         */;
        _proto.getPlayerData = /*#__PURE__*/
        function () {
          var _getPlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var data;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.sendGameRequest(GameCommand.GET_PLAYER_DATA);
                case 2:
                  data = _context5.sent;
                  return _context5.abrupt("return", data.playerData);
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function getPlayerData() {
            return _getPlayerData.apply(this, arguments);
          }
          return getPlayerData;
        }()
        /**
         * Update player data on server
         */;

        _proto.updatePlayerData = /*#__PURE__*/
        function () {
          var _updatePlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(playerData) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.sendGameRequest(GameCommand.UPDATE_PLAYER_DATA, {
                    playerData: playerData
                  });
                case 2:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function updatePlayerData(_x4) {
            return _updatePlayerData.apply(this, arguments);
          }
          return updatePlayerData;
        }()
        /**
         * Get slot machine configuration
         */;

        _proto.getSlotMachineConfig = /*#__PURE__*/
        function () {
          var _getSlotMachineConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var data;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.sendGameRequest(GameCommand.GET_SLOT_MACHINE_CONFIG);
                case 2:
                  data = _context7.sent;
                  return _context7.abrupt("return", data.slotMachineConfig);
                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function getSlotMachineConfig() {
            return _getSlotMachineConfig.apply(this, arguments);
          }
          return getSlotMachineConfig;
        }()
        /**
         * Perform slot machine spin action
         */;

        _proto.spinSlotMachine = /*#__PURE__*/
        function () {
          var _spinSlotMachine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(betMultiplier) {
            var request, data;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  request = {
                    betMultiplier: betMultiplier
                  };
                  _context8.next = 3;
                  return this.sendGameRequest(GameCommand.SPIN_SLOT_MACHINE, request);
                case 3:
                  data = _context8.sent;
                  return _context8.abrupt("return", data.slotSpinResult);
                case 5:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function spinSlotMachine(_x5) {
            return _spinSlotMachine.apply(this, arguments);
          }
          return spinSlotMachine;
        }() // City Building Methods
        /**
         * Upgrade a building
         */;

        _proto.upgradeBuilding = /*#__PURE__*/
        function () {
          var _upgradeBuilding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(cityId, buildingId) {
            var request, data;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  request = {
                    cityId: cityId,
                    buildingId: buildingId
                  };
                  _context9.next = 3;
                  return this.sendGameRequest(GameCommand.UPGRADE_BUILDING, request);
                case 3:
                  data = _context9.sent;
                  return _context9.abrupt("return", data);
                case 5:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function upgradeBuilding(_x6, _x7) {
            return _upgradeBuilding.apply(this, arguments);
          }
          return upgradeBuilding;
        }()
        /**
         * Get city data
         */;

        _proto.getCityData = /*#__PURE__*/
        function () {
          var _getCityData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(cityId) {
            var data;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return this.sendGameRequest(GameCommand.GET_CITY_DATA, {
                    cityId: cityId
                  });
                case 2:
                  data = _context10.sent;
                  return _context10.abrupt("return", data.cityData);
                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function getCityData(_x8) {
            return _getCityData.apply(this, arguments);
          }
          return getCityData;
        }() // Attack Methods
        /**
         * Get attack target
         */;

        _proto.getAttackTarget = /*#__PURE__*/
        function () {
          var _getAttackTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var data;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.sendGameRequest(GameCommand.GET_ATTACK_TARGET);
                case 2:
                  data = _context11.sent;
                  return _context11.abrupt("return", data.targetPlayer);
                case 4:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this);
          }));
          function getAttackTarget() {
            return _getAttackTarget.apply(this, arguments);
          }
          return getAttackTarget;
        }()
        /**
         * Attack another player
         */;

        _proto.attackPlayer = /*#__PURE__*/
        function () {
          var _attackPlayer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(targetPlayerId, targetBuildingId) {
            var request, data;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  request = {
                    targetPlayerId: targetPlayerId,
                    targetBuildingId: targetBuildingId
                  };
                  _context12.next = 3;
                  return this.sendGameRequest(GameCommand.ATTACK_PLAYER, request);
                case 3:
                  data = _context12.sent;
                  return _context12.abrupt("return", data.attackResult);
                case 5:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));
          function attackPlayer(_x9, _x10) {
            return _attackPlayer.apply(this, arguments);
          }
          return attackPlayer;
        }() // Raid Methods
        /**
         * Get raid target
         */;

        _proto.getRaidTarget = /*#__PURE__*/
        function () {
          var _getRaidTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var data;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return this.sendGameRequest(GameCommand.GET_RAID_TARGET);
                case 2:
                  data = _context13.sent;
                  return _context13.abrupt("return", data.targetPlayer);
                case 4:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this);
          }));
          function getRaidTarget() {
            return _getRaidTarget.apply(this, arguments);
          }
          return getRaidTarget;
        }()
        /**
         * Raid another player
         */;

        _proto.raidPlayer = /*#__PURE__*/
        function () {
          var _raidPlayer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(targetPlayerId, chestIndex) {
            var request, data;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  request = {
                    targetPlayerId: targetPlayerId,
                    chestIndex: chestIndex
                  };
                  _context14.next = 3;
                  return this.sendGameRequest(GameCommand.RAID_PLAYER, request);
                case 3:
                  data = _context14.sent;
                  return _context14.abrupt("return", data.raidResult);
                case 5:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, this);
          }));
          function raidPlayer(_x11, _x12) {
            return _raidPlayer.apply(this, arguments);
          }
          return raidPlayer;
        }() // Main Event Methods
        /**
         * Get main event data
         */;

        _proto.getMainEvent = /*#__PURE__*/
        function () {
          var _getMainEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            var data;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.sendGameRequest(GameCommand.GET_MAIN_EVENT);
                case 2:
                  data = _context15.sent;
                  return _context15.abrupt("return", data.mainEvent);
                case 4:
                case "end":
                  return _context15.stop();
              }
            }, _callee15, this);
          }));
          function getMainEvent() {
            return _getMainEvent.apply(this, arguments);
          }
          return getMainEvent;
        }()
        /**
         * Claim event milestone reward
         */;

        _proto.claimEventMilestone = /*#__PURE__*/
        function () {
          var _claimEventMilestone = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(milestoneId) {
            var data;
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.sendGameRequest(GameCommand.CLAIM_EVENT_MILESTONE, {
                    milestoneId: milestoneId
                  });
                case 2:
                  data = _context16.sent;
                  return _context16.abrupt("return", data.claimResult);
                case 4:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
          function claimEventMilestone(_x13) {
            return _claimEventMilestone.apply(this, arguments);
          }
          return claimEventMilestone;
        }() // Resource Methods
        /**
         * Collect offline resources
         */;

        _proto.collectResources = /*#__PURE__*/
        function () {
          var _collectResources = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var data;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return this.sendGameRequest(GameCommand.COLLECT_RESOURCES);
                case 2:
                  data = _context17.sent;
                  return _context17.abrupt("return", data.resources);
                case 4:
                case "end":
                  return _context17.stop();
              }
            }, _callee17, this);
          }));
          function collectResources() {
            return _collectResources.apply(this, arguments);
          }
          return collectResources;
        }()
        /**
         * Handle network status changes
         */;

        _proto.handleNetworkStatusChange = function handleNetworkStatusChange(isOnline) {
          if (this._isOnline === isOnline) return;
          this._isOnline = isOnline;
          logInfo("Network status changed. Online: " + isOnline);
          if (isOnline) {
            // Network is back online, sync data
            this.syncPlayerData();
          }
        }

        /**
         * Sync player data with the server
         */;
        _proto.syncPlayerData = /*#__PURE__*/
        function () {
          var _syncPlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var serverPlayerData;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  logInfo('Syncing player data with server...');
                  if (this._playerModel) {
                    _context18.next = 3;
                    break;
                  }
                  return _context18.abrupt("return");
                case 3:
                  _context18.prev = 3;
                  _context18.next = 6;
                  return this.getPlayerData();
                case 6:
                  serverPlayerData = _context18.sent;
                  if (serverPlayerData) {
                    this._playerModel.initializePlayerData(serverPlayerData);
                    this.savePlayerDataToLocalStorage(serverPlayerData);
                    logInfo('Player data synced from server');
                    this.emit('playerDataSynced', serverPlayerData);
                  }
                  _context18.next = 13;
                  break;
                case 10:
                  _context18.prev = 10;
                  _context18.t0 = _context18["catch"](3);
                  logError('Failed to sync player data from server:', _context18.t0);
                case 13:
                case "end":
                  return _context18.stop();
              }
            }, _callee18, this, [[3, 10]]);
          }));
          function syncPlayerData() {
            return _syncPlayerData.apply(this, arguments);
          }
          return syncPlayerData;
        }()
        /**
         * Start auto-saving player data to local storage
         */;

        _proto.startAutoSave = function startAutoSave() {
          var _this3 = this;
          if (this._autoSaveInterval) {
            this.stopAutoSave();
          }
          var autoSaveFrequency = 2000; // 2 seconds
          this._autoSaveInterval = window.setInterval(function () {
            _this3.savePlayerDataToLocalStorage();
          }, autoSaveFrequency);
          logInfo("Auto-save started with frequency: " + autoSaveFrequency + "ms");
        }

        /**
         * Stop auto-saving player data
         */;
        _proto.stopAutoSave = function stopAutoSave() {
          if (this._autoSaveInterval) {
            window.clearInterval(this._autoSaveInterval);
            this._autoSaveInterval = null;
            logInfo('Auto-save stopped');
          }
        }

        /**
         * Save player data to local storage
         */;
        _proto.savePlayerDataToLocalStorage = function savePlayerDataToLocalStorage(data) {
          if (!this._playerModel) return;
          try {
            var playerData = data || this._playerModel.toJSON();
            log('Player data to save:', playerData);
            if (playerData) {
              localStorage.setItem('playerData', JSON.stringify(playerData));
              logInfo('Player data saved to local storage');
            }
          } catch (error) {
            logError('Failed to save player data to local storage:', error);
          }
        }

        /**
         * Load player data from local storage
         */;
        _proto.loadPlayerDataFromLocalStorage = function loadPlayerDataFromLocalStorage() {
          try {
            var playerDataJson = localStorage.getItem('playerData');
            if (playerDataJson) {
              var playerData = JSON.parse(playerDataJson);
              logInfo('Player data loaded from local storage');
              return playerData;
            }
          } catch (error) {
            logError('Failed to load player data from local storage:', error);
          }
          return null;
        }

        /**
         * Check if service is ready for game commands
         */;
        /**
         * Load player data from server or create new player
         */
        _proto.loadPlayerData = /*#__PURE__*/
        function () {
          var _loadPlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
            var serverPlayerData, localPlayerData;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  if (this._playerModel) {
                    _context19.next = 2;
                    break;
                  }
                  return _context19.abrupt("return");
                case 2:
                  _context19.prev = 2;
                  if (!this._isOnline) {
                    _context19.next = 16;
                    break;
                  }
                  // Online mode: prioritize server data
                  logInfo('Online mode: attempting to load player data from server...');
                  _context19.next = 7;
                  return this.getPlayerData();
                case 7:
                  serverPlayerData = _context19.sent;
                  if (!serverPlayerData) {
                    _context19.next = 15;
                    break;
                  }
                  this._playerModel.initializePlayerData(serverPlayerData);
                  this.savePlayerDataToLocalStorage(serverPlayerData);
                  logInfo('Player data loaded from server and saved to local storage');
                  return _context19.abrupt("return");
                case 15:
                  logWarn('No player data found on server, falling back to local storage.');
                case 16:
                  // Offline mode or server fetch failed: try local storage
                  logInfo('Offline mode or server fetch failed: attempting to load player data from local storage...');
                  localPlayerData = this.loadPlayerDataFromLocalStorage();
                  if (!localPlayerData) {
                    _context19.next = 22;
                    break;
                  }
                  this._playerModel.initializePlayerData(localPlayerData);
                  logInfo('Player data loaded from local storage');
                  return _context19.abrupt("return");
                case 22:
                  // No local data found, create new player
                  logInfo('No local player data found, creating a new player.');
                  this.createNewPlayer();
                  this.savePlayerDataToLocalStorage(); // Save the new player data
                  logInfo('New player created and saved to local storage');
                  _context19.next = 34;
                  break;
                case 28:
                  _context19.prev = 28;
                  _context19.t0 = _context19["catch"](2);
                  logError('An error occurred while loading player data:', _context19.t0);
                  logInfo('Falling back to creating a new player due to error.');
                  this.createNewPlayer();
                  this.savePlayerDataToLocalStorage();
                // Save the new player data
                case 34:
                case "end":
                  return _context19.stop();
              }
            }, _callee19, this, [[2, 28]]);
          }));
          function loadPlayerData() {
            return _loadPlayerData.apply(this, arguments);
          }
          return loadPlayerData;
        }()
        /**
         * Create new player with default data
         */;

        _proto.createNewPlayer = function createNewPlayer() {
          if (!this._playerModel) return;
          var gameConfig = GameConfig.getInstance();
          var resourceConfig = gameConfig.getResourceConfig();
          var newPlayerData = {
            id: this.generatePlayerId(),
            name: 'Player',
            level: 1,
            experience: 0,
            resources: {
              gold: resourceConfig.startingGold,
              energy: resourceConfig.startingEnergy,
              maxEnergy: resourceConfig.maxEnergy,
              lastEnergyRegenTime: Date.now()
            },
            currentCityId: 'city_1',
            cities: [],
            mainEvent: gameConfig.getActiveMainEvent() || gameConfig.getMainEventConfigs()[0],
            lastLoginTime: Date.now(),
            createdTime: Date.now()
          };
          this._playerModel.initializePlayerData(newPlayerData);
        }

        /**
         * Generate unique player ID
         */;
        _proto.generatePlayerId = function generatePlayerId() {
          var timestamp = Date.now();
          var random = Math.floor(Math.random() * 10000);
          return "player_" + timestamp + "_" + random;
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          if (this._networkService) {
            this._networkService.off('extensionResponse', this.onExtensionResponse, this);
            this._networkService.off('connectionLost', this.onConnectionLost, this);
            this._networkService.off('loggedOut', this.onLoggedOut, this);
            // Stop auto-save
            this.stopAutoSave();
          }

          // Cleanup player model
          if (this._playerModel) {
            this._playerModel.destroy();
            this._playerModel = null;
          }
          this._networkService = null;
          _BaseService.prototype.destroy.call(this);
        };
        _createClass(GameService, [{
          key: "isReady",
          get: function get() {
            return this._networkService !== null && this._networkService.isConnectedToServer && this._networkService.isLoggedIn;
          }
        }]);
        return GameService;
      }(BaseService));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './ResourceModel.ts', './BuildingModel.ts', './CityModel.ts', './MainEventModel.ts', './SlotMachineModel.ts', './PlayerModel.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('ResourceModel', module.ResourceModel);
    }, function (module) {
      exports('BuildingModel', module.BuildingModel);
    }, function (module) {
      exports('CityModel', module.CityModel);
    }, function (module) {
      exports('MainEventModel', module.MainEventModel);
    }, function (module) {
      exports('SlotMachineModel', module.SlotMachineModel);
    }, function (module) {
      exports('PlayerModel', module.PlayerModel);
    }],
    execute: function () {
      cclegacy._RF.push({}, "06454/e+ltIjrhCLhRcxKwZ", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['cc', './BaseModel.ts', './BaseViewModel.ts', './BaseView.ts', './BaseService.ts', './ServiceLocator.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('BaseModel', module.BaseModel);
    }, function (module) {
      exports('BaseViewModel', module.BaseViewModel);
    }, function (module) {
      exports('BaseView', module.BaseView);
    }, function (module) {
      exports('BaseService', module.BaseService);
    }, function (module) {
      exports('ServiceLocator', module.ServiceLocator);
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5bf01errtKNId1G/7OyEas", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index3.ts", ['cc', './NetworkService.ts', './GameService.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('NetworkService', module.NetworkService);
    }, function (module) {
      var _setter = {};
      _setter.GameCommand = module.GameCommand;
      _setter.GameService = module.GameService;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9876k1nu5CMokcZ4rKNbYB", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './LoadingViewModel.ts', './Logger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, ProgressBar, Node, Button, director, Color, BaseView, LoadingStep, LoadingViewModel, logInfo, logWarn, logError, logDebug;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      Button = module.Button;
      director = module.director;
      Color = module.Color;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      LoadingStep = module.LoadingStep;
      LoadingViewModel = module.LoadingViewModel;
    }, function (module) {
      logInfo = module.logInfo;
      logWarn = module.logWarn;
      logError = module.logError;
      logDebug = module.logDebug;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "825f7fOjdlHnqNu8GP7dsDJ", "LoadingView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Loading View - UI for loading scene
       */
      var LoadingView = exports('LoadingView', (_dec = ccclass('LoadingView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(ProgressBar), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Button), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(LoadingView, _BaseView);
        function LoadingView() {
          var _this;
          _this = _BaseView.call(this) || this;
          _initializerDefineProperty(_this, "titleLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingContainer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "errorContainer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "errorLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "retryButton", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingSpinner", _descriptor9, _assertThisInitialized(_this));
          _this._viewModel = null;
          _this._spinnerRotation = 0;
          logInfo('LoadingView: Constructor called');
          return _this;
        }
        var _proto = LoadingView.prototype;
        _proto.onLoad = function onLoad() {
          logInfo('LoadingView: onLoad called');
          _BaseView.prototype.onLoad.call(this);
        }

        /**
         * Setup UI components
         */;
        _proto.setupUI = function setupUI() {
          logInfo('LoadingView: Setting up UI...');

          // Initialize UI state
          this.showLoadingUI();
          this.hideErrorUI();

          // Set initial text
          if (this.titleLabel) {
            this.titleLabel.string = 'Coin Master';
            logInfo('LoadingView: Title label set');
          } else {
            logWarn('LoadingView: Title label not found');
          }
          if (this.messageLabel) {
            this.messageLabel.string = 'Initializing...';
            logInfo('LoadingView: Message label set');
          } else {
            logWarn('LoadingView: Message label not found');
          }
          if (this.progressLabel) {
            this.progressLabel.string = '0%';
            logInfo('LoadingView: Progress label set');
          } else {
            logWarn('LoadingView: Progress label not found');
          }
          if (this.progressBar) {
            this.progressBar.progress = 0;
            logInfo('LoadingView: Progress bar set');
          } else {
            logWarn('LoadingView: Progress bar not found');
          }

          // Start spinner animation
          this.startSpinnerAnimation();
          logInfo('LoadingView: UI setup complete');
        }

        /**
         * Bind UI events
         */;
        _proto.bindEvents = function bindEvents() {
          if (this.retryButton) {
            this.retryButton.node.on(Button.EventType.CLICK, this.onRetryClicked, this);
          }
        }

        /**
         * Update UI based on data changes
         */;
        _proto.updateUI = function updateUI(key, value, oldValue) {
          // Handle ViewModel data changes if needed
        }

        /**
         * Refresh entire UI
         */;
        _proto.refreshUI = function refreshUI() {
          if (this._viewModel) {
            var progress = this._viewModel.getLoadingProgress();
            this.updateProgress(progress);
          }
        }

        /**
         * Set ViewModel and setup event listeners
         */;
        _proto.setViewModel = function setViewModel(viewModel) {
          _BaseView.prototype.setViewModel.call(this, viewModel);
          this._viewModel = viewModel;
          if (this._viewModel) {
            this._viewModel.on('progressUpdated', this.onProgressUpdated, this);
            this._viewModel.on('loadingComplete', this.onLoadingComplete, this);
            this._viewModel.on('loadingError', this.onLoadingError, this);
          }
        }

        /**
         * Handle progress update
         */;
        _proto.onProgressUpdated = function onProgressUpdated(progressData) {
          logInfo("LoadingView: Progress update received: " + progressData.step + " - " + Math.round(progressData.progress * 100) + "% - " + progressData.message);
          this.updateProgress(progressData);
        }

        /**
         * Handle loading complete
         */;
        _proto.onLoadingComplete = function onLoadingComplete(data) {
          // Hide loading UI immediately
          this.hideLoadingUI();

          // Small delay before transitioning
          this.scheduleOnce(function () {
            // Load Main scene directly - this will destroy current scene
            director.loadScene('Main', function (loadError) {
              if (loadError) {
                logError('LoadingView: Failed to load Main scene:', loadError);
              }
            });
          }, 0.5);
        }

        /**
         * Handle loading error
         */;
        _proto.onLoadingError = function onLoadingError(data) {
          this.showErrorUI();
          this.hideLoadingUI();
          if (this.errorLabel) {
            this.errorLabel.string = data.error || 'An error occurred during loading';
          }
        }

        /**
         * Update progress display
         */;
        _proto.updateProgress = function updateProgress(progressData) {
          var step = progressData.step,
            progress = progressData.progress,
            message = progressData.message,
            error = progressData.error;
          logInfo("LoadingView: Updating progress - " + step + " - " + Math.round(progress * 100) + "% - " + message);

          // Update progress bar
          if (this.progressBar) {
            this.progressBar.progress = progress;
            logDebug("LoadingView: Progress bar updated to " + progress);
          } else {
            logWarn('LoadingView: Progress bar not available');
          }

          // Update progress label
          if (this.progressLabel) {
            this.progressLabel.string = Math.round(progress * 100) + "%";
            logDebug("LoadingView: Progress label updated to " + Math.round(progress * 100) + "%");
          } else {
            logWarn('LoadingView: Progress label not available');
          }

          // Update message
          if (this.messageLabel) {
            this.messageLabel.string = message;
            logDebug("LoadingView: Message label updated to: " + message);
          } else {
            logWarn('LoadingView: Message label not available');
          }

          // Handle error state
          if (step === LoadingStep.ERROR && error) {
            this.onLoadingError({
              error: error
            });
          }

          // Update message color based on step
          this.updateMessageColor(step);
        }

        /**
         * Update message color based on loading step
         */;
        _proto.updateMessageColor = function updateMessageColor(step) {
          if (!this.messageLabel) return;
          switch (step) {
            case LoadingStep.ERROR:
              this.messageLabel.color = Color.RED;
              break;
            case LoadingStep.COMPLETE:
              this.messageLabel.color = Color.GREEN;
              break;
            default:
              this.messageLabel.color = Color.WHITE;
              break;
          }
        }

        /**
         * Show loading UI
         */;
        _proto.showLoadingUI = function showLoadingUI() {
          if (this.loadingContainer) {
            this.loadingContainer.active = true;
          }
        }

        /**
         * Hide loading UI
         */;
        _proto.hideLoadingUI = function hideLoadingUI() {
          if (this.loadingContainer) {
            this.loadingContainer.active = false;
          }
        }

        /**
         * Show error UI
         */;
        _proto.showErrorUI = function showErrorUI() {
          if (this.errorContainer) {
            this.errorContainer.active = true;
          }
        }

        /**
         * Hide error UI
         */;
        _proto.hideErrorUI = function hideErrorUI() {
          if (this.errorContainer) {
            this.errorContainer.active = false;
          }
        }

        /**
         * Start spinner animation
         */;
        _proto.startSpinnerAnimation = function startSpinnerAnimation() {
          if (this.loadingSpinner) {
            this.schedule(this.updateSpinner, 0.016); // ~60 FPS
          }
        }

        /**
         * Update spinner rotation
         */;
        _proto.updateSpinner = function updateSpinner() {
          if (this.loadingSpinner && this.loadingSpinner.active) {
            this._spinnerRotation += 180 * 0.016; // 180 degrees per second
            if (this._spinnerRotation >= 360) {
              this._spinnerRotation -= 360;
            }
            this.loadingSpinner.angle = -this._spinnerRotation;
          }
        }

        /**
         * Handle retry button click
         */;
        _proto.onRetryClicked = /*#__PURE__*/
        function () {
          var _onRetryClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._viewModel) {
                    _context.next = 5;
                    break;
                  }
                  this.showLoadingUI();
                  this.hideErrorUI();
                  _context.next = 5;
                  return this._viewModel.executeCommand('retry');
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onRetryClicked() {
            return _onRetryClicked.apply(this, arguments);
          }
          return onRetryClicked;
        }()
        /**
         * Called when component starts
         */;

        _proto.start = function start() {
          logInfo('LoadingView: start() called');
          this.onShow();
        }

        /**
         * Called when view is shown
         */;
        _proto.onShow = function onShow() {
          logInfo('LoadingView: onShow called');
          _BaseView.prototype.onShow.call(this);

          // Initialize ViewModel if not already done
          if (!this._viewModel) {
            logInfo('LoadingView: Creating new LoadingViewModel');
            this._viewModel = new LoadingViewModel();
            this.setViewModel(this._viewModel);
            logInfo('LoadingView: Initializing LoadingViewModel');
            this._viewModel.initialize();
          } else {
            logInfo('LoadingView: ViewModel already exists');
          }
        }

        /**
         * Called when view is hidden
         */;
        _proto.onHide = function onHide() {
          _BaseView.prototype.onHide.call(this);

          // Stop spinner animation
          this.unschedule(this.updateSpinner);
        }

        /**
         * Cleanup on destroy
         */;
        _proto.onDestroy = function onDestroy() {
          // Safely remove event listeners
          if (this._viewModel) {
            this._viewModel.off('progressUpdated', this.onProgressUpdated, this);
            this._viewModel.off('loadingComplete', this.onLoadingComplete, this);
            this._viewModel.off('loadingError', this.onLoadingError, this);
          }

          // Stop spinner animation
          this.unschedule(this.updateSpinner);
          _BaseView.prototype.onDestroy.call(this);
        };
        return LoadingView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "messageLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadingContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "errorContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "errorLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "retryButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "loadingSpinner", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseViewModel.ts', './ServiceLocator.ts', './NetworkService.ts', './GameService.ts', './ResourceManager.ts', './GameConfig.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseViewModel, ServiceLocator, NetworkService, GameService, ResourceManager, GameConfig, logInfo, logError;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseViewModel = module.BaseViewModel;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      NetworkService = module.NetworkService;
    }, function (module) {
      GameService = module.GameService;
    }, function (module) {
      ResourceManager = module.ResourceManager;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      logInfo = module.logInfo;
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a2b2ZXLsVNQLsL8bEWOqXN", "LoadingViewModel", undefined);

      /**
       * Loading step enumeration
       */
      var LoadingStep = exports('LoadingStep', /*#__PURE__*/function (LoadingStep) {
        LoadingStep["INITIALIZING"] = "initializing";
        LoadingStep["LOADING_RESOURCES"] = "loading_resources";
        LoadingStep["CONNECTING_SERVER"] = "connecting_server";
        LoadingStep["LOGGING_IN"] = "logging_in";
        LoadingStep["LOADING_CONFIG"] = "loading_config";
        LoadingStep["LOADING_PLAYER_DATA"] = "loading_player_data";
        LoadingStep["FINALIZING"] = "finalizing";
        LoadingStep["COMPLETE"] = "complete";
        LoadingStep["ERROR"] = "error";
        return LoadingStep;
      }({}));

      /**
       * Loading progress data
       */

      /**
       * Loading ViewModel - Handles loading scene logic
       */
      var LoadingViewModel = exports('LoadingViewModel', /*#__PURE__*/function (_BaseViewModel) {
        _inheritsLoose(LoadingViewModel, _BaseViewModel);
        function LoadingViewModel() {
          var _this;
          _this = _BaseViewModel.call(this) || this;
          _this._currentStep = LoadingStep.INITIALIZING;
          _this._progress = 0;
          _this._message = '';
          _this._error = '';
          _this._playerModel = null;
          return _this;
        }

        /**
         * Initialize ViewModel
         */
        var _proto = LoadingViewModel.prototype;
        _proto.onInitialize = function onInitialize() {
          logInfo('LoadingViewModel: onInitialize called');
          var api = "https://github.com/temuchjn/remote-config-server/raw/refs/heads/main/paytable.json";
          var xhr = new XMLHttpRequest();
          xhr.open('GET', api, true);
          xhr.onload = function () {
            console.log(xhr.responseText);
          };
          xhr.send();
          this.startLoadingProcess();
        }

        /**
         * Execute command
         */;
        _proto.executeCommand = /*#__PURE__*/
        function () {
          var _executeCommand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(command) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = command;
                  _context.next = _context.t0 === 'retry' ? 3 : _context.t0 === 'getProgress' ? 4 : 5;
                  break;
                case 3:
                  return _context.abrupt("return", this.retryLoading());
                case 4:
                  return _context.abrupt("return", this.getLoadingProgress());
                case 5:
                  throw new Error("Unknown command: " + command);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function executeCommand(_x) {
            return _executeCommand.apply(this, arguments);
          }
          return executeCommand;
        }()
        /**
         * Start the loading process
         */;

        _proto.startLoadingProcess = /*#__PURE__*/
        function () {
          var _startLoadingProcess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  logInfo('LoadingViewModel: Starting loading process...');
                  _context2.prev = 1;
                  logInfo('LoadingViewModel: Step 1 - Load resources');
                  _context2.next = 5;
                  return this.loadResources();
                case 5:
                  logInfo('LoadingViewModel: Step 2 - Load game config');
                  _context2.next = 8;
                  return this.loadGameConfig();
                case 8:
                  logInfo('LoadingViewModel: Step 3 - Initialize services');
                  _context2.next = 11;
                  return this.initializeServices();
                case 11:
                  logInfo('LoadingViewModel: Step 4 - Connect to server');
                  _context2.next = 14;
                  return this.connectToServer();
                case 14:
                  logInfo('LoadingViewModel: Step 5 - Login to server');
                  _context2.next = 17;
                  return this.loginToServer();
                case 17:
                  logInfo('LoadingViewModel: Step 6 - Load player data');
                  _context2.next = 20;
                  return this.loadPlayerData();
                case 20:
                  logInfo('LoadingViewModel: Step 7 - Finalize loading');
                  _context2.next = 23;
                  return this.finalizeLoading();
                case 23:
                  logInfo('LoadingViewModel: Step 8 - Complete loading');
                  this.completeLoading();
                  _context2.next = 31;
                  break;
                case 27:
                  _context2.prev = 27;
                  _context2.t0 = _context2["catch"](1);
                  logError('LoadingViewModel: Error in loading process:', _context2.t0);
                  this.handleLoadingError(_context2.t0);
                case 31:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[1, 27]]);
          }));
          function startLoadingProcess() {
            return _startLoadingProcess.apply(this, arguments);
          }
          return startLoadingProcess;
        }()
        /**
         * Initialize services
         */;

        _proto.initializeServices = /*#__PURE__*/
        function () {
          var _initializeServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var serviceLocator;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.updateProgress(LoadingStep.INITIALIZING, 0.3, 'Initializing services...');
                  serviceLocator = ServiceLocator.getInstance();
                  serviceLocator.registerService('NetworkService', new NetworkService());
                  serviceLocator.registerService('GameService', new GameService());
                  serviceLocator.registerService('ResourceManager', new ResourceManager());

                  // Initialize all services
                  _context3.next = 7;
                  return serviceLocator.initializeAllServices();
                case 7:
                  this.updateProgress(LoadingStep.INITIALIZING, 0.4, 'Services initialized');
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function initializeServices() {
            return _initializeServices.apply(this, arguments);
          }
          return initializeServices;
        }()
        /**
         * Load game resources
         */;

        _proto.loadResources = /*#__PURE__*/
        function () {
          var _loadResources = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.updateProgress(LoadingStep.LOADING_RESOURCES, 0.0, 'Loading game resources...');

                  // Simulate resource loading (in real implementation, load actual assets)
                  _context4.next = 3;
                  return this.simulateAsyncOperation(1000);
                case 3:
                  this.updateProgress(LoadingStep.LOADING_RESOURCES, 0.2, 'Resources loaded');
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function loadResources() {
            return _loadResources.apply(this, arguments);
          }
          return loadResources;
        }()
        /**
         * Connect to server
         */;

        _proto.connectToServer = /*#__PURE__*/
        function () {
          var _connectToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var serviceLocator, networkService, config;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.updateProgress(LoadingStep.CONNECTING_SERVER, 0.4, 'Connecting to server...');
                  serviceLocator = ServiceLocator.getInstance();
                  networkService = serviceLocator.getService('NetworkService');
                  if (networkService) {
                    _context5.next = 5;
                    break;
                  }
                  throw new Error('NetworkService not found');
                case 5:
                  // Set connection configuration
                  config = {
                    host: 'localhost',
                    // Replace with actual server host
                    port: 9933,
                    // Replace with actual server port
                    zone: 'CoinMaster',
                    // Replace with actual zone name
                    useSSL: false,
                    debug: true
                  };
                  networkService.setConfig(config);

                  // Connect to server
                  _context5.next = 9;
                  return networkService.connect();
                case 9:
                  this.updateProgress(LoadingStep.CONNECTING_SERVER, 0.55, 'Connected to server');
                case 10:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function connectToServer() {
            return _connectToServer.apply(this, arguments);
          }
          return connectToServer;
        }()
        /**
         * Login to server
         */;

        _proto.loginToServer = /*#__PURE__*/
        function () {
          var _loginToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var serviceLocator, networkService, username, password;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  this.updateProgress(LoadingStep.LOGGING_IN, 0.55, 'Logging in...');
                  serviceLocator = ServiceLocator.getInstance();
                  networkService = serviceLocator.getService('NetworkService');
                  if (networkService) {
                    _context6.next = 5;
                    break;
                  }
                  throw new Error('NetworkService not found');
                case 5:
                  // Generate or get user credentials
                  username = this.generateUsername();
                  password = ''; // Empty password for guest login
                  _context6.next = 9;
                  return networkService.login(username, password);
                case 9:
                  this.updateProgress(LoadingStep.LOGGING_IN, 0.7, 'Logged in successfully');
                case 10:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function loginToServer() {
            return _loginToServer.apply(this, arguments);
          }
          return loginToServer;
        }()
        /**
         * Load game configuration
         */;

        _proto.loadGameConfig = /*#__PURE__*/
        function () {
          var _loadGameConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var gameConfig;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  this.updateProgress(LoadingStep.LOADING_CONFIG, 0.2, 'Loading game configuration...');
                  gameConfig = GameConfig.getInstance(); // Load default config
                  if (gameConfig.isLoaded) {
                    _context7.next = 5;
                    break;
                  }
                  _context7.next = 5;
                  return gameConfig.loadConfig();
                case 5:
                  this.updateProgress(LoadingStep.LOADING_CONFIG, 0.3, 'Configuration loaded');
                case 6:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function loadGameConfig() {
            return _loadGameConfig.apply(this, arguments);
          }
          return loadGameConfig;
        }()
        /**
         * Load player data
         */;

        _proto.loadPlayerData = /*#__PURE__*/
        function () {
          var _loadPlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var serviceLocator, gameService, resourceManager;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  this.updateProgress(LoadingStep.LOADING_PLAYER_DATA, 0.7, 'Loading player data...');
                  serviceLocator = ServiceLocator.getInstance();
                  gameService = serviceLocator.getService('GameService');
                  resourceManager = serviceLocator.getService('ResourceManager'); // Get player model from GameService (it's already initialized there)
                  this._playerModel = (gameService == null ? void 0 : gameService.getPlayerModel()) || null;
                  if (this._playerModel) {
                    _context8.next = 8;
                    break;
                  }
                  logError('Failed to get PlayerModel from GameService');
                  throw new Error('PlayerModel not available from GameService');
                case 8:
                  if (!resourceManager) {
                    _context8.next = 11;
                    break;
                  }
                  _context8.next = 11;
                  return resourceManager.connect();
                case 11:
                  this.updateProgress(LoadingStep.LOADING_PLAYER_DATA, 0.9, 'Player data loaded');
                case 12:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function loadPlayerData() {
            return _loadPlayerData.apply(this, arguments);
          }
          return loadPlayerData;
        }()
        /**
         * Finalize loading
         */;

        _proto.finalizeLoading = /*#__PURE__*/
        function () {
          var _finalizeLoading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var serviceLocator;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  this.updateProgress(LoadingStep.FINALIZING, 0.9, 'Finalizing...');

                  // Connect all services
                  serviceLocator = ServiceLocator.getInstance();
                  _context9.next = 4;
                  return serviceLocator.connectAllServices();
                case 4:
                  _context9.next = 6;
                  return this.simulateAsyncOperation(500);
                case 6:
                  this.updateProgress(LoadingStep.FINALIZING, 1.0, 'Ready to play!');
                case 7:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function finalizeLoading() {
            return _finalizeLoading.apply(this, arguments);
          }
          return finalizeLoading;
        }()
        /**
         * Complete loading process
         */;

        _proto.completeLoading = function completeLoading() {
          this.updateProgress(LoadingStep.COMPLETE, 1.0, 'Loading complete!');
          logInfo('LoadingViewModel: Emitting loadingComplete event...');
          this.emit('loadingComplete', {
            playerModel: this._playerModel
          });
          logInfo('LoadingViewModel: loadingComplete event emitted');
        }

        /**
         * Handle loading error
         */;
        _proto.handleLoadingError = function handleLoadingError(error) {
          logError('Loading error:', error);
          this._error = error.message || 'Unknown error occurred';
          this.updateProgress(LoadingStep.ERROR, this._progress, 'Loading failed', this._error);
          this.emit('loadingError', {
            error: this._error
          });
        }

        /**
         * Retry loading process
         */;
        _proto.retryLoading = /*#__PURE__*/
        function () {
          var _retryLoading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  this._error = '';
                  this._progress = 0;
                  this._currentStep = LoadingStep.INITIALIZING;
                  _context10.next = 5;
                  return this.startLoadingProcess();
                case 5:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function retryLoading() {
            return _retryLoading.apply(this, arguments);
          }
          return retryLoading;
        }()
        /**
         * Update loading progress
         */;

        _proto.updateProgress = function updateProgress(step, progress, message, error) {
          this._currentStep = step;
          this._progress = progress;
          this._message = message;
          if (error) {
            this._error = error;
          }
          var progressData = {
            step: step,
            progress: progress,
            message: message,
            error: error
          };
          logInfo("LoadingViewModel: Emitting progressUpdated - " + step + " - " + Math.round(progress * 100) + "% - " + message);
          this.emit('progressUpdated', progressData);
          logInfo("Loading: " + step + " - " + Math.round(progress * 100) + "% - " + message);
        }

        /**
         * Get current loading progress
         */;
        _proto.getLoadingProgress = function getLoadingProgress() {
          return {
            step: this._currentStep,
            progress: this._progress,
            message: this._message,
            error: this._error
          };
        }

        /**
         * Generate unique username
         */;
        _proto.generateUsername = function generateUsername() {
          var timestamp = Date.now();
          var random = Math.floor(Math.random() * 1000);
          return "Player_" + timestamp + "_" + random;
        }

        /**
         * Simulate async operation (for demo purposes)
         */;
        _proto.simulateAsyncOperation = function simulateAsyncOperation(duration) {
          return new Promise(function (resolve) {
            setTimeout(resolve, duration);
          });
        }

        /**
         * Get player model
         */;
        _proto.getPlayerModel = function getPlayerModel() {
          return this._playerModel;
        }

        /**
         * Check if loading is complete
         */;
        _createClass(LoadingViewModel, [{
          key: "isComplete",
          get: function get() {
            return this._currentStep === LoadingStep.COMPLETE;
          }

          /**
           * Check if loading has error
           */
        }, {
          key: "hasError",
          get: function get() {
            return this._currentStep === LoadingStep.ERROR;
          }
        }]);
        return LoadingViewModel;
      }(BaseViewModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Logger.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3df77Qb219M0qX1GSsu2YDH", "Logger", undefined);
      /**
       * Custom Logger utility for debugging
       * Stores logs in memory and provides export functionality
       */
      var Logger = exports('Logger', /*#__PURE__*/function () {
        function Logger() {
          this._logs = [];
          this._maxLogs = 1000;
          this._enabled = true;
        }

        /**
         * Get singleton instance
         */
        Logger.getInstance = function getInstance() {
          if (!Logger._instance) {
            Logger._instance = new Logger();
          }
          return Logger._instance;
        }

        /**
         * Log a message
         */;
        var _proto = Logger.prototype;
        _proto.log = function log(message, category) {
          if (category === void 0) {
            category = 'INFO';
          }
          if (!this._enabled) return;
          var timestamp = new Date().toISOString();
          var logEntry = "[" + timestamp + "] [" + category + "] " + message;

          // Add to internal storage
          this._logs.push(logEntry);

          // Keep only recent logs
          if (this._logs.length > this._maxLogs) {
            this._logs.shift();
          }

          // Also output to console for immediate viewing
          console.log(logEntry);
        }

        /**
         * Log info message
         */;
        _proto.info = function info(message) {
          this.log(message, 'INFO');
        }

        /**
         * Log warning message
         */;
        _proto.warn = function warn(message) {
          var warnMessage = '';
          if (typeof message === 'string') {
            warnMessage = message;
          } else {
            warnMessage = String(message);
          }

          // Add additional arguments if provided
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (args.length > 0) {
            warnMessage += ' ' + args.map(function (arg) {
              return String(arg);
            }).join(' ');
          }
          this.log(warnMessage, 'WARN');
        }

        /**
         * Log error message
         */;
        _proto.error = function error(message) {
          var errorMessage = '';
          if (typeof message === 'string') {
            errorMessage = message;
          } else if (message instanceof Error) {
            errorMessage = message.message;
          } else {
            errorMessage = String(message);
          }

          // Add additional arguments if provided
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          if (args.length > 0) {
            errorMessage += ' ' + args.map(function (arg) {
              return String(arg);
            }).join(' ');
          }
          this.log(errorMessage, 'ERROR');
        }

        /**
         * Log debug message
         */;
        _proto.debug = function debug(message) {
          this.log(message, 'DEBUG');
        }

        /**
         * Get all logs as string
         */;
        _proto.getAllLogs = function getAllLogs() {
          return this._logs.join('\n');
        }

        /**
         * Get recent logs (last N entries)
         */;
        _proto.getRecentLogs = function getRecentLogs(count) {
          if (count === void 0) {
            count = 50;
          }
          var recentLogs = this._logs.slice(-count);
          return recentLogs.join('\n');
        }

        /**
         * Clear all logs
         */;
        _proto.clear = function clear() {
          this._logs = [];
        }

        /**
         * Enable/disable logging
         */;
        _proto.setEnabled = function setEnabled(enabled) {
          this._enabled = enabled;
        }

        /**
         * Get logs count
         */;
        _proto.getLogsCount = function getLogsCount() {
          return this._logs.length;
        }

        /**
         * Export logs to localStorage for easy access
         */;
        _proto.exportToLocalStorage = function exportToLocalStorage(key) {
          if (key === void 0) {
            key = 'coinmaster_debug_logs';
          }
          try {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem(key, this.getAllLogs());
              this.info("Logs exported to localStorage with key: " + key);
            } else {
              this.warn('localStorage not available');
            }
          } catch (error) {
            this.error("Failed to export logs: " + error);
          }
        }

        /**
         * Create a downloadable log file (for web builds)
         */;
        _proto.downloadLogs = function downloadLogs(filename) {
          if (filename === void 0) {
            filename = 'coinmaster_debug.log';
          }
          try {
            var logContent = this.getAllLogs();
            var blob = new Blob([logContent], {
              type: 'text/plain'
            });
            var url = URL.createObjectURL(blob);

            // Create temporary download link
            var a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            this.info("Logs downloaded as: " + filename);
          } catch (error) {
            this.error("Failed to download logs: " + error);
          }
        }

        /**
         * Get logs filtered by category
         */;
        _proto.getLogsByCategory = function getLogsByCategory(category) {
          var filteredLogs = this._logs.filter(function (log) {
            return log.includes("[" + category + "]");
          });
          return filteredLogs.join('\n');
        }

        /**
         * Get logs filtered by search term
         */;
        _proto.searchLogs = function searchLogs(searchTerm) {
          var filteredLogs = this._logs.filter(function (log) {
            return log.toLowerCase().includes(searchTerm.toLowerCase());
          });
          return filteredLogs.join('\n');
        };
        return Logger;
      }());

      // Global logger instance for easy access
      Logger._instance = void 0;
      var logger = exports('logger', Logger.getInstance());

      // Convenience functions
      var logInfo = exports('logInfo', function logInfo(message) {
        return logger.info(message);
      });
      var logWarn = exports('logWarn', function logWarn(message) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        return logger.warn.apply(logger, [message].concat(args));
      });
      var logError = exports('logError', function logError(message) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        return logger.error.apply(logger, [message].concat(args));
      });
      var logDebug = exports('logDebug', function logDebug(message) {
        return logger.debug(message);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./CheatComponent.ts', './ReelComponent.ts', './RevealWave.ts', './SlotMachineComponent.ts', './AnimationConfig.ts', './GameConfig.ts', './SlotMachineConfig.ts', './ResourceManagerExample.ts', './BaseModel.ts', './BaseService.ts', './BaseView.ts', './BaseViewModel.ts', './ServiceLocator.ts', './index2.ts', './ResourceManager.ts', './BuildingModel.ts', './CityModel.ts', './MainEventModel.ts', './PlayerModel.ts', './ResourceModel.ts', './SlotMachineModel.ts', './index.ts', './ConfigScene.ts', './PreviewDragonBone.ts', './AttackView.ts', './AttackViewModel.ts', './CityView.ts', './CityViewModel.ts', './LoadingView.ts', './LoadingViewModel.ts', './MainView.ts', './MainViewModel.ts', './RaidView.ts', './RaidViewModel.ts', './GameService.ts', './NetworkService.ts', './index3.ts', './SimpleCityModelTest.ts', './DebugPanel.ts', './Logger.ts', './SlotMachineUtils.ts', './StringUtils.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainEventModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseModel.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, BaseModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseModel = module.BaseModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05666IZHdRK264kHZAqXEKD", "MainEventModel", undefined);

      /**
       * Event milestone data structure
       */

      /**
       * Main event data structure
       */

      /**
       * Main Event Model - Handles event progression and rewards
       */
      var MainEventModel = exports('MainEventModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(MainEventModel, _BaseModel);
        function MainEventModel() {
          var _this;
          _this = _BaseModel.call(this) || this;
          _this.initializeDefaults();
          return _this;
        }

        /**
         * Initialize default values
         */
        var _proto = MainEventModel.prototype;
        _proto.initializeDefaults = function initializeDefaults() {
          this.setData('id', '');
          this.setData('name', '');
          this.setData('description', '');
          this.setData('itemType', '');
          this.setData('currentItems', 0);
          this.setData('milestones', []);
          this.setData('isActive', false);
          this.setData('startTime', 0);
          this.setData('endTime', 0);
        }

        /**
         * Get event ID
         */;
        /**
         * Add items to the event
         */
        _proto.addItems = function addItems(amount) {
          if (this.isActive && amount > 0) {
            this.currentItems += amount;
            this.emit('itemsAdded', {
              amount: amount,
              totalItems: this.currentItems,
              eventId: this.id
            });
          }
        }

        /**
         * Get current milestone (next unclaimed milestone)
         */;
        _proto.getCurrentMilestone = function getCurrentMilestone() {
          var milestones = this.milestones;
          for (var _iterator = _createForOfIteratorHelperLoose(milestones), _step; !(_step = _iterator()).done;) {
            var milestone = _step.value;
            if (!milestone.isClaimed) {
              return milestone;
            }
          }
          return null;
        }

        /**
         * Get next milestone after current
         */;
        _proto.getNextMilestone = function getNextMilestone() {
          var milestones = this.milestones;
          var foundCurrent = false;
          for (var _iterator2 = _createForOfIteratorHelperLoose(milestones), _step2; !(_step2 = _iterator2()).done;) {
            var milestone = _step2.value;
            if (foundCurrent && !milestone.isClaimed) {
              return milestone;
            }
            if (!milestone.isClaimed) {
              foundCurrent = true;
            }
          }
          return null;
        }

        /**
         * Check if current milestone can be claimed
         */;
        _proto.canClaimCurrentMilestone = function canClaimCurrentMilestone() {
          var currentMilestone = this.getCurrentMilestone();
          return currentMilestone !== null && this.currentItems >= currentMilestone.requiredItems;
        }

        /**
         * Claim current milestone reward
         */;
        _proto.claimCurrentMilestone = function claimCurrentMilestone() {
          var currentMilestone = this.getCurrentMilestone();
          if (currentMilestone && this.canClaimCurrentMilestone()) {
            // Mark milestone as claimed
            var milestones = this.milestones;
            var milestoneIndex = milestones.findIndex(function (m) {
              return m.id === currentMilestone.id;
            });
            if (milestoneIndex >= 0) {
              milestones[milestoneIndex].isClaimed = true;
              this.setData('milestones', [].concat(milestones));
              this.emit('milestoneClaimed', {
                milestone: currentMilestone,
                eventId: this.id
              });
              return currentMilestone;
            }
          }
          return null;
        }

        /**
         * Get event progress (0-1) for current milestone
         */;
        _proto.getCurrentMilestoneProgress = function getCurrentMilestoneProgress() {
          var currentMilestone = this.getCurrentMilestone();
          if (!currentMilestone) {
            return 1; // All milestones completed
          }

          return Math.min(1, this.currentItems / currentMilestone.requiredItems);
        }

        /**
         * Get overall event progress (0-1)
         */;
        _proto.getOverallProgress = function getOverallProgress() {
          var milestones = this.milestones;
          if (milestones.length === 0) {
            return 0;
          }
          var claimedCount = milestones.filter(function (m) {
            return m.isClaimed;
          }).length;
          return claimedCount / milestones.length;
        }

        /**
         * Check milestone progress and emit events
         */;
        _proto.checkMilestoneProgress = function checkMilestoneProgress() {
          var currentMilestone = this.getCurrentMilestone();
          if (currentMilestone && this.currentItems >= currentMilestone.requiredItems) {
            this.emit('milestoneReached', {
              milestone: currentMilestone,
              eventId: this.id
            });
          }
        }

        /**
         * Get remaining time in milliseconds
         */;
        _proto.getRemainingTime = function getRemainingTime() {
          if (!this.isActive) {
            return 0;
          }
          var currentTime = Date.now();
          var endTime = this.endTime;
          return Math.max(0, endTime - currentTime);
        }

        /**
         * Check if event has expired
         */;
        _proto.hasExpired = function hasExpired() {
          var currentTime = Date.now();
          var endTime = this.endTime;
          return endTime > 0 && currentTime > endTime;
        }

        /**
         * Initialize event with server data
         */;
        _proto.initializeEvent = function initializeEvent(eventData) {
          this.initialize(eventData);
          if (this.isActive) {
            this.emit('eventStarted', {
              eventId: this.id
            });
          }
        }

        /**
         * End the current event
         */;
        _proto.endEvent = function endEvent() {
          this.setData('isActive', false);
          this.emit('eventEnded', {
            eventId: this.id
          });
        }

        /**
         * Validate model data
         */;
        _proto.validate = function validate() {
          var id = this.id;
          var name = this.name;
          var itemType = this.itemType;
          var currentItems = this.currentItems;
          var milestones = this.milestones;
          var startTime = this.startTime;
          var endTime = this.endTime;

          // Basic validation
          if (!id || !name || !itemType || currentItems < 0) {
            return false;
          }

          // Time validation
          if (startTime > 0 && endTime > 0 && startTime >= endTime) {
            return false;
          }

          // Milestones validation
          if (!Array.isArray(milestones)) {
            return false;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(milestones), _step3; !(_step3 = _iterator3()).done;) {
            var milestone = _step3.value;
            if (!milestone.id || milestone.requiredItems < 0 || !milestone.reward) {
              return false;
            }
          }
          return true;
        }

        /**
         * Serialize to JSON
         */;
        _proto.toJSON = function toJSON() {
          return {
            id: this.id,
            name: this.name,
            description: this.description,
            itemType: this.itemType,
            currentItems: this.currentItems,
            milestones: [].concat(this.milestones),
            isActive: this.getData('isActive') || false,
            startTime: this.startTime,
            endTime: this.endTime
          };
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(data) {
          this.initializeEvent(data);
        };
        _createClass(MainEventModel, [{
          key: "id",
          get: function get() {
            return this.getData('id') || '';
          }

          /**
           * Get event name
           */
        }, {
          key: "name",
          get: function get() {
            return this.getData('name') || '';
          }

          /**
           * Get event description
           */
        }, {
          key: "description",
          get: function get() {
            return this.getData('description') || '';
          }

          /**
           * Get item type for this event
           */
        }, {
          key: "itemType",
          get: function get() {
            return this.getData('itemType') || '';
          }

          /**
           * Get current item count
           */
        }, {
          key: "currentItems",
          get: function get() {
            return this.getData('currentItems') || 0;
          }

          /**
           * Set current item count
           */,
          set: function set(value) {
            var oldValue = this.currentItems;
            this.setData('currentItems', Math.max(0, value));
            if (value > oldValue) {
              this.checkMilestoneProgress();
            }
          }

          /**
           * Get all milestones
           */
        }, {
          key: "milestones",
          get: function get() {
            return this.getData('milestones') || [];
          }

          /**
           * Check if event is active
           */
        }, {
          key: "isActive",
          get: function get() {
            var isActive = this.getData('isActive') || false;
            var currentTime = Date.now();
            var startTime = this.getData('startTime') || 0;
            var endTime = this.getData('endTime') || 0;
            return isActive && currentTime >= startTime && currentTime <= endTime;
          }

          /**
           * Get event start time
           */
        }, {
          key: "startTime",
          get: function get() {
            return this.getData('startTime') || 0;
          }

          /**
           * Get event end time
           */
        }, {
          key: "endTime",
          get: function get() {
            return this.getData('endTime') || 0;
          }
        }]);
        return MainEventModel;
      }(BaseModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './MainViewModel.ts', './Logger.ts', './SlotMachineComponent.ts', './CheatComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SpriteAtlas, Label, Node, ProgressBar, Button, Tween, tween, director, BaseView, MainViewModel, logError, SlotMachineComponent, CheatComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      Label = module.Label;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      Button = module.Button;
      Tween = module.Tween;
      tween = module.tween;
      director = module.director;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      MainViewModel = module.MainViewModel;
    }, function (module) {
      logError = module.logError;
    }, function (module) {
      SlotMachineComponent = module.SlotMachineComponent;
    }, function (module) {
      CheatComponent = module.CheatComponent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "3976ax0WAxBZqcZXrh3/tDy", "MainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainView = exports('MainView', (_dec = ccclass('MainView'), _dec2 = property([SpriteAtlas]), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(ProgressBar), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Node), _dec15 = property(CheatComponent), _dec16 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(MainView, _BaseView);
        function MainView() {
          var _this;
          _this = _BaseView.call(this) || this;
          _initializerDefineProperty(_this, "spriteAtlases", _descriptor, _assertThisInitialized(_this));
          // Resource Display
          _initializerDefineProperty(_this, "goldLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "energyLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "energyRegenLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerLevelLabel", _descriptor5, _assertThisInitialized(_this));
          // Slot Machine UI
          _initializerDefineProperty(_this, "slotMachineNode", _descriptor6, _assertThisInitialized(_this));
          // Main Event UI
          _initializerDefineProperty(_this, "mainEventContainer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventNameLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventProgressLabel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventProgressBar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "claimMilestoneButton", _descriptor11, _assertThisInitialized(_this));
          // Navigation Buttons
          _initializerDefineProperty(_this, "cityButton", _descriptor12, _assertThisInitialized(_this));
          // Notification UI
          _initializerDefineProperty(_this, "notificationContainer", _descriptor13, _assertThisInitialized(_this));
          //Cheat UI
          _initializerDefineProperty(_this, "cheatContainer", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notificationLabel", _descriptor15, _assertThisInitialized(_this));
          _this._viewModel = null;
          _this._slotMachineComponent = null;
          return _this;
        }
        var _proto = MainView.prototype;
        _proto.onLoad = function onLoad() {
          _BaseView.prototype.onLoad.call(this);
          this._slotMachineComponent = this.slotMachineNode.getComponent(SlotMachineComponent);
        };
        _proto.start = function start() {
          this.onShow();
        };
        _proto.setupUI = function setupUI() {
          try {
            this.updateResourceDisplay();
            this.updateEventDisplay();
            this.hideNotification();
            this.startEnergyRegenTimer();
          } catch (error) {
            logError('MainView: Error during UI setup:', error);
          }
        };
        _proto.bindEvents = function bindEvents() {
          if (this.claimMilestoneButton) {
            this.claimMilestoneButton.node.on(Button.EventType.CLICK, this.onClaimMilestoneClicked, this);
          }
          if (this.cityButton) {
            this.cityButton.node.on(Button.EventType.CLICK, this.onCityClicked, this);
          }
        };
        _proto.updateUI = function updateUI(key, value, oldValue) {
          // This can be used for specific UI updates if needed
        };
        _proto.refreshUI = function refreshUI() {
          this.updateResourceDisplay();
          this.updateEventDisplay();
        };
        _proto.setViewModel = function setViewModel(viewModel) {
          _BaseView.prototype.setViewModel.call(this, viewModel);
          this._viewModel = viewModel;
          if (this._viewModel) {
            this.setupViewModelEvents();
            if (this._slotMachineComponent) {
              this._slotMachineComponent.setViewModel(this._viewModel);
            }
          }
        };
        _proto.setupViewModelEvents = function setupViewModelEvents() {
          if (!this._viewModel) return;
          this._viewModel.on('dataLoaded', this.onDataLoaded, this);
          this._viewModel.on('resourceUpdated', this.onResourceUpdated, this);
          this._viewModel.on('milestoneReached', this.onMilestoneReached, this);
          this._viewModel.on('milestoneClaimed', this.onMilestoneClaimed, this);
          this._viewModel.on('insufficientEnergy', this.onInsufficientEnergy, this);
          this._viewModel.on('navigateToScene', this.onNavigateToScene, this);
          this._viewModel.on('attackRewardReceived', this.onAttackRewardReceived, this);
          this._viewModel.on('raidRewardReceived', this.onRaidRewardReceived, this);
          this._viewModel.on('spinCompleted', this.onSpinCompleted, this);
        };
        _proto.updateResourceDisplay = function updateResourceDisplay() {
          if (!this._viewModel) return;
          if (this.goldLabel) {
            this.goldLabel.string = this.formatNumber(this._viewModel.currentGold);
          }
          if (this.energyLabel) {
            var str = this._viewModel.currentEnergy > this._viewModel.maxEnergy ? "" + this._viewModel.currentEnergy : this._viewModel.currentEnergy + "/" + this._viewModel.maxEnergy;
            this.energyLabel.string = str;
          }
          if (this.playerLevelLabel) {
            this.playerLevelLabel.string = "" + this._viewModel.playerLevel;
          }
        };
        _proto.updateEnergyRegenCountdown = function updateEnergyRegenCountdown() {
          if (!this._viewModel || !this.energyRegenLabel) return;

          // Get time until next energy regeneration in milliseconds
          var timeUntilRegen = this._viewModel.getTimeUntilNextEnergyRegen();
          if (this._viewModel.currentEnergy >= this._viewModel.maxEnergy) {
            // Energy is full or regeneration is due
            this.energyRegenLabel.string = "Full";
            return;
          }

          // Convert milliseconds to seconds
          var totalSeconds = Math.ceil(timeUntilRegen / 1000);

          // Format as "Xm Ys" or "Xs"
          var minutes = Math.floor(totalSeconds / 60);
          var seconds = totalSeconds % 60;
          if (minutes > 0) {
            this.energyRegenLabel.string = minutes + "m " + seconds + "s";
          } else {
            this.energyRegenLabel.string = seconds + "s";
          }
        };
        _proto.startEnergyRegenTimer = function startEnergyRegenTimer() {
          // Clear any existing timer
          this.stopEnergyRegenTimer();

          // Update immediately
          this.updateEnergyRegenCountdown();

          // Schedule periodic updates every second using Cocos Creator's scheduling system
          this.schedule(this.updateEnergyRegenCountdown, 1.0);
        };
        _proto.stopEnergyRegenTimer = function stopEnergyRegenTimer() {
          // Unschedule the energy regeneration countdown update
          this.unschedule(this.updateEnergyRegenCountdown);
        };
        _proto.updateEventDisplay = function updateEventDisplay() {
          if (!this._viewModel) return;
          if (this.eventProgressBar) {
            this.eventProgressBar.progress = this._viewModel.eventProgress;
          }
          if (this.eventProgressLabel) {
            var progress = Math.round(this._viewModel.eventProgress * 100);
            this.eventProgressLabel.string = progress + "%";
          }
          if (this.claimMilestoneButton) {
            this.claimMilestoneButton.interactable = this._viewModel.canClaimMilestone;
          }
        };
        _proto.showNotification = function showNotification(message, duration) {
          var _this2 = this;
          if (duration === void 0) {
            duration = 2.0;
          }
          if (this.notificationContainer && this.notificationLabel) {
            this.notificationLabel.string = message;
            this.notificationContainer.active = true;
            Tween.stopAllByTarget(this.notificationContainer);
            tween(this.notificationContainer).delay(duration).call(function () {
              _this2.hideNotification();
            }).start();
          }
        };
        _proto.hideNotification = function hideNotification() {
          if (this.notificationContainer) {
            this.notificationContainer.active = false;
          }
        };
        _proto.formatNumber = function formatNumber(num) {
          if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
          } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
          }
          return num.toString();
        }

        // Event Handlers
        ;

        _proto.onDataLoaded = function onDataLoaded() {
          this.refreshUI();
        };
        _proto.onResourceUpdated = function onResourceUpdated() {
          this.updateResourceDisplay();
          this.startEnergyRegenTimer(); // Restart timer when resources change
        };

        _proto.onSpinCompleted = function onSpinCompleted(spinResult) {
          var reward = spinResult.finalReward;
          var message = '';
          switch (reward.type) {
            case 'gold':
              message = "+" + reward.amount + " Gold!";
              break;
            case 'energy':
              message = "+" + reward.amount + " Energy!";
              break;
            case 'event_item':
              message = "+" + reward.amount + " Event Items!";
              break;
            case 'attack':
              message = 'Attack Unlocked!';
              break;
            case 'raid':
              message = 'Raid Unlocked!';
              break;
          }
          this.showNotification(message);
          this.updateResourceDisplay();
        };
        _proto.onMilestoneReached = function onMilestoneReached() {
          this.showNotification('Milestone Reached! Claim your reward!');
          this.updateEventDisplay();
        };
        _proto.onMilestoneClaimed = function onMilestoneClaimed(event) {
          var reward = event.milestone.reward;
          this.showNotification("Claimed: " + reward.amount + " " + reward.type + "!");
          this.updateEventDisplay();
          this.updateResourceDisplay();
        };
        _proto.onInsufficientEnergy = function onInsufficientEnergy(event) {
          this.showNotification("Need " + event.required + " energy, have " + event.available);
        };
        _proto.onNavigateToScene = function onNavigateToScene(sceneName) {
          director.loadScene(sceneName);
        };
        _proto.onAttackRewardReceived = function onAttackRewardReceived() {
          this.showNotification('Attack available! Tap Attack button!');
        };
        _proto.onRaidRewardReceived = function onRaidRewardReceived() {
          this.showNotification('Raid available! Tap Raid button!');
        }

        // Button Event Handlers
        ;

        _proto.onClaimMilestoneClicked = /*#__PURE__*/
        function () {
          var _onClaimMilestoneClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._viewModel) {
                    _context.next = 3;
                    break;
                  }
                  _context.next = 3;
                  return this._viewModel.executeCommand('claimMilestone');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClaimMilestoneClicked() {
            return _onClaimMilestoneClicked.apply(this, arguments);
          }
          return onClaimMilestoneClicked;
        }();
        _proto.onCityClicked = function onCityClicked() {
          if (this._viewModel) {
            this._viewModel.executeCommand('navigateToCity');
          }
        };
        _proto.onCheatClicked = function onCheatClicked() {
          this.cheatContainer.show();
        };
        _proto.onShow = function onShow() {
          _BaseView.prototype.onShow.call(this);
          if (!this._viewModel) {
            this._viewModel = new MainViewModel();
            this.setViewModel(this._viewModel);
            this._viewModel.initialize();
          }
        };
        _proto.onDestroy = function onDestroy() {
          // Stop the energy regeneration timer
          this.stopEnergyRegenTimer();
          if (this._viewModel) {
            this._viewModel.off('dataLoaded', this.onDataLoaded, this);
            this._viewModel.off('resourceUpdated', this.onResourceUpdated, this);
            this._viewModel.off('milestoneReached', this.onMilestoneReached, this);
            this._viewModel.off('milestoneClaimed', this.onMilestoneClaimed, this);
            this._viewModel.off('insufficientEnergy', this.onInsufficientEnergy, this);
            this._viewModel.off('navigateToScene', this.onNavigateToScene, this);
            this._viewModel.off('attackRewardReceived', this.onAttackRewardReceived, this);
            this._viewModel.off('raidRewardReceived', this.onRaidRewardReceived, this);
            this._viewModel.off('spinCompleted', this.onSpinCompleted, this);
          }
          _BaseView.prototype.onDestroy.call(this);
        };
        return MainView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteAtlases", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "energyLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "energyRegenLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playerLevelLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "slotMachineNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mainEventContainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "eventNameLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "eventProgressLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "eventProgressBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "claimMilestoneButton", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cityButton", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notificationContainer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cheatContainer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "notificationLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseViewModel.ts', './ServiceLocator.ts', './PlayerModel.ts', './SlotMachineModel.ts', './GameConfig.ts', './AnimationConfig.ts', './Logger.ts', './StringUtils.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseViewModel, ServiceLocator, PlayerModel, SlotMachineModel, SlotRewardType, GameConfig, AnimationConfig, logError, StringUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseViewModel = module.BaseViewModel;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      PlayerModel = module.PlayerModel;
    }, function (module) {
      SlotMachineModel = module.SlotMachineModel;
      SlotRewardType = module.SlotRewardType;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      AnimationConfig = module.AnimationConfig;
    }, function (module) {
      logError = module.logError;
    }, function (module) {
      StringUtils = module.StringUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e4de49BZ0lFgpMLiS3rhzFI", "MainViewModel", undefined);

      /**
       * Main Scene ViewModel - Handles main game screen logic
       */
      var MainViewModel = exports('MainViewModel', /*#__PURE__*/function (_BaseViewModel) {
        _inheritsLoose(MainViewModel, _BaseViewModel);
        function MainViewModel() {
          var _this;
          _this = _BaseViewModel.call(this) || this;
          _this._gameService = null;
          _this._resourceManager = null;
          _this._playerModel = null;
          _this._slotMachineModel = null;
          _this._mainEventModel = null;
          _this._animationConfig = null;
          return _this;
        }

        /**
         * Initialize ViewModel
         */
        var _proto = MainViewModel.prototype;
        _proto.onInitialize = function onInitialize() {
          this.setupServices();
          this.setupModels();
          this.setupEventListeners();
          this.loadInitialData();
        }

        /**
         * Setup services
         */;
        _proto.setupServices = function setupServices() {
          var serviceLocator = ServiceLocator.getInstance();
          this._gameService = serviceLocator.getService('GameService');
          this._resourceManager = serviceLocator.getService('ResourceManager');
          this._animationConfig = AnimationConfig.getInstance();
          if (!this._gameService) {
            logError('GameService not found');
          }
          if (!this._resourceManager) {
            logError('ResourceManager not found');
          }
        }

        /**
         * Setup models
         */;
        _proto.setupModels = function setupModels() {
          // Get player model from GameService (single source of truth)
          var serviceLocator = ServiceLocator.getInstance();
          var gameService = serviceLocator.getService('GameService');
          if (gameService) {
            this._playerModel = gameService.getPlayerModel();
          }
          if (!this._playerModel) {
            logError('MainViewModel failed to get PlayerModel from GameService. This is a critical error.');
            // Fallback to a new instance to prevent crashes, but this indicates an architectural problem.
            this._playerModel = new PlayerModel();
          }

          // Initialize slot machine model
          this._slotMachineModel = new SlotMachineModel();

          // Get main event model from player
          if (this._playerModel) {
            this._mainEventModel = this._playerModel.mainEvent;
          }
        }

        /**
         * Setup event listeners
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          // Resource manager events
          if (this._resourceManager) {
            this._resourceManager.on('resourceChanged', this.onResourceChanged, this);
            this._resourceManager.on('insufficientResources', this.onInsufficientResources, this);
          }

          // Slot machine events
          if (this._slotMachineModel) {
            this._slotMachineModel.on('spinStarted', this.onSpinStarted, this);
            this._slotMachineModel.on('spinCompleted', this.onSpinCompleted, this);
            this._slotMachineModel.on('autoSpinStateChanged', this.onAutoSpinStateChanged, this);
          }

          // Main event events
          if (this._mainEventModel) {
            this._mainEventModel.on('itemsAdded', this.onEventItemsAdded, this);
            this._mainEventModel.on('milestoneReached', this.onMilestoneReached, this);
            this._mainEventModel.on('milestoneClaimed', this.onMilestoneClaimed, this);
          }

          // Player model events
          if (this._playerModel) {
            this._playerModel.on('levelUp', this.onPlayerLevelUp, this);
            this._playerModel.on('currentCityChanged', this.onCurrentCityChanged, this);
          }
        }

        /**
         * Load initial data
         */;
        _proto.loadInitialData = /*#__PURE__*/
        function () {
          var _loadInitialData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.loadSlotMachineConfig();
                case 3:
                  _context.next = 5;
                  return this.refreshPlayerData();
                case 5:
                  this.emit('dataLoaded');
                  _context.next = 12;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  logError('Failed to load initial data:', _context.t0);
                  this.emit('dataLoadError', _context.t0);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 8]]);
          }));
          function loadInitialData() {
            return _loadInitialData.apply(this, arguments);
          }
          return loadInitialData;
        }()
        /**
         * Load slot machine configuration
         */;

        _proto.loadSlotMachineConfig = /*#__PURE__*/
        function () {
          var _loadSlotMachineConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var config, gameConfig, _gameConfig, _config;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._slotMachineModel) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.prev = 2;
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context2.next = 9;
                    break;
                  }
                  _context2.next = 6;
                  return this._gameService.getSlotMachineConfig();
                case 6:
                  config = _context2.sent;
                  _context2.next = 11;
                  break;
                case 9:
                  // Load from local config
                  gameConfig = GameConfig.getInstance();
                  config = gameConfig.getSlotMachineConfig();
                case 11:
                  this._slotMachineModel.loadConfiguration(config);
                  this.emit('slotMachineConfigLoaded', config);
                  _context2.next = 21;
                  break;
                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2["catch"](2);
                  logError('Failed to load slot machine config:', _context2.t0);
                  // Fallback to default config
                  _gameConfig = GameConfig.getInstance();
                  _config = _gameConfig.getSlotMachineConfig();
                  this._slotMachineModel.loadConfiguration(_config);
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[2, 15]]);
          }));
          function loadSlotMachineConfig() {
            return _loadSlotMachineConfig.apply(this, arguments);
          }
          return loadSlotMachineConfig;
        }()
        /**
         * Refresh player data
         */;

        _proto.refreshPlayerData = /*#__PURE__*/
        function () {
          var _refreshPlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var playerData;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this._playerModel) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  _context3.prev = 2;
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context3.next = 8;
                    break;
                  }
                  _context3.next = 6;
                  return this._gameService.getPlayerData();
                case 6:
                  playerData = _context3.sent;
                  this._playerModel.initializePlayerData(playerData);
                case 8:
                  this.emit('playerDataRefreshed');
                  _context3.next = 14;
                  break;
                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3["catch"](2);
                  logError('Failed to refresh player data:', _context3.t0);
                case 14:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[2, 11]]);
          }));
          function refreshPlayerData() {
            return _refreshPlayerData.apply(this, arguments);
          }
          return refreshPlayerData;
        }()
        /**
         * Execute command
         */;

        _proto.executeCommand = /*#__PURE__*/
        function () {
          var _executeCommand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(command) {
            var _args4 = arguments;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.t0 = command;
                  _context4.next = _context4.t0 === 'spin' ? 3 : _context4.t0 === 'setBetMultiplier' ? 4 : _context4.t0 === 'increaseBetMultiplier' ? 5 : _context4.t0 === 'decreaseBetMultiplier' ? 6 : _context4.t0 === 'changeBetMultiplier' ? 7 : _context4.t0 === 'claimMilestone' ? 8 : _context4.t0 === 'navigateToCity' ? 9 : _context4.t0 === 'navigateToAttack' ? 10 : _context4.t0 === 'navigateToRaid' ? 11 : _context4.t0 === 'startAutoSpin' ? 12 : _context4.t0 === 'stopAutoSpin' ? 13 : _context4.t0 === 'refreshData' ? 14 : 15;
                  break;
                case 3:
                  return _context4.abrupt("return", this.performSpin());
                case 4:
                  return _context4.abrupt("return", this.setBetMultiplier(_args4.length <= 1 ? undefined : _args4[1]));
                case 5:
                  return _context4.abrupt("return", this.increaseBetMultiplier());
                case 6:
                  return _context4.abrupt("return", this.decreaseBetMultiplier());
                case 7:
                  return _context4.abrupt("return", this.changeBetMultiplier());
                case 8:
                  return _context4.abrupt("return", this.claimEventMilestone());
                case 9:
                  return _context4.abrupt("return", this.navigateToCity());
                case 10:
                  return _context4.abrupt("return", this.navigateToAttack());
                case 11:
                  return _context4.abrupt("return", this.navigateToRaid());
                case 12:
                  return _context4.abrupt("return", this.startAutoSpin());
                case 13:
                  return _context4.abrupt("return", this.stopAutoSpin());
                case 14:
                  return _context4.abrupt("return", this.refreshPlayerData());
                case 15:
                  throw new Error("Unknown command: " + command);
                case 16:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function executeCommand(_x) {
            return _executeCommand.apply(this, arguments);
          }
          return executeCommand;
        }()
        /**
         * Perform slot machine spin action
         */;

        _proto.performSpin = /*#__PURE__*/
        function () {
          var _performSpin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var energyCost, spinResult;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(!this._slotMachineModel || !this._resourceManager || !this._gameService)) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return", null);
                case 2:
                  if (!this._slotMachineModel.isSpinning) {
                    _context5.next = 4;
                    break;
                  }
                  return _context5.abrupt("return", null);
                case 4:
                  // Check if player has enough energy
                  energyCost = this._slotMachineModel.getTotalEnergyCost();
                  if (this._resourceManager.hasEnoughEnergy(energyCost)) {
                    _context5.next = 8;
                    break;
                  }
                  this.emit('insufficientEnergy', {
                    required: energyCost,
                    available: this._resourceManager.getEnergy()
                  });
                  return _context5.abrupt("return", null);
                case 8:
                  _context5.prev = 8;
                  _context5.next = 11;
                  return this._resourceManager.spendEnergy(energyCost, 'slot_machine');
                case 11:
                  // Generate the result before starting the spin
                  spinResult = this._slotMachineModel.generateSpinResult(); // Start the spin, passing the result so the view can animate
                  this._slotMachineModel.startSpin(spinResult);
                  return _context5.abrupt("return", spinResult);
                case 16:
                  _context5.prev = 16;
                  _context5.t0 = _context5["catch"](8);
                  logError('Spin failed:', _context5.t0);
                  // Refund energy on failure
                  _context5.next = 21;
                  return this._resourceManager.addEnergy(energyCost, 'spin_refund');
                case 21:
                  this._slotMachineModel.resetSpin();
                  this.emit('spinError', _context5.t0);
                  return _context5.abrupt("return", null);
                case 24:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[8, 16]]);
          }));
          function performSpin() {
            return _performSpin.apply(this, arguments);
          }
          return performSpin;
        }()
        /**
         * Set bet multiplier
         */;

        _proto.setBetMultiplier = function setBetMultiplier(multiplier) {
          if (!this._slotMachineModel) return false;
          var availableMultipliers = this._slotMachineModel.availableMultipliers;
          if (availableMultipliers.includes(multiplier)) {
            this._slotMachineModel.selectedMultiplier = multiplier;
            this.emit('betMultiplierChanged', multiplier);
            return true;
          }
          return false;
        }

        /**
         * Increase bet multiplier to next value in the array
         */;
        _proto.increaseBetMultiplier = function increaseBetMultiplier() {
          if (!this._slotMachineModel || !this._resourceManager) return false;
          var multiplierArray = [1, 2, 5, 10, 20, 40, 50, 100, 250];
          var currentMultiplier = this._slotMachineModel.selectedMultiplier;
          var currentIndex = multiplierArray.indexOf(currentMultiplier);
          if (currentIndex === -1) {
            // If the current multiplier is not in the array, do nothing.
            return false;
          }

          // If the current value is the max, do nothing.
          if (currentIndex >= multiplierArray.length - 1) {
            return false;
          }
          var nextMultiplier = multiplierArray[currentIndex + 1];

          // Calculate energy cost with the new multiplier
          var energyCostPerSpin = this._slotMachineModel.energyCostPerSpin;
          var newEnergyCost = energyCostPerSpin * nextMultiplier;
          var currentEnergy = this._resourceManager.getEnergy();

          // Check if player has enough energy for the new multiplier
          if (newEnergyCost > currentEnergy) {
            // Emit event to notify UI that increase was blocked due to insufficient energy
            this.emit('betMultiplierIncreaseBlocked', {
              requiredEnergy: newEnergyCost,
              availableEnergy: currentEnergy,
              blockedMultiplier: nextMultiplier
            });
            return false;
          }

          // Energy validation passed, apply the new multiplier
          this._slotMachineModel.selectedMultiplier = nextMultiplier;
          this.emit('betMultiplierChanged', this._slotMachineModel.selectedMultiplier);
          return true;
        }

        /**
         * Decrease bet multiplier to previous value in the array
         */;
        _proto.decreaseBetMultiplier = function decreaseBetMultiplier() {
          if (!this._slotMachineModel) return false;
          var multiplierArray = [1, 2, 5, 10, 20, 40, 50, 100, 250];
          var currentMultiplier = this._slotMachineModel.selectedMultiplier;
          var currentIndex = multiplierArray.indexOf(currentMultiplier);
          if (currentIndex === -1) {
            // If the current multiplier is not in the array, do nothing.
            return false;
          }

          // If the current value is not the min, decrement it.
          if (currentIndex > 0) {
            this._slotMachineModel.selectedMultiplier = multiplierArray[currentIndex - 1];
            this.emit('betMultiplierChanged', this._slotMachineModel.selectedMultiplier);
            return true;
          }
          return false;
        }

        /**
         * Change bet multiplier to next available level in ascending order
         * When maximum is reached, wrap around to minimum level
         */;
        _proto.changeBetMultiplier = function changeBetMultiplier() {
          if (!this._slotMachineModel || !this._resourceManager) return false;
          var multiplierArray = [1, 2, 5, 10, 20, 40, 50, 100, 250];
          var currentMultiplier = this._slotMachineModel.selectedMultiplier;
          var currentIndex = multiplierArray.indexOf(currentMultiplier);
          if (currentIndex === -1) {
            // If the current multiplier is not in the array, set to minimum
            this._slotMachineModel.selectedMultiplier = multiplierArray[0];
            this.emit('betMultiplierChanged', this._slotMachineModel.selectedMultiplier);
            return true;
          }

          // Calculate next multiplier index (wrap around to 0 if at maximum)
          var nextIndex = (currentIndex + 1) % multiplierArray.length;
          var nextMultiplier = multiplierArray[nextIndex];

          // Calculate energy cost with the new multiplier
          var energyCostPerSpin = this._slotMachineModel.energyCostPerSpin;
          var newEnergyCost = energyCostPerSpin * nextMultiplier;
          var currentEnergy = this._resourceManager.getEnergy();

          // Check if player has enough energy for the new multiplier
          if (newEnergyCost > currentEnergy) {
            nextMultiplier = multiplierArray[0];
          }

          // Energy validation passed, apply the new multiplier
          this._slotMachineModel.selectedMultiplier = nextMultiplier;
          this.emit('betMultiplierChanged', this._slotMachineModel.selectedMultiplier);
          return true;
        }

        /**
         * Claim event milestone
         */;
        _proto.claimEventMilestone = /*#__PURE__*/
        function () {
          var _claimEventMilestone = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var currentMilestone, claimedMilestone, reward;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(!this._mainEventModel || !this._gameService)) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 2:
                  currentMilestone = this._mainEventModel.getCurrentMilestone();
                  if (!(!currentMilestone || !this._mainEventModel.canClaimCurrentMilestone())) {
                    _context6.next = 5;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 5:
                  _context6.prev = 5;
                  _context6.next = 8;
                  return this._gameService.claimEventMilestone(currentMilestone.id);
                case 8:
                  // Process claim locally
                  claimedMilestone = this._mainEventModel.claimCurrentMilestone();
                  if (!(claimedMilestone && this._resourceManager)) {
                    _context6.next = 19;
                    break;
                  }
                  // Award milestone reward
                  reward = claimedMilestone.reward;
                  if (!(reward.type === 'gold')) {
                    _context6.next = 16;
                    break;
                  }
                  _context6.next = 14;
                  return this._resourceManager.addGold(reward.amount, 'event_milestone');
                case 14:
                  _context6.next = 19;
                  break;
                case 16:
                  if (!(reward.type === 'energy')) {
                    _context6.next = 19;
                    break;
                  }
                  _context6.next = 19;
                  return this._resourceManager.addEnergy(reward.amount, 'event_milestone');
                case 19:
                  return _context6.abrupt("return", true);
                case 22:
                  _context6.prev = 22;
                  _context6.t0 = _context6["catch"](5);
                  logError('Failed to claim milestone:', _context6.t0);
                  this.emit('milestoneClaimError', _context6.t0);
                  return _context6.abrupt("return", false);
                case 27:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[5, 22]]);
          }));
          function claimEventMilestone() {
            return _claimEventMilestone.apply(this, arguments);
          }
          return claimEventMilestone;
        }()
        /**
         * Navigate to city building scene
         */;

        _proto.navigateToCity = function navigateToCity() {
          this.emit('navigateToScene', 'City');
        }

        /**
         * Navigate to attack scene
         */;
        _proto.navigateToAttack = function navigateToAttack() {
          this.emit('navigateToScene', 'Attack');
        }

        /**
         * Navigate to raid scene
         */;
        _proto.navigateToRaid = function navigateToRaid() {
          this.emit('navigateToScene', 'Raid');
        }

        // Event Handlers

        /**
         * Handle resource changes
         */;
        _proto.onResourceChanged = function onResourceChanged(event) {
          this.emit('resourceUpdated', event);
        }

        /**
         * Handle insufficient resources
         */;
        _proto.onInsufficientResources = function onInsufficientResources(event) {
          this.emit('insufficientResources', event);
        }

        /**
         * Handle spin started
         */;
        _proto.onSpinStarted = function onSpinStarted(event) {
          this.emit('spinStarted', event);
        }

        /**
         * Handle spin completed
         */;
        _proto.onSpinCompleted = function onSpinCompleted(spinResult) {
          var _this$_slotMachineMod,
            _this2 = this;
          this.processSpinReward(spinResult);
          this.emit('spinCompleted', spinResult);

          // Check if auto-spin is pending and should be activated
          if ((_this$_slotMachineMod = this._slotMachineModel) != null && _this$_slotMachineMod.isAutoSpinPending) {
            // Check energy before activating pending auto-spin
            if (this._resourceManager && this._slotMachineModel.canAffordSpin(this._resourceManager.getEnergy())) {
              if (this._slotMachineModel.activatePendingAutoSpin()) {
                // Auto-spin was successfully activated, start the first spin
                var autoSpinDelay = this._animationConfig.getUIConfig().autoSpinDelay;
                setTimeout(function () {
                  return _this2.performSpin();
                }, autoSpinDelay);
              }
            } else {
              // Insufficient energy for pending auto-spin, clear it
              this._slotMachineModel.clearPendingAutoSpin();
            }
          }
          // Handle auto-spin continuation (if already active)
          else if (this.isAutoSpinning && this._slotMachineModel && this._resourceManager) {
            if (this._slotMachineModel.canContinueAutoSpin(this._resourceManager.getEnergy())) {
              // Add a delay before the next auto-spin, adjusted for speed multiplier
              var _autoSpinDelay = this._animationConfig.getUIConfig().autoSpinDelay;
              setTimeout(function () {
                return _this2.performSpin();
              }, _autoSpinDelay);
            } else {
              // Insufficient energy, stop auto-spin gracefully
              this._slotMachineModel.stopAutoSpinDueToInsufficientEnergy();
            }
          }
        }

        /**
         * Start auto-spin
         */;
        _proto.startAutoSpin = function startAutoSpin() {
          var _this$_slotMachineMod2;
          if (!this._slotMachineModel || !this._resourceManager) {
            return;
          }

          // If already auto-spinning, do nothing
          if ((_this$_slotMachineMod2 = this._slotMachineModel.autoSpinState) != null && _this$_slotMachineMod2.isActive) {
            return;
          }

          // Check if player has enough energy before starting auto-spin
          var energyCost = this._slotMachineModel.getTotalEnergyCost();
          if (!this._resourceManager.hasEnoughEnergy(energyCost)) {
            this._slotMachineModel.stopAutoSpinDueToInsufficientEnergy();
            return;
          }

          // If a manual spin is in progress, queue the auto-spin for later
          if (this._slotMachineModel.isSpinning) {
            this._slotMachineModel.queueAutoSpin();
            return;
          }

          // Start auto-spin immediately
          this._slotMachineModel.startAutoSpin();
          this.performSpin();
        }

        /**
         * Stop auto-spin
         */;
        _proto.stopAutoSpin = function stopAutoSpin() {
          if (this._slotMachineModel) {
            // Clear any pending auto-spin and stop active auto-spin
            this._slotMachineModel.clearPendingAutoSpin();
            this._slotMachineModel.stopAutoSpin();
          }
        }

        /**
         * Process spin reward
         */;
        _proto.processSpinReward = /*#__PURE__*/
        function () {
          var _processSpinReward = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(spinResult) {
            var reward;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(!this._resourceManager || !this._mainEventModel)) {
                    _context7.next = 2;
                    break;
                  }
                  return _context7.abrupt("return");
                case 2:
                  reward = spinResult.finalReward;
                  _context7.prev = 3;
                  _context7.t0 = reward.type;
                  _context7.next = _context7.t0 === SlotRewardType.GOLD ? 7 : _context7.t0 === SlotRewardType.ENERGY ? 10 : _context7.t0 === SlotRewardType.TOKEN ? 13 : _context7.t0 === SlotRewardType.ATTACK ? 15 : _context7.t0 === SlotRewardType.STEAL ? 17 : _context7.t0 === SlotRewardType.SHIELD ? 19 : 20;
                  break;
                case 7:
                  _context7.next = 9;
                  return this._resourceManager.addGold(reward.amount, 'spin_reward');
                case 9:
                  return _context7.abrupt("break", 20);
                case 10:
                  _context7.next = 12;
                  return this._resourceManager.addEnergy(reward.amount, 'spin_reward');
                case 12:
                  return _context7.abrupt("break", 20);
                case 13:
                  this._mainEventModel.addItems(reward.amount);
                  return _context7.abrupt("break", 20);
                case 15:
                  this.emit('attackRewardReceived');
                  return _context7.abrupt("break", 20);
                case 17:
                  this.emit('raidRewardReceived');
                  return _context7.abrupt("break", 20);
                case 19:
                  return _context7.abrupt("break", 20);
                case 20:
                  _context7.next = 25;
                  break;
                case 22:
                  _context7.prev = 22;
                  _context7.t1 = _context7["catch"](3);
                  logError('Failed to process spin reward:', _context7.t1);
                case 25:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[3, 22]]);
          }));
          function processSpinReward(_x2) {
            return _processSpinReward.apply(this, arguments);
          }
          return processSpinReward;
        }()
        /**
         * Handle event items added
         */;

        _proto.onEventItemsAdded = function onEventItemsAdded(event) {
          this.emit('eventItemsAdded', event);
        }

        /**
         * Handle milestone reached
         */;
        _proto.onMilestoneReached = function onMilestoneReached(event) {
          this.emit('milestoneReached', event);
        }

        /**
         * Handle milestone claimed
         */;
        _proto.onMilestoneClaimed = function onMilestoneClaimed(event) {
          this.emit('milestoneClaimed', event);
        }

        /**
         * Handle player level up
         */;
        _proto.onPlayerLevelUp = function onPlayerLevelUp(event) {
          this.emit('playerLevelUp', event);
        }

        /**
         * Handle current city changed
         */;
        _proto.onCurrentCityChanged = function onCurrentCityChanged(event) {
          this.emit('currentCityChanged', event);
        }

        /**
         * Process spin result from component (called by SlotMachineComponent when all reels complete)
         */;
        _proto.processSpinResultFromComponent = function processSpinResultFromComponent(spinResult) {
          if (this._slotMachineModel) {
            this._slotMachineModel.processSpinResult(spinResult);
          }
        }

        /**
         * Handle auto-spin state changes from the model
         */;
        _proto.onAutoSpinStateChanged = function onAutoSpinStateChanged(payload) {
          var reason = payload.reason;
          if (reason === 'STARTED') {
            var _this$_animationConfi;
            (_this$_animationConfi = this._animationConfig) == null || _this$_animationConfi.setProfile('autoSpin');
            this.emit('animationProfileChanged', 'autoSpin');
          } else if (reason === 'STOPPED_USER' || reason === 'STOPPED_NO_ENERGY') {
            var _this$_animationConfi2;
            (_this$_animationConfi2 = this._animationConfig) == null || _this$_animationConfi2.setProfile('normal');
            this.emit('animationProfileChanged', 'normal');
          }

          // Propagate the consolidated event to the view
          this.emit('autoSpinStateChanged', payload);
        }

        // Getters

        /**
         * Get current gold amount
         */;
        /**
         * Get time until next energy regeneration (in milliseconds)
         */
        _proto.getTimeUntilNextEnergyRegen = function getTimeUntilNextEnergyRegen() {
          return this._resourceManager ? this._resourceManager.getTimeUntilNextEnergyRegen() : 0;
        }

        /**
         * Get current bet multiplier
         */;
        _proto.getDisplayResultText = function getDisplayResultText(spinResult) {
          var text = StringUtils.formatNumberWithCommas(spinResult.finalReward.amount) + " " + spinResult.finalReward.type;
          if (spinResult.finalReward.type == SlotRewardType.ATTACK || spinResult.finalReward.type == SlotRewardType.STEAL) {
            text = ("" + spinResult.finalReward.type).toUpperCase();
          }
          return text;
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          // Remove event listeners
          if (this._resourceManager) {
            this._resourceManager.off('resourceChanged', this.onResourceChanged, this);
            this._resourceManager.off('insufficientResources', this.onInsufficientResources, this);
          }
          if (this._slotMachineModel) {
            this._slotMachineModel.off('spinStarted', this.onSpinStarted, this);
            this._slotMachineModel.off('spinCompleted', this.onSpinCompleted, this);
            this._slotMachineModel.off('autoSpinStateChanged', this.onAutoSpinStateChanged, this);
          }
          if (this._mainEventModel) {
            this._mainEventModel.off('itemsAdded', this.onEventItemsAdded, this);
            this._mainEventModel.off('milestoneReached', this.onMilestoneReached, this);
            this._mainEventModel.off('milestoneClaimed', this.onMilestoneClaimed, this);
          }
          if (this._playerModel) {
            this._playerModel.off('levelUp', this.onPlayerLevelUp, this);
            this._playerModel.off('currentCityChanged', this.onCurrentCityChanged, this);
          }

          // Clear references
          this._gameService = null;
          this._resourceManager = null;
          this._playerModel = null;
          this._slotMachineModel = null;
          this._mainEventModel = null;
          _BaseViewModel.prototype.destroy.call(this);
        };
        _createClass(MainViewModel, [{
          key: "currentGold",
          get: function get() {
            return this._resourceManager ? this._resourceManager.getGold() : 0;
          }

          /**
           * Get current energy amount
           */
        }, {
          key: "currentEnergy",
          get: function get() {
            return this._resourceManager ? this._resourceManager.getEnergy() : 0;
          }

          /**
           * Get maximum energy
           */
        }, {
          key: "maxEnergy",
          get: function get() {
            return this._resourceManager ? this._resourceManager.getMaxEnergy() : 50;
          }
        }, {
          key: "currentBetMultiplier",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.selectedMultiplier : 1;
          }

          /**
           * Get available bet multipliers
           */
        }, {
          key: "availableBetMultipliers",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.availableMultipliers : [1];
          }

          /**
           * Get slot machine symbols
           */
        }, {
          key: "symbols",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.symbols : [];
          }

          /**
           * Get spin energy cost
           */
        }, {
          key: "spinEnergyCost",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.getTotalEnergyCost() : 1;
          }

          /**
           * Check if spinning
           */
        }, {
          key: "isSpinning",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.isSpinning : false;
          }

          /**
           * Get last spin result
           */
        }, {
          key: "lastSpinResult",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.lastSpinResult : null;
          }

          /**
           * Check if auto-spinning
           */
        }, {
          key: "isAutoSpinning",
          get: function get() {
            var _this$_slotMachineMod3;
            return ((_this$_slotMachineMod3 = this._slotMachineModel) == null || (_this$_slotMachineMod3 = _this$_slotMachineMod3.autoSpinState) == null ? void 0 : _this$_slotMachineMod3.isActive) || false;
          }

          /**
           * Check if auto-spin is pending
           */
        }, {
          key: "isAutoSpinPending",
          get: function get() {
            var _this$_slotMachineMod4;
            return ((_this$_slotMachineMod4 = this._slotMachineModel) == null ? void 0 : _this$_slotMachineMod4.isAutoSpinPending) || false;
          }

          /**
           * Get auto-spin state
           */
        }, {
          key: "autoSpinState",
          get: function get() {
            return this._slotMachineModel ? this._slotMachineModel.autoSpinState : null;
          }

          /**
           * Get current event progress
           */
        }, {
          key: "eventProgress",
          get: function get() {
            return this._mainEventModel ? this._mainEventModel.getCurrentMilestoneProgress() : 0;
          }

          /**
           * Check if milestone can be claimed
           */
        }, {
          key: "canClaimMilestone",
          get: function get() {
            return this._mainEventModel ? this._mainEventModel.canClaimCurrentMilestone() : false;
          }

          /**
           * Get player level
           */
        }, {
          key: "playerLevel",
          get: function get() {
            return this._playerModel ? this._playerModel.level : 1;
          }
        }]);
        return MainViewModel;
      }(BaseViewModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseService.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseService, logInfo, logError, logWarn;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseService = module.BaseService;
    }, function (module) {
      logInfo = module.logInfo;
      logError = module.logError;
      logWarn = module.logWarn;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ebba7QrxxFKZr7VmwX12Q9d", "NetworkService", undefined);

      /**
       * Network request data structure
       */

      /**
       * Network response data structure
       */

      /**
       * SmartFox connection configuration
       */

      /**
       * Network Service - Handles SmartFox server communication
       */
      var NetworkService = exports('NetworkService', /*#__PURE__*/function (_BaseService) {
        _inheritsLoose(NetworkService, _BaseService);
        function NetworkService() {
          var _this;
          _this = _BaseService.call(this) || this;
          _this._sfs = null;
          _this._config = null;
          _this._pendingRequests = new Map();
          _this._requestIdCounter = 0;
          return _this;
        }

        /**
         * Initialize SmartFox service
         */
        var _proto = NetworkService.prototype;
        _proto.onInitialize = /*#__PURE__*/
        function () {
          var _onInitialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  logInfo('Initializing Network Service...');
                  // return;

                  // Initialize SmartFox
                  if (typeof SFS2X !== 'undefined') {
                    this._sfs = new SFS2X.SmartFox();
                    this.setupSmartFoxEvents();
                    logInfo('SmartFox initialized successfully');
                  } else {
                    logWarn('SmartFox library not found, running in offline mode');
                    // Don't throw error, just continue without SmartFox
                    // This allows the game to run in offline/demo mode
                  }

                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onInitialize() {
            return _onInitialize.apply(this, arguments);
          }
          return onInitialize;
        }()
        /**
         * Setup SmartFox event listeners
         */;

        _proto.setupSmartFoxEvents = function setupSmartFoxEvents() {
          if (!this._sfs) return;

          // Connection events
          this._sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection.bind(this));
          this._sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost.bind(this));

          // Login events
          this._sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin.bind(this));
          this._sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError.bind(this));
          this._sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout.bind(this));

          // Extension response events
          this._sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse.bind(this));

          // Error events
          this._sfs.addEventListener(SFS2X.SFSEvent.SOCKET_ERROR, this.onSocketError.bind(this));
        }

        /**
         * Connect to SmartFox server
         */;
        _proto.onConnect = /*#__PURE__*/
        function () {
          var _onConnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    if (!_this2._sfs) {
                      logWarn('SmartFox not available, skipping connection');
                      resolve(); // Resolve immediately in offline mode
                      return;
                    }
                    if (!_this2._config) {
                      logWarn('SmartFox config not set, skipping connection');
                      resolve(); // Resolve instead of reject for offline mode
                      return;
                    }
                    logInfo("Connecting to SmartFox server: " + _this2._config.host + ":" + _this2._config.port);

                    // Set connection timeout
                    var connectionTimeout = setTimeout(function () {
                      _this2._sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, onConnected);
                      _this2._sfs.removeEventListener(SFS2X.SFSEvent.SOCKET_ERROR, onConnectionError);
                      logWarn('Connection timeout, continuing in offline mode');
                      resolve(); // Resolve instead of reject to continue in offline mode
                    }, 5000); // 5 second timeout

                    // Set up one-time connection handlers
                    var onConnected = function onConnected() {
                      clearTimeout(connectionTimeout);
                      _this2._sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, onConnected);
                      _this2._sfs.removeEventListener(SFS2X.SFSEvent.SOCKET_ERROR, onConnectionError);
                      logInfo('Successfully connected to SmartFox server');
                      resolve();
                    };
                    var onConnectionError = function onConnectionError(event) {
                      clearTimeout(connectionTimeout);
                      _this2._sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, onConnected);
                      _this2._sfs.removeEventListener(SFS2X.SFSEvent.SOCKET_ERROR, onConnectionError);
                      logWarn("Connection failed: " + event.data + ", continuing in offline mode");
                      resolve(); // Resolve instead of reject to continue in offline mode
                    };

                    _this2._sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnected);
                    _this2._sfs.addEventListener(SFS2X.SFSEvent.SOCKET_ERROR, onConnectionError);

                    // Connect to server
                    try {
                      _this2._sfs.connect(_this2._config.host, _this2._config.port);
                    } catch (error) {
                      clearTimeout(connectionTimeout);
                      logWarn("Connection error: " + error + ", continuing in offline mode");
                      resolve(); // Resolve instead of reject to continue in offline mode
                    }
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onConnect() {
            return _onConnect.apply(this, arguments);
          }
          return onConnect;
        }()
        /**
         * Disconnect from SmartFox server
         */;

        _proto.onDisconnect = /*#__PURE__*/
        function () {
          var _onDisconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve) {
                    if (_this3._sfs && _this3._sfs.isConnected) {
                      var onDisconnected = function onDisconnected() {
                        _this3._sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onDisconnected);
                        resolve();
                      };
                      _this3._sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onDisconnected);
                      _this3._sfs.disconnect();
                    } else {
                      resolve();
                    }
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onDisconnect() {
            return _onDisconnect.apply(this, arguments);
          }
          return onDisconnect;
        }()
        /**
         * Set connection configuration
         */;

        _proto.setConfig = function setConfig(config) {
          this._config = config;
        }

        /**
         * Login to SmartFox zone
         */;
        _proto.login = /*#__PURE__*/
        function () {
          var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(username, password, zone) {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (password === void 0) {
                    password = '';
                  }
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    var _this4$_config;
                    if (!_this4._sfs) {
                      logWarn('SmartFox not available, simulating login success');
                      // Simulate successful login in offline mode
                      resolve({
                        user: {
                          name: username,
                          id: Math.floor(Math.random() * 10000),
                          isGuest: true
                        },
                        zone: zone || 'CoinMaster'
                      });
                      return;
                    }
                    if (!_this4._sfs.isConnected) {
                      logWarn('Not connected to server, simulating login success');
                      // Simulate successful login in offline mode instead of rejecting
                      resolve({
                        user: {
                          name: username,
                          id: Math.floor(Math.random() * 10000),
                          isGuest: true
                        },
                        zone: zone || 'CoinMaster'
                      });
                      return;
                    }
                    var targetZone = zone || ((_this4$_config = _this4._config) == null ? void 0 : _this4$_config.zone) || 'BasicExamples';

                    // Set login timeout
                    var loginTimeout = setTimeout(function () {
                      _this4._sfs.removeEventListener(SFS2X.SFSEvent.LOGIN, onLoginSuccess);
                      _this4._sfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginFailed);
                      logWarn('Login timeout, simulating login success');
                      resolve({
                        user: {
                          name: username,
                          id: Math.floor(Math.random() * 10000),
                          isGuest: true
                        },
                        zone: targetZone
                      });
                    }, 5000); // 5 second timeout

                    var onLoginSuccess = function onLoginSuccess(event) {
                      clearTimeout(loginTimeout);
                      _this4._sfs.removeEventListener(SFS2X.SFSEvent.LOGIN, onLoginSuccess);
                      _this4._sfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginFailed);
                      resolve(event.data);
                    };
                    var onLoginFailed = function onLoginFailed(event) {
                      clearTimeout(loginTimeout);
                      _this4._sfs.removeEventListener(SFS2X.SFSEvent.LOGIN, onLoginSuccess);
                      _this4._sfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginFailed);
                      logWarn("Login failed: " + event.data.errorMessage + ", simulating login success");
                      // Simulate successful login instead of rejecting
                      resolve({
                        user: {
                          name: username,
                          id: Math.floor(Math.random() * 10000),
                          isGuest: true
                        },
                        zone: targetZone
                      });
                    };
                    _this4._sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLoginSuccess);
                    _this4._sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginFailed);
                    try {
                      _this4._sfs.send(new SFS2X.LoginRequest(username, password, null, targetZone));
                    } catch (error) {
                      clearTimeout(loginTimeout);
                      logWarn("Login error: " + error + ", simulating login success");
                      resolve({
                        user: {
                          name: username,
                          id: Math.floor(Math.random() * 10000),
                          isGuest: true
                        },
                        zone: targetZone
                      });
                    }
                  }));
                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function login(_x, _x2, _x3) {
            return _login.apply(this, arguments);
          }
          return login;
        }()
        /**
         * Send extension request to server
         */;

        _proto.sendRequest = /*#__PURE__*/
        function () {
          var _sendRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request) {
            var _this5 = this;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", new Promise(function (_resolve, _reject) {
                    if (!_this5._sfs || !_this5._sfs.isConnected) {
                      _reject(new Error('Not connected to server'));
                      return;
                    }
                    var requestId = _this5.generateRequestId();
                    var timeout = request.timeout || 10000; // 10 seconds default timeout

                    // Store pending request
                    var timeoutHandle = setTimeout(function () {
                      _this5._pendingRequests["delete"](requestId);
                      _reject(new Error("Request timeout: " + request.command));
                    }, timeout);
                    _this5._pendingRequests.set(requestId, {
                      resolve: function resolve(response) {
                        clearTimeout(timeoutHandle);
                        _resolve(response);
                      },
                      reject: function reject(error) {
                        clearTimeout(timeoutHandle);
                        _reject(error);
                      },
                      timeout: timeoutHandle
                    });

                    // Prepare request data
                    var requestData = new SFS2X.SFSObject();
                    requestData.putUtfString('requestId', requestId);
                    if (request.data) {
                      for (var key in request.data) {
                        _this5.putDataToSFSObject(requestData, key, request.data[key]);
                      }
                    }

                    // Send extension request
                    var extRequest = new SFS2X.ExtensionRequest(request.command, requestData);
                    _this5._sfs.send(extRequest);
                  }));
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function sendRequest(_x4) {
            return _sendRequest.apply(this, arguments);
          }
          return sendRequest;
        }()
        /**
         * Generate unique request ID
         */;

        _proto.generateRequestId = function generateRequestId() {
          return "req_" + ++this._requestIdCounter + "_" + Date.now();
        }

        /**
         * Put data to SFSObject with type detection
         */;
        _proto.putDataToSFSObject = function putDataToSFSObject(sfsObj, key, value) {
          if (value === null || value === undefined) {
            return;
          }
          switch (typeof value) {
            case 'string':
              sfsObj.putUtfString(key, value);
              break;
            case 'number':
              if (Number.isInteger(value)) {
                sfsObj.putInt(key, value);
              } else {
                sfsObj.putDouble(key, value);
              }
              break;
            case 'boolean':
              sfsObj.putBool(key, value);
              break;
            case 'object':
              if (Array.isArray(value)) {
                var sfsArray = new SFS2X.SFSArray();
                for (var _iterator = _createForOfIteratorHelperLoose(value), _step; !(_step = _iterator()).done;) {
                  var item = _step.value;
                  this.addDataToSFSArray(sfsArray, item);
                }
                sfsObj.putSFSArray(key, sfsArray);
              } else {
                var nestedObj = new SFS2X.SFSObject();
                for (var nestedKey in value) {
                  this.putDataToSFSObject(nestedObj, nestedKey, value[nestedKey]);
                }
                sfsObj.putSFSObject(key, nestedObj);
              }
              break;
          }
        }

        /**
         * Add data to SFSArray with type detection
         */;
        _proto.addDataToSFSArray = function addDataToSFSArray(sfsArray, value) {
          if (value === null || value === undefined) {
            return;
          }
          switch (typeof value) {
            case 'string':
              sfsArray.addUtfString(value);
              break;
            case 'number':
              if (Number.isInteger(value)) {
                sfsArray.addInt(value);
              } else {
                sfsArray.addDouble(value);
              }
              break;
            case 'boolean':
              sfsArray.addBool(value);
              break;
            case 'object':
              if (Array.isArray(value)) {
                var nestedArray = new SFS2X.SFSArray();
                for (var _iterator2 = _createForOfIteratorHelperLoose(value), _step2; !(_step2 = _iterator2()).done;) {
                  var item = _step2.value;
                  this.addDataToSFSArray(nestedArray, item);
                }
                sfsArray.addSFSArray(nestedArray);
              } else {
                var nestedObj = new SFS2X.SFSObject();
                for (var key in value) {
                  this.putDataToSFSObject(nestedObj, key, value[key]);
                }
                sfsArray.addSFSObject(nestedObj);
              }
              break;
          }
        }

        /**
         * Convert SFSObject to plain JavaScript object
         */;
        _proto.sfsObjectToPlainObject = function sfsObjectToPlainObject(sfsObj) {
          if (!sfsObj) return null;
          var result = {};
          var keys = sfsObj.getKeys();
          for (var _iterator3 = _createForOfIteratorHelperLoose(keys), _step3; !(_step3 = _iterator3()).done;) {
            var key = _step3.value;
            var value = sfsObj.get(key);
            result[key] = this.convertSFSValue(value);
          }
          return result;
        }

        /**
         * Convert SFS value to JavaScript value
         */;
        _proto.convertSFSValue = function convertSFSValue(value) {
          if (!value) return null;
          if (value.getTypeId) {
            var typeId = value.getTypeId();
            switch (typeId) {
              case SFS2X.SFSDataType.SFS_OBJECT:
                return this.sfsObjectToPlainObject(value);
              case SFS2X.SFSDataType.SFS_ARRAY:
                return this.sfsArrayToPlainArray(value);
              default:
                return value;
            }
          }
          return value;
        }

        /**
         * Convert SFSArray to plain JavaScript array
         */;
        _proto.sfsArrayToPlainArray = function sfsArrayToPlainArray(sfsArray) {
          if (!sfsArray) return [];
          var result = [];
          var size = sfsArray.size();
          for (var i = 0; i < size; i++) {
            var value = sfsArray.get(i);
            result.push(this.convertSFSValue(value));
          }
          return result;
        }

        // SmartFox Event Handlers
        ;

        _proto.onConnection = function onConnection(event) {
          logInfo('Connected to SmartFox server');
          this.emit('connected');
        };
        _proto.onConnectionLost = function onConnectionLost(event) {
          logInfo("Connection lost: " + event.data);
          this.emit('connectionLost', event.data);
        };
        _proto.onLogin = function onLogin(event) {
          logInfo("Logged in successfully: " + event.data);
          this.emit('loggedIn', event.data);
        };
        _proto.onLoginError = function onLoginError(event) {
          logError('Login error:', event.data);
          this.emit('loginError', event.data);
        };
        _proto.onLogout = function onLogout(event) {
          logInfo('Logged out');
          this.emit('loggedOut');
        };
        _proto.onExtensionResponse = function onExtensionResponse(event) {
          var command = event.data.cmd;
          var params = event.data.params;
          var requestId = params ? params.getUtfString('requestId') : null;
          var success = params ? params.getBool('success') : false;
          var error = params ? params.getUtfString('error') : null;
          var errorCode = params ? params.getInt('errorCode') : 0;
          var response = {
            success: success,
            command: command,
            data: params ? this.sfsObjectToPlainObject(params) : null,
            error: error,
            errorCode: errorCode
          };

          // Handle pending request
          if (requestId && this._pendingRequests.has(requestId)) {
            var pendingRequest = this._pendingRequests.get(requestId);
            this._pendingRequests["delete"](requestId);
            if (success) {
              pendingRequest.resolve(response);
            } else {
              pendingRequest.reject(new Error(error || 'Unknown server error'));
            }
          }

          // Emit general response event
          this.emit('extensionResponse', response);
        };
        _proto.onSocketError = function onSocketError(event) {
          logError('Socket error:', event.data);
          this.emit('socketError', event.data);
        }

        /**
         * Check if connected to server
         */;
        /**
         * Get current user
         */
        _proto.getCurrentUser = function getCurrentUser() {
          return this._sfs ? this._sfs.mySelf : null;
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          // Clear pending requests
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._pendingRequests), _step4; !(_step4 = _iterator4()).done;) {
            var _step4$value = _step4.value,
              requestId = _step4$value[0],
              request = _step4$value[1];
            clearTimeout(request.timeout);
            request.reject(new Error('Service destroyed'));
          }
          this._pendingRequests.clear();

          // Disconnect and cleanup SmartFox
          if (this._sfs) {
            if (this._sfs.isConnected) {
              this._sfs.disconnect();
            }
            this._sfs = null;
          }
          _BaseService.prototype.destroy.call(this);
        };
        _createClass(NetworkService, [{
          key: "isConnectedToServer",
          get: function get() {
            return this._sfs && this._sfs.isConnected;
          }

          /**
           * Check if logged in
           */
        }, {
          key: "isLoggedIn",
          get: function get() {
            return this._sfs && this._sfs.mySelf !== null;
          }
        }]);
        return NetworkService;
      }(BaseService));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseModel.ts', './ResourceModel.ts', './CityModel.ts', './MainEventModel.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, BaseModel, ResourceModel, CityModel, MainEventModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseModel = module.BaseModel;
    }, function (module) {
      ResourceModel = module.ResourceModel;
    }, function (module) {
      CityModel = module.CityModel;
    }, function (module) {
      MainEventModel = module.MainEventModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b07cbNahI5JBIJTWLWeGFgE", "PlayerModel", undefined);

      /**
       * Player data structure
       */

      /**
       * Player Model - Main player data container
       */
      var PlayerModel = exports('PlayerModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(PlayerModel, _BaseModel);
        function PlayerModel() {
          var _this;
          _this = _BaseModel.call(this) || this;
          _this._resourceModel = void 0;
          _this._currentCity = null;
          _this._cities = new Map();
          _this._mainEventModel = void 0;
          _this._resourceModel = new ResourceModel();
          _this._mainEventModel = new MainEventModel();
          _this.initializeDefaults();
          _this.setupEventListeners();
          return _this;
        }

        /**
         * Initialize default values
         */
        var _proto = PlayerModel.prototype;
        _proto.initializeDefaults = function initializeDefaults() {
          this.setData('id', '');
          this.setData('name', '');
          this.setData('level', 1);
          this.setData('experience', 0);
          this.setData('currentCityId', '');
          this.setData('lastLoginTime', Date.now());
          this.setData('createdTime', Date.now());
        }

        /**
         * Setup event listeners for sub-models
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          var _this2 = this;
          // Resource model events
          this._resourceModel.on('dataChanged', function (event) {
            _this2.emit('resourceChanged', event);
          });

          // Main event model events
          this._mainEventModel.on('itemsAdded', function (event) {
            _this2.emit('eventItemsAdded', event);
          });
          this._mainEventModel.on('milestoneClaimed', function (event) {
            _this2.emit('eventMilestoneClaimed', event);
          });
          this._mainEventModel.on('milestoneReached', function (event) {
            _this2.emit('eventMilestoneReached', event);
          });
        }

        /**
         * Get player ID
         */;
        /**
         * Set current city
         */
        _proto.setCurrentCity = function setCurrentCity(cityId) {
          var city = this._cities.get(cityId);
          if (city) {
            this._currentCity = city;
            this.setData('currentCityId', cityId);
            this.emit('currentCityChanged', {
              cityId: cityId,
              city: city
            });
            return true;
          }
          return false;
        }

        /**
         * Get all cities
         */;
        _proto.getCities = function getCities() {
          return Array.from(this._cities.values());
        }

        /**
         * Get city by ID
         */;
        _proto.getCity = function getCity(cityId) {
          return this._cities.get(cityId) || null;
        }

        /**
         * Add a new city
         */;
        _proto.addCity = function addCity(city) {
          var _this3 = this;
          this._cities.set(city.id, city);

          // Set up city event listeners
          city.on('cityCompleted', function (event) {
            _this3.onCityCompleted(event);
          });
          city.on('buildingUpgraded', function (event) {
            _this3.emit('buildingUpgraded', event);
          });

          // If this is the first city, set it as current
          if (this._cities.size === 1) {
            this.setCurrentCity(city.id);
          }
          this.emit('cityAdded', {
            cityId: city.id,
            city: city
          });
        }

        /**
         * Handle city completion
         */;
        _proto.onCityCompleted = function onCityCompleted(event) {
          var cityId = event.cityId,
            reward = event.reward;

          // Award completion reward
          this._resourceModel.addGold(reward);

          // Create next city
          var completedCity = this._cities.get(cityId);
          if (completedCity) {
            var nextCityLevel = completedCity.level + 1;
            var nextCity = new CityModel(nextCityLevel);
            this.addCity(nextCity);
            this.setCurrentCity(nextCity.id);
          }
          this.emit('cityCompleted', event);
        }

        /**
         * Get main event model
         */;
        /**
         * Update last login time
         */
        _proto.updateLastLoginTime = function updateLastLoginTime() {
          this.setData('lastLoginTime', Date.now());
        }

        /**
         * Get account creation time
         */;
        /**
         * Add experience points
         */
        _proto.addExperience = function addExperience(amount) {
          if (amount > 0) {
            this.experience += amount;
            this.checkLevelUp();
          }
        }

        /**
         * Check if player should level up
         */;
        _proto.checkLevelUp = function checkLevelUp() {
          var requiredExp = this.getRequiredExperienceForLevel(this.level + 1);
          if (this.experience >= requiredExp) {
            this.level += 1;
            this.emit('levelUp', {
              newLevel: this.level,
              experience: this.experience
            });
          }
        }

        /**
         * Get required experience for a specific level
         */;
        _proto.getRequiredExperienceForLevel = function getRequiredExperienceForLevel(level) {
          // Simple exponential formula: level^2 * 100
          return Math.pow(level, 2) * 100;
        }

        /**
         * Get progress to next level (0-1)
         */;
        _proto.getLevelProgress = function getLevelProgress() {
          var currentLevelExp = this.getRequiredExperienceForLevel(this.level);
          var nextLevelExp = this.getRequiredExperienceForLevel(this.level + 1);
          var expInCurrentLevel = this.experience - currentLevelExp;
          var expNeededForNextLevel = nextLevelExp - currentLevelExp;
          return Math.max(0, Math.min(1, expInCurrentLevel / expNeededForNextLevel));
        }

        /**
         * Initialize player with server data
         */;
        _proto.initializePlayerData = function initializePlayerData(data) {
          // Set basic player data
          this.id = data.id || '';
          this.name = data.name || '';
          this.level = data.level || 1;
          this.experience = data.experience || 0;
          this.setData('lastLoginTime', data.lastLoginTime || Date.now());
          this.setData('createdTime', data.createdTime || Date.now());

          // Initialize resources
          if (data.resources) {
            this._resourceModel.fromJSON(data.resources);
          }

          // Initialize cities
          this._cities.clear();
          if (data.cities && data.cities.length > 0) {
            for (var _iterator = _createForOfIteratorHelperLoose(data.cities), _step; !(_step = _iterator()).done;) {
              var cityData = _step.value;
              var city = new CityModel(cityData.level);
              city.fromJSON(cityData);
              this.addCity(city);
            }
          } else {
            // Create first city if no cities exist
            var firstCity = new CityModel(1);
            this.addCity(firstCity);
          }

          // Set current city
          if (data.currentCityId) {
            this.setCurrentCity(data.currentCityId);
          }

          // Initialize main event
          if (data.mainEvent) {
            this._mainEventModel.fromJSON(data.mainEvent);
          }
          this.emit('playerDataInitialized', data);
        }

        /**
         * Validate model data
         */;
        _proto.validate = function validate() {
          var id = this.id;
          var name = this.name;
          var level = this.level;
          var experience = this.experience;

          // Basic validation
          if (!id || !name || level < 1 || experience < 0) {
            return false;
          }

          // Validate sub-models
          if (!this._resourceModel.validate()) {
            return false;
          }
          if (!this._mainEventModel.validate()) {
            return false;
          }

          // Validate cities
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._cities.values()), _step2; !(_step2 = _iterator2()).done;) {
            var city = _step2.value;
            if (!city.validate()) {
              return false;
            }
          }
          return true;
        }

        /**
         * Serialize to JSON
         */;
        _proto.toJSON = function toJSON() {
          var cities = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._cities.values()), _step3; !(_step3 = _iterator3()).done;) {
            var city = _step3.value;
            cities.push(city.toJSON());
          }
          return {
            id: this.id,
            name: this.name,
            level: this.level,
            experience: this.experience,
            resources: this._resourceModel.toJSON(),
            currentCityId: this.currentCityId,
            cities: cities,
            mainEvent: this._mainEventModel.toJSON(),
            lastLoginTime: this.lastLoginTime,
            createdTime: this.createdTime
          };
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(data) {
          this.initializePlayerData(data);
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          if (this._resourceModel) {
            this._resourceModel.destroy();
          }
          if (this._mainEventModel) {
            this._mainEventModel.reset();
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._cities.values()), _step4; !(_step4 = _iterator4()).done;) {
            var city = _step4.value;
            city.destroy();
          }
          this._cities.clear();
          this._currentCity = null;
          _BaseModel.prototype.reset.call(this);
        };
        _createClass(PlayerModel, [{
          key: "id",
          get: function get() {
            return this.getData('id') || '';
          }

          /**
           * Set player ID
           */,
          set: function set(value) {
            this.setData('id', value);
          }

          /**
           * Get player name
           */
        }, {
          key: "name",
          get: function get() {
            return this.getData('name') || '';
          }

          /**
           * Set player name
           */,
          set: function set(value) {
            this.setData('name', value);
          }

          /**
           * Get player level
           */
        }, {
          key: "level",
          get: function get() {
            return this.getData('level') || 1;
          }

          /**
           * Set player level
           */,
          set: function set(value) {
            this.setData('level', Math.max(1, value));
          }

          /**
           * Get player experience
           */
        }, {
          key: "experience",
          get: function get() {
            return this.getData('experience') || 0;
          }

          /**
           * Set player experience
           */,
          set: function set(value) {
            this.setData('experience', Math.max(0, value));
          }

          /**
           * Get resource model
           */
        }, {
          key: "resources",
          get: function get() {
            return this._resourceModel;
          }

          /**
           * Get current city ID
           */
        }, {
          key: "currentCityId",
          get: function get() {
            return this.getData('currentCityId') || '';
          }

          /**
           * Get current city
           */
        }, {
          key: "currentCity",
          get: function get() {
            return this._currentCity;
          }
        }, {
          key: "mainEvent",
          get: function get() {
            return this._mainEventModel;
          }

          /**
           * Get last login time
           */
        }, {
          key: "lastLoginTime",
          get: function get() {
            return this.getData('lastLoginTime') || Date.now();
          }
        }, {
          key: "createdTime",
          get: function get() {
            return this.getData('createdTime') || Date.now();
          }
        }]);
        return PlayerModel;
      }(BaseModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PreviewDragonBone.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, dragonBones, Node, EditBox, log, resources, Component, instantiate, Label, v3, UITransform, Button;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      dragonBones = module.dragonBones;
      Node = module.Node;
      EditBox = module.EditBox;
      log = module.log;
      resources = module.resources;
      Component = module.Component;
      instantiate = module.instantiate;
      Label = module.Label;
      v3 = module.v3;
      UITransform = module.UITransform;
      Button = module.Button;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "06e691DAuhIs7yTLNfN0A+f", "PreviewDragonBone", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PreviewDragonBone = exports('PreviewDragonBone', (_dec = ccclass('PreviewDragonBone'), _dec2 = property(dragonBones.ArmatureDisplay), _dec3 = property(Node), _dec4 = property(EditBox), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PreviewDragonBone, _Component);
        function PreviewDragonBone() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "armatureDisplay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "armatureNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inputAnim", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonsContainer", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "templateBtn", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PreviewDragonBone.prototype;
        _proto.start = function start() {
          this.armatureDisplay.playAnimation('idle', 0);
          this.armatureNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.armatureNode.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.armatureNode.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.armatureNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this.listAllAnimButton();
        };
        _proto.onTouchStart = function onTouchStart() {
          log('onTouchStart');
        };
        _proto.onTouchMove = function onTouchMove(event) {
          var delta = event.getUIDelta();
          this.armatureNode.x += delta.x;
          this.armatureNode.y += delta.y;
        };
        _proto.onTouchEnd = function onTouchEnd() {
          log('onTouchEnd');
        };
        _proto.listAllAnimButton = function listAllAnimButton() {
          var _this2 = this;
          var animNames = this.armatureDisplay.getAnimationNames(this.armatureDisplay.armatureName);
          var templateBtn = this.templateBtn;
          log("templateBtn", templateBtn);
          var _loop = function _loop() {
            var btn = instantiate(templateBtn);
            btn.active = true;
            btn.name = animNames[i];
            btn.getChildByName('Label').getComponent(Label).string = animNames[i];
            _this2.buttonsContainer.addChild(btn);
            btn.position = v3(templateBtn.x + i * (templateBtn.getComponent(UITransform).width + 10), 0, 0);
            btn.on(Button.EventType.CLICK, function () {
              _this2.armatureDisplay.playAnimation(btn.name, -1);
            }, _this2);
          };
          for (var i = 0; i < animNames.length; i++) {
            _loop();
          }
        };
        _proto.onClickLoad = function onClickLoad() {
          var _this3 = this;
          var texFile = "fish/Fish" + this.inputAnim.string + "_tex";
          resources.load(texFile, dragonBones.DragonBonesAtlasAsset, function (err, atlasAsset) {
            if (err) {
              log("load error", err);
              return;
            }
            var jsonFile = "fish/Fish" + _this3.inputAnim.string + "_ske";
            resources.load(jsonFile, dragonBones.DragonBonesAsset, function (err, asset) {
              if (err) {
                log("load error", err);
                return;
              }
              _this3.armatureDisplay.dragonAsset = asset;
              _this3.armatureDisplay.dragonAtlasAsset = atlasAsset;
              _this3.listAllAnimButton();
            });
          });
        };
        return PreviewDragonBone;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "armatureDisplay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "armatureNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inputAnim", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonsContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "templateBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RaidView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './RaidViewModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Sprite, Button, Color, tween, v3, director, BaseView, RaidViewModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      Button = module.Button;
      Color = module.Color;
      tween = module.tween;
      v3 = module.v3;
      director = module.director;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      RaidViewModel = module.RaidViewModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;
      cclegacy._RF.push({}, "cd871t1u4pK8JkaC6hobPDL", "RaidView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Raid View - UI for raid scene
       */
      var RaidView = exports('RaidView', (_dec = ccclass('RaidView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property([Node]), _dec9 = property([Sprite]), _dec10 = property([Label]), _dec11 = property([Label]), _dec12 = property([Button]), _dec13 = property([Node]), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Button), _dec23 = property(Node), _dec24 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(RaidView, _BaseView);
        function RaidView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          // Header UI
          _initializerDefineProperty(_this, "goldLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "raidsRemainingLabel", _descriptor2, _assertThisInitialized(_this));
          // Target Info UI
          _initializerDefineProperty(_this, "targetInfoContainer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPlayerNameLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPlayerLevelLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetCityNameLabel", _descriptor6, _assertThisInitialized(_this));
          // Chests UI
          _initializerDefineProperty(_this, "chestNodes", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chestSprites", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chestTypeLabels", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardLabels", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "raidButtons", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openedOverlays", _descriptor12, _assertThisInitialized(_this));
          // Action Buttons
          _initializerDefineProperty(_this, "newTargetButton", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backButton", _descriptor14, _assertThisInitialized(_this));
          // Loading UI
          _initializerDefineProperty(_this, "loadingContainer", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingLabel", _descriptor16, _assertThisInitialized(_this));
          // Result UI
          _initializerDefineProperty(_this, "resultContainer", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultTitleLabel", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultMessageLabel", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultRewardLabel", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultCloseButton", _descriptor21, _assertThisInitialized(_this));
          // Notification UI
          _initializerDefineProperty(_this, "notificationContainer", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notificationLabel", _descriptor23, _assertThisInitialized(_this));
          _this._viewModel = null;
          _this._currentTarget = null;
          return _this;
        }
        var _proto = RaidView.prototype;
        /**
         * Setup UI components
         */
        _proto.setupUI = function setupUI() {
          // Initialize UI state
          this.updateHeaderDisplay();
          this.hideTargetInfo();
          this.hideAllChests();
          this.hideResultUI();
          this.hideNotification();
          this.showLoading('Loading target...');
        }

        /**
         * Bind UI events
         */;
        _proto.bindEvents = function bindEvents() {
          var _this2 = this;
          // Action buttons
          if (this.newTargetButton) {
            this.newTargetButton.node.on(Button.EventType.CLICK, this.onNewTargetClicked, this);
          }
          if (this.backButton) {
            this.backButton.node.on(Button.EventType.CLICK, this.onBackClicked, this);
          }

          // Raid buttons
          var _loop = function _loop(i) {
            var button = _this2.raidButtons[i];
            if (button) {
              button.node.on(Button.EventType.CLICK, function () {
                return _this2.onRaidClicked(i);
              }, _this2);
            }
          };
          for (var i = 0; i < this.raidButtons.length; i++) {
            _loop(i);
          }

          // Result close button
          if (this.resultCloseButton) {
            this.resultCloseButton.node.on(Button.EventType.CLICK, this.onResultCloseClicked, this);
          }
        }

        /**
         * Update UI based on data changes
         */;
        _proto.updateUI = function updateUI(key, value, oldValue) {
          // Handle ViewModel data changes if needed
        }

        /**
         * Refresh entire UI
         */;
        _proto.refreshUI = function refreshUI() {
          this.updateHeaderDisplay();
          this.updateTargetDisplay();
          this.updateChestsDisplay();
        }

        /**
         * Set ViewModel and setup event listeners
         */;
        _proto.setViewModel = function setViewModel(viewModel) {
          _BaseView.prototype.setViewModel.call(this, viewModel);
          this._viewModel = viewModel;
          if (this._viewModel) {
            this.setupViewModelEvents();
          }
        }

        /**
         * Setup ViewModel event listeners
         */;
        _proto.setupViewModelEvents = function setupViewModelEvents() {
          if (!this._viewModel) return;
          this._viewModel.on('loadingTarget', this.onLoadingTarget, this);
          this._viewModel.on('targetLoaded', this.onTargetLoaded, this);
          this._viewModel.on('targetLoadError', this.onTargetLoadError, this);
          this._viewModel.on('resourceUpdated', this.onResourceUpdated, this);
          this._viewModel.on('raidStarted', this.onRaidStarted, this);
          this._viewModel.on('raidCompleted', this.onRaidCompleted, this);
          this._viewModel.on('raidError', this.onRaidError, this);
          this._viewModel.on('chestAlreadyOpened', this.onChestAlreadyOpened, this);
          this._viewModel.on('noRaidsRemaining', this.onNoRaidsRemaining, this);
          this._viewModel.on('navigateToScene', this.onNavigateToScene, this);
        }

        /**
         * Update header display
         */;
        _proto.updateHeaderDisplay = function updateHeaderDisplay() {
          if (!this._viewModel) return;

          // Update gold display
          if (this.goldLabel) {
            this.goldLabel.string = this.formatNumber(this._viewModel.currentGold);
          }

          // Update raids remaining
          if (this.raidsRemainingLabel) {
            this.raidsRemainingLabel.string = "Raids: " + this._viewModel.raidsRemaining;
          }
        }

        /**
         * Update target display
         */;
        _proto.updateTargetDisplay = function updateTargetDisplay() {
          if (!this._viewModel || !this._currentTarget) {
            this.hideTargetInfo();
            return;
          }
          this.showTargetInfo();
          if (this.targetPlayerNameLabel) {
            this.targetPlayerNameLabel.string = this._currentTarget.playerName;
          }
          if (this.targetPlayerLevelLabel) {
            this.targetPlayerLevelLabel.string = "Level " + this._currentTarget.playerLevel;
          }
          if (this.targetCityNameLabel) {
            this.targetCityNameLabel.string = this._currentTarget.cityName;
          }
        }

        /**
         * Update chests display
         */;
        _proto.updateChestsDisplay = function updateChestsDisplay() {
          if (!this._currentTarget) {
            this.hideAllChests();
            return;
          }
          var chests = this._currentTarget.chests;
          for (var i = 0; i < chests.length && i < this.chestNodes.length; i++) {
            var chest = chests[i];
            this.updateChestUI(i, chest);
          }

          // Hide unused chest slots
          for (var _i = chests.length; _i < this.chestNodes.length; _i++) {
            if (this.chestNodes[_i]) {
              this.chestNodes[_i].active = false;
            }
          }
        }

        /**
         * Update individual chest UI
         */;
        _proto.updateChestUI = function updateChestUI(index, chest) {
          // Show chest node
          if (this.chestNodes[index]) {
            this.chestNodes[index].active = true;
          }

          // Update chest type label
          if (this.chestTypeLabels[index]) {
            this.chestTypeLabels[index].string = this.getChestDisplayName(chest.chestType);
          }

          // Update reward label
          if (this.rewardLabels[index]) {
            this.rewardLabels[index].string = this.formatNumber(chest.potentialReward) + " Gold";
          }

          // Update raid button
          if (this.raidButtons[index]) {
            var _this$_viewModel, _this$_viewModel2;
            this.raidButtons[index].interactable = !chest.isOpened && ((_this$_viewModel = this._viewModel) == null ? void 0 : _this$_viewModel.hasRaidsRemaining) && !((_this$_viewModel2 = this._viewModel) != null && _this$_viewModel2.isRaiding);
          }

          // Update opened overlay
          if (this.openedOverlays[index]) {
            this.openedOverlays[index].active = chest.isOpened;
          }

          // Update chest sprite
          this.updateChestSprite(index, chest);
        }

        /**
         * Update chest sprite based on type and state
         */;
        _proto.updateChestSprite = function updateChestSprite(index, chest) {
          if (!this.chestSprites[index]) return;
          var sprite = this.chestSprites[index];
          if (chest.isOpened) {
            sprite.color = Color.GRAY;
          } else {
            // Color based on chest type
            var chestColors = {
              'bronze': new Color().fromHEX('#CD7F32'),
              'silver': new Color().fromHEX('#C0C0C0'),
              'gold': new Color().fromHEX('#FFD700'),
              'diamond': new Color().fromHEX('#B9F2FF')
            };
            sprite.color = chestColors[chest.chestType] || Color.WHITE;
          }
        }

        /**
         * Get chest display name
         */;
        _proto.getChestDisplayName = function getChestDisplayName(chestType) {
          var chestNames = {
            'bronze': 'Bronze Chest',
            'silver': 'Silver Chest',
            'gold': 'Gold Chest',
            'diamond': 'Diamond Chest'
          };
          return chestNames[chestType] || 'Chest';
        }

        /**
         * Show loading UI
         */;
        _proto.showLoading = function showLoading(message) {
          if (this.loadingContainer) {
            this.loadingContainer.active = true;
          }
          if (this.loadingLabel) {
            this.loadingLabel.string = message;
          }
        }

        /**
         * Hide loading UI
         */;
        _proto.hideLoading = function hideLoading() {
          if (this.loadingContainer) {
            this.loadingContainer.active = false;
          }
        }

        /**
         * Show target info
         */;
        _proto.showTargetInfo = function showTargetInfo() {
          if (this.targetInfoContainer) {
            this.targetInfoContainer.active = true;
          }
        }

        /**
         * Hide target info
         */;
        _proto.hideTargetInfo = function hideTargetInfo() {
          if (this.targetInfoContainer) {
            this.targetInfoContainer.active = false;
          }
        }

        /**
         * Hide all chests
         */;
        _proto.hideAllChests = function hideAllChests() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.chestNodes), _step; !(_step = _iterator()).done;) {
            var chestNode = _step.value;
            if (chestNode) {
              chestNode.active = false;
            }
          }
        }

        /**
         * Show raid result
         */;
        _proto.showRaidResult = function showRaidResult(result) {
          if (this.resultContainer) {
            this.resultContainer.active = true;
          }
          if (this.resultTitleLabel) {
            this.resultTitleLabel.string = result.success ? 'Raid Successful!' : 'Raid Failed!';
          }
          if (this.resultMessageLabel) {
            this.resultMessageLabel.string = result.message;
          }
          if (this.resultRewardLabel) {
            if (result.goldEarned > 0) {
              this.resultRewardLabel.string = "+" + this.formatNumber(result.goldEarned) + " Gold";
              this.resultRewardLabel.node.active = true;
            } else {
              this.resultRewardLabel.node.active = false;
            }
          }
        }

        /**
         * Hide raid result
         */;
        _proto.hideResultUI = function hideResultUI() {
          if (this.resultContainer) {
            this.resultContainer.active = false;
          }
        }

        /**
         * Show notification
         */;
        _proto.showNotification = function showNotification(message, duration) {
          var _this3 = this;
          if (duration === void 0) {
            duration = 3.0;
          }
          if (this.notificationContainer && this.notificationLabel) {
            this.notificationLabel.string = message;
            this.notificationContainer.active = true;

            // Auto-hide after duration
            this.scheduleOnce(function () {
              _this3.hideNotification();
            }, duration);
          }
        }

        /**
         * Hide notification
         */;
        _proto.hideNotification = function hideNotification() {
          if (this.notificationContainer) {
            this.notificationContainer.active = false;
          }
        }

        /**
         * Format number for display
         */;
        _proto.formatNumber = function formatNumber(num) {
          if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
          } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
          }
          return num.toString();
        }

        /**
         * Animate chest opening
         */;
        _proto.animateChestOpening = function animateChestOpening(chestIndex) {
          if (chestIndex < 0 || chestIndex >= this.chestNodes.length) return;
          var chestNode = this.chestNodes[chestIndex];
          if (!chestNode) return;

          // Scale animation
          tween(chestNode).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.3, {
            scale: v3(1.0, 1.0, 1)
          }).start();

          // Rotation animation
          tween(chestNode).to(0.1, {
            angle: -10
          }).to(0.1, {
            angle: 10
          }).to(0.1, {
            angle: -5
          }).to(0.1, {
            angle: 5
          }).to(0.1, {
            angle: 0
          }).start();
        }

        // Event Handlers

        /**
         * Handle loading target
         */;
        _proto.onLoadingTarget = function onLoadingTarget(isLoading) {
          if (isLoading) {
            this.showLoading('Loading target...');
            this.hideTargetInfo();
            this.hideAllChests();
          } else {
            this.hideLoading();
          }
        }

        /**
         * Handle target loaded
         */;
        _proto.onTargetLoaded = function onTargetLoaded(target) {
          this._currentTarget = target;
          this.hideLoading();
          this.refreshUI();
        }

        /**
         * Handle target load error
         */;
        _proto.onTargetLoadError = function onTargetLoadError(error) {
          this.hideLoading();
          this.showNotification('Failed to load target. Using offline mode.');
        }

        /**
         * Handle resource updated
         */;
        _proto.onResourceUpdated = function onResourceUpdated(event) {
          this.updateHeaderDisplay();
        }

        /**
         * Handle raid started
         */;
        _proto.onRaidStarted = function onRaidStarted(event) {
          this.animateChestOpening(event.chestIndex);
          this.showNotification("Raiding " + event.targetPlayer + "...");
          this.updateChestsDisplay(); // Update button states
        }

        /**
         * Handle raid completed
         */;
        _proto.onRaidCompleted = function onRaidCompleted(result) {
          this.showRaidResult(result);
          this.updateHeaderDisplay();
          this.updateChestsDisplay();
        }

        /**
         * Handle raid error
         */;
        _proto.onRaidError = function onRaidError(event) {
          this.showNotification("Raid failed: " + event.error);
          this.updateChestsDisplay();
        }

        /**
         * Handle chest already opened
         */;
        _proto.onChestAlreadyOpened = function onChestAlreadyOpened(event) {
          this.showNotification('Chest is already opened!');
        }

        /**
         * Handle no raids remaining
         */;
        _proto.onNoRaidsRemaining = function onNoRaidsRemaining() {
          this.showNotification('No raids remaining! Get a new target.');
        }

        /**
         * Handle navigate to scene
         */;
        _proto.onNavigateToScene = function onNavigateToScene(sceneName) {
          director.loadScene(sceneName);
        }

        // Button Event Handlers

        /**
         * Handle new target button click
         */;
        _proto.onNewTargetClicked = /*#__PURE__*/
        function () {
          var _onNewTargetClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._viewModel) {
                    _context.next = 3;
                    break;
                  }
                  _context.next = 3;
                  return this._viewModel.executeCommand('getNewTarget');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onNewTargetClicked() {
            return _onNewTargetClicked.apply(this, arguments);
          }
          return onNewTargetClicked;
        }()
        /**
         * Handle back button click
         */;

        _proto.onBackClicked = function onBackClicked() {
          if (this._viewModel) {
            this._viewModel.executeCommand('goBack');
          }
        }

        /**
         * Handle raid button click
         */;
        _proto.onRaidClicked = /*#__PURE__*/
        function () {
          var _onRaidClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(chestIndex) {
            var chest;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this._viewModel || !this._currentTarget)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  chest = this._currentTarget.chests[chestIndex];
                  if (!chest) {
                    _context2.next = 6;
                    break;
                  }
                  _context2.next = 6;
                  return this._viewModel.executeCommand('raidChest', chest.chestIndex);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onRaidClicked(_x) {
            return _onRaidClicked.apply(this, arguments);
          }
          return onRaidClicked;
        }()
        /**
         * Handle result close button click
         */;

        _proto.onResultCloseClicked = function onResultCloseClicked() {
          this.hideResultUI();
        }

        /**
         * Called when view is shown
         */;
        _proto.onShow = function onShow() {
          _BaseView.prototype.onShow.call(this);

          // Initialize ViewModel if not already done
          if (!this._viewModel) {
            this._viewModel = new RaidViewModel();
            this.setViewModel(this._viewModel);
            this._viewModel.initialize();
          }
        }

        /**
         * Cleanup on destroy
         */;
        _proto.onDestroy = function onDestroy() {
          // Remove button event listeners
          if (this.newTargetButton) {
            this.newTargetButton.node.off(Button.EventType.CLICK, this.onNewTargetClicked, this);
          }
          if (this.backButton) {
            this.backButton.node.off(Button.EventType.CLICK, this.onBackClicked, this);
          }
          for (var i = 0; i < this.raidButtons.length; i++) {
            var button = this.raidButtons[i];
            if (button) {
              button.node.off(Button.EventType.CLICK);
            }
          }
          if (this.resultCloseButton) {
            this.resultCloseButton.node.off(Button.EventType.CLICK, this.onResultCloseClicked, this);
          }

          // Remove ViewModel event listeners
          if (this._viewModel) {
            this._viewModel.off('loadingTarget', this.onLoadingTarget, this);
            this._viewModel.off('targetLoaded', this.onTargetLoaded, this);
            this._viewModel.off('targetLoadError', this.onTargetLoadError, this);
            this._viewModel.off('resourceUpdated', this.onResourceUpdated, this);
            this._viewModel.off('raidStarted', this.onRaidStarted, this);
            this._viewModel.off('raidCompleted', this.onRaidCompleted, this);
            this._viewModel.off('raidError', this.onRaidError, this);
            this._viewModel.off('chestAlreadyOpened', this.onChestAlreadyOpened, this);
            this._viewModel.off('noRaidsRemaining', this.onNoRaidsRemaining, this);
            this._viewModel.off('navigateToScene', this.onNavigateToScene, this);
          }
          _BaseView.prototype.onDestroy.call(this);
        };
        return RaidView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "raidsRemainingLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetInfoContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetPlayerNameLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetPlayerLevelLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetCityNameLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "chestNodes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chestSprites", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chestTypeLabels", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabels", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "raidButtons", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "openedOverlays", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "newTargetButton", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "backButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "loadingContainer", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "loadingLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "resultContainer", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "resultTitleLabel", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "resultMessageLabel", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "resultRewardLabel", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "resultCloseButton", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "notificationContainer", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "notificationLabel", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RaidViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseViewModel.ts', './ServiceLocator.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseViewModel, ServiceLocator, logError;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseViewModel = module.BaseViewModel;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4b62ce8dZVI3LLONEZ1oUWw", "RaidViewModel", undefined);

      /**
       * Raid target player data
       */

      /**
       * Raid chest data
       */

      /**
       * Raid result data
       */

      /**
       * Raid ViewModel - Handles raid scene logic
       */
      var RaidViewModel = exports('RaidViewModel', /*#__PURE__*/function (_BaseViewModel) {
        _inheritsLoose(RaidViewModel, _BaseViewModel);
        // Default raids per session

        function RaidViewModel() {
          var _this;
          _this = _BaseViewModel.call(this) || this;
          _this._gameService = null;
          _this._resourceManager = null;
          _this._raidTarget = null;
          _this._isRaiding = false;
          _this._raidsRemaining = 3;
          return _this;
        }

        /**
         * Initialize ViewModel
         */
        var _proto = RaidViewModel.prototype;
        _proto.onInitialize = function onInitialize() {
          this.setupServices();
          this.setupEventListeners();
          this.loadRaidTarget();
        }

        /**
         * Setup services
         */;
        _proto.setupServices = function setupServices() {
          var serviceLocator = ServiceLocator.getInstance();
          this._gameService = serviceLocator.getService('GameService');
          this._resourceManager = serviceLocator.getService('ResourceManager');
          if (!this._gameService) {
            logError('GameService not found');
          }
          if (!this._resourceManager) {
            logError('ResourceManager not found');
          }
        }

        /**
         * Setup event listeners
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          // Resource manager events
          if (this._resourceManager) {
            this._resourceManager.on('resourceChanged', this.onResourceChanged, this);
          }
        }

        /**
         * Load raid target from server
         */;
        _proto.loadRaidTarget = /*#__PURE__*/
        function () {
          var _loadRaidTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var targetData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  this.emit('loadingTarget', true);
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 5;
                  return this._gameService.getRaidTarget();
                case 5:
                  targetData = _context.sent;
                  this._raidTarget = this.processTargetData(targetData);
                  _context.next = 10;
                  break;
                case 9:
                  // Generate mock target for offline mode
                  this._raidTarget = this.generateMockTarget();
                case 10:
                  this.emit('targetLoaded', this._raidTarget);
                  this.emit('loadingTarget', false);
                  _context.next = 21;
                  break;
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](0);
                  logError('Failed to load raid target:', _context.t0);
                  this.emit('targetLoadError', _context.t0);
                  this.emit('loadingTarget', false);

                  // Fallback to mock target
                  this._raidTarget = this.generateMockTarget();
                  this.emit('targetLoaded', this._raidTarget);
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 14]]);
          }));
          function loadRaidTarget() {
            return _loadRaidTarget.apply(this, arguments);
          }
          return loadRaidTarget;
        }()
        /**
         * Process target data from server
         */;

        _proto.processTargetData = function processTargetData(serverData) {
          var _serverData$chests;
          return {
            playerId: serverData.playerId || 'unknown',
            playerName: serverData.playerName || 'Unknown Player',
            playerLevel: serverData.playerLevel || 1,
            cityName: serverData.cityName || 'Unknown City',
            chests: ((_serverData$chests = serverData.chests) == null ? void 0 : _serverData$chests.map(function (chest, index) {
              return {
                chestIndex: index,
                isOpened: chest.isOpened || false,
                potentialReward: chest.potentialReward || 100,
                chestType: chest.chestType || 'bronze'
              };
            })) || []
          };
        }

        /**
         * Generate mock target for testing/offline mode
         */;
        _proto.generateMockTarget = function generateMockTarget() {
          var playerNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
          var cityNames = ['Village', 'Town', 'City', 'Metropolis', 'Capital'];
          var chestTypes = ['bronze', 'silver', 'gold', 'diamond'];
          var randomName = playerNames[Math.floor(Math.random() * playerNames.length)];
          var randomCity = cityNames[Math.floor(Math.random() * cityNames.length)];
          var randomLevel = Math.floor(Math.random() * 10) + 1;
          var chests = [];
          var chestCount = 3; // Default 3 chests per raid

          for (var i = 0; i < chestCount; i++) {
            var chestType = chestTypes[Math.floor(Math.random() * chestTypes.length)];
            var baseReward = this.getChestBaseReward(chestType);
            var potentialReward = Math.floor(baseReward * (0.5 + Math.random() * 1.0));
            chests.push({
              chestIndex: i,
              isOpened: Math.random() < 0.1,
              // 10% chance of being already opened
              potentialReward: potentialReward,
              chestType: chestType
            });
          }
          return {
            playerId: "player_" + Date.now(),
            playerName: randomName,
            playerLevel: randomLevel,
            cityName: randomCity,
            chests: chests
          };
        }

        /**
         * Get base reward for chest type
         */;
        _proto.getChestBaseReward = function getChestBaseReward(chestType) {
          var baseRewards = {
            'bronze': 100,
            'silver': 250,
            'gold': 500,
            'diamond': 1000
          };
          return baseRewards[chestType] || 100;
        }

        /**
         * Execute command
         */;
        _proto.executeCommand = /*#__PURE__*/
        function () {
          var _executeCommand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(command) {
            var _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = command;
                  _context2.next = _context2.t0 === 'raidChest' ? 3 : _context2.t0 === 'getNewTarget' ? 4 : _context2.t0 === 'goBack' ? 5 : _context2.t0 === 'refreshTarget' ? 6 : 7;
                  break;
                case 3:
                  return _context2.abrupt("return", this.raidChest(_args2.length <= 1 ? undefined : _args2[1]));
                case 4:
                  return _context2.abrupt("return", this.getNewTarget());
                case 5:
                  return _context2.abrupt("return", this.goBack());
                case 6:
                  return _context2.abrupt("return", this.loadRaidTarget());
                case 7:
                  throw new Error("Unknown command: " + command);
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function executeCommand(_x) {
            return _executeCommand.apply(this, arguments);
          }
          return executeCommand;
        }()
        /**
         * Raid a specific chest
         */;

        _proto.raidChest = /*#__PURE__*/
        function () {
          var _raidChest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(chestIndex) {
            var chest, raidResult, serverResult;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(!this._raidTarget || this._isRaiding)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return", null);
                case 2:
                  chest = this._raidTarget.chests.find(function (c) {
                    return c.chestIndex === chestIndex;
                  });
                  if (chest) {
                    _context3.next = 6;
                    break;
                  }
                  logError("Chest not found: " + chestIndex);
                  return _context3.abrupt("return", null);
                case 6:
                  if (!chest.isOpened) {
                    _context3.next = 9;
                    break;
                  }
                  this.emit('chestAlreadyOpened', {
                    chestIndex: chestIndex
                  });
                  return _context3.abrupt("return", null);
                case 9:
                  if (!(this._raidsRemaining <= 0)) {
                    _context3.next = 12;
                    break;
                  }
                  this.emit('noRaidsRemaining');
                  return _context3.abrupt("return", null);
                case 12:
                  _context3.prev = 12;
                  this._isRaiding = true;
                  this.emit('raidStarted', {
                    chestIndex: chestIndex,
                    targetPlayer: this._raidTarget.playerName
                  });
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context3.next = 22;
                    break;
                  }
                  _context3.next = 18;
                  return this._gameService.raidPlayer(this._raidTarget.playerId, chestIndex);
                case 18:
                  serverResult = _context3.sent;
                  raidResult = this.processRaidResult(serverResult, chestIndex, chest);
                  _context3.next = 23;
                  break;
                case 22:
                  // Generate mock raid result
                  raidResult = this.generateMockRaidResult(chestIndex, chest);
                case 23:
                  _context3.next = 25;
                  return this.processRaidSuccess(raidResult);
                case 25:
                  this._raidsRemaining--;
                  this._isRaiding = false;
                  this.emit('raidCompleted', raidResult);
                  return _context3.abrupt("return", raidResult);
                case 31:
                  _context3.prev = 31;
                  _context3.t0 = _context3["catch"](12);
                  logError('Raid failed:', _context3.t0);
                  this._isRaiding = false;
                  this.emit('raidError', {
                    chestIndex: chestIndex,
                    error: _context3.t0.message
                  });
                  return _context3.abrupt("return", null);
                case 37:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[12, 31]]);
          }));
          function raidChest(_x2) {
            return _raidChest.apply(this, arguments);
          }
          return raidChest;
        }()
        /**
         * Process raid result from server
         */;

        _proto.processRaidResult = function processRaidResult(serverResult, chestIndex, chest) {
          return {
            success: serverResult.success || false,
            chestIndex: chestIndex,
            goldEarned: serverResult.goldEarned || 0,
            chestType: chest.chestType,
            message: serverResult.message || 'Raid completed'
          };
        }

        /**
         * Generate mock raid result
         */;
        _proto.generateMockRaidResult = function generateMockRaidResult(chestIndex, chest) {
          var success = Math.random() < 0.6; // 60% success rate
          var goldEarned = success ? Math.floor(chest.potentialReward * (0.3 + Math.random() * 0.7)) : 0;
          return {
            success: success,
            chestIndex: chestIndex,
            goldEarned: goldEarned,
            chestType: chest.chestType,
            message: success ? "Found " + goldEarned + " gold in the " + chest.chestType + " chest!" : 'The chest was empty! Better luck next time.'
          };
        }

        /**
         * Process successful raid
         */;
        _proto.processRaidSuccess = /*#__PURE__*/
        function () {
          var _processRaidSuccess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(raidResult) {
            var chest;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (this._raidTarget) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  // Mark chest as opened
                  chest = this._raidTarget.chests.find(function (c) {
                    return c.chestIndex === raidResult.chestIndex;
                  });
                  if (chest) {
                    chest.isOpened = true;
                  }

                  // Award gold if earned
                  if (!(raidResult.success && raidResult.goldEarned > 0 && this._resourceManager)) {
                    _context4.next = 7;
                    break;
                  }
                  _context4.next = 7;
                  return this._resourceManager.addGold(raidResult.goldEarned, 'raid_reward');
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function processRaidSuccess(_x3) {
            return _processRaidSuccess.apply(this, arguments);
          }
          return processRaidSuccess;
        }()
        /**
         * Get new raid target
         */;

        _proto.getNewTarget = /*#__PURE__*/
        function () {
          var _getNewTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this._raidTarget = null;
                  this._raidsRemaining = 3; // Reset raids
                  _context5.next = 4;
                  return this.loadRaidTarget();
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function getNewTarget() {
            return _getNewTarget.apply(this, arguments);
          }
          return getNewTarget;
        }()
        /**
         * Go back to main scene
         */;

        _proto.goBack = function goBack() {
          this.emit('navigateToScene', 'Main');
        }

        // Event Handlers

        /**
         * Handle resource changes
         */;
        _proto.onResourceChanged = function onResourceChanged(event) {
          this.emit('resourceUpdated', event);
        }

        // Getters

        /**
         * Get current raid target
         */;
        /**
         * Cleanup resources
         */
        _proto.destroy = function destroy() {
          // Remove event listeners
          if (this._resourceManager) {
            this._resourceManager.off('resourceChanged', this.onResourceChanged, this);
          }

          // Clear references
          this._gameService = null;
          this._resourceManager = null;
          this._raidTarget = null;
          this._isRaiding = false;
          _BaseViewModel.prototype.destroy.call(this);
        };
        _createClass(RaidViewModel, [{
          key: "raidTarget",
          get: function get() {
            return this._raidTarget;
          }

          /**
           * Get current gold amount
           */
        }, {
          key: "currentGold",
          get: function get() {
            return this._resourceManager ? this._resourceManager.getGold() : 0;
          }

          /**
           * Check if currently raiding
           */
        }, {
          key: "isRaiding",
          get: function get() {
            return this._isRaiding;
          }

          /**
           * Get remaining raids
           */
        }, {
          key: "raidsRemaining",
          get: function get() {
            return this._raidsRemaining;
          }

          /**
           * Check if has raids remaining
           */
        }, {
          key: "hasRaidsRemaining",
          get: function get() {
            return this._raidsRemaining > 0;
          }

          /**
           * Get target player name
           */
        }, {
          key: "targetPlayerName",
          get: function get() {
            return this._raidTarget ? this._raidTarget.playerName : '';
          }

          /**
           * Get target city name
           */
        }, {
          key: "targetCityName",
          get: function get() {
            return this._raidTarget ? this._raidTarget.cityName : '';
          }

          /**
           * Get target player level
           */
        }, {
          key: "targetPlayerLevel",
          get: function get() {
            return this._raidTarget ? this._raidTarget.playerLevel : 1;
          }

          /**
           * Get available chests for raid
           */
        }, {
          key: "availableChests",
          get: function get() {
            if (!this._raidTarget) return [];
            return this._raidTarget.chests.filter(function (chest) {
              return !chest.isOpened;
            });
          }

          /**
           * Get opened chests
           */
        }, {
          key: "openedChests",
          get: function get() {
            if (!this._raidTarget) return [];
            return this._raidTarget.chests.filter(function (chest) {
              return chest.isOpened;
            });
          }

          /**
           * Get total potential reward
           */
        }, {
          key: "totalPotentialReward",
          get: function get() {
            if (!this._raidTarget) return 0;
            return this.availableChests.reduce(function (total, chest) {
              return total + chest.potentialReward;
            }, 0);
          }

          /**
           * Check if all chests are opened
           */
        }, {
          key: "areAllChestsOpened",
          get: function get() {
            if (!this._raidTarget) return false;
            return this._raidTarget.chests.every(function (chest) {
              return chest.isOpened;
            });
          }
        }]);
        return RaidViewModel;
      }(BaseViewModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ReelComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AnimationConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Prefab, instantiate, v3, Sprite, Label, resources, SpriteFrame, tween, Vec3, Component, AnimationConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      v3 = module.v3;
      Sprite = module.Sprite;
      Label = module.Label;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      AnimationConfig = module.AnimationConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "0fadbUifFxBlKLJPjsen265", "ReelComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ReelComponent = exports('ReelComponent', (_dec = ccclass('ReelComponent'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property({
        tooltip: 'The height of a single symbol. This determines the layout and stopping positions.'
      }), _dec5 = property({
        tooltip: 'The number of symbols visible in the final display area.'
      }), _dec6 = property({
        tooltip: 'Number of buffer symbols to instantiate above the visible area for smooth looping.'
      }), _dec7 = property({
        tooltip: 'Number of buffer symbols to instantiate below the visible area for smooth looping.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelComponent, _Component);
        function ReelComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // #region Editor Properties
          _initializerDefineProperty(_this, "symbolContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "symbolPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "symbolHeight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visibleSymbolCount", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBufferSymbols", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomBufferSymbols", _descriptor6, _assertThisInitialized(_this));
          // #endregion
          // #region Private Properties
          _this._symbolNodes = [];
          _this._isSpinning = false;
          _this._reelIndex = 0;
          _this._symbols = [];
          _this._finalSymbols = [];
          _this._spinElapsedTime = 0;
          _this._spinDelay = 0;
          _this._spinPhase = 'acceleration';
          _this._targetYPositions = [];
          _this._anticipationSymbolsSet = false;
          _this._animationConfig = void 0;
          _this._reelConfig = void 0;
          return _this;
        }
        var _proto = ReelComponent.prototype;
        // #endregion
        // #region Initialization
        _proto.initialize = function initialize(reelIndex, symbols) {
          this._reelIndex = reelIndex;
          this._symbols = [].concat(symbols);
          this._animationConfig = AnimationConfig.getInstance();
          this.updateConfig();
          this.setupReel();
        }

        /**
         * Updates the reel's animation configuration from the central AnimationConfig manager.
         * This should be called when the animation profile changes.
         */;
        _proto.updateConfig = function updateConfig() {
          if (!this._animationConfig) {
            this._animationConfig = AnimationConfig.getInstance();
          }
          this._reelConfig = this._animationConfig.getReelConfig(this._reelIndex);
        };
        _proto.setupReel = function setupReel() {
          if (!this.symbolContainer) return;
          this.symbolContainer.removeAllChildren();
          this._symbolNodes = [];
          var totalSymbols = this.visibleSymbolCount + this.topBufferSymbols + this.bottomBufferSymbols;
          for (var i = 0; i < totalSymbols; i++) {
            var symbolNode = this.createSymbolNode(i);
            if (symbolNode) {
              this.symbolContainer.addChild(symbolNode);
              this._symbolNodes.push(symbolNode);
              var y = (this.visibleSymbolCount + this.topBufferSymbols - 1 - i) * this.symbolHeight;
              symbolNode.setPosition(0, y);
            }
          }
          this.populateWithRandomSymbols();
        };
        _proto.createSymbolNode = function createSymbolNode(index) {
          if (!this.symbolPrefab) return null;
          var symbolNode = instantiate(this.symbolPrefab);
          symbolNode.name = "Symbol_" + index;
          return symbolNode;
        }

        // #endregion

        // #region Symbol Management
        ;

        _proto.populateWithRandomSymbols = function populateWithRandomSymbols() {
          if (this._symbols.length === 0) return;
          for (var _iterator = _createForOfIteratorHelperLoose(this._symbolNodes), _step; !(_step = _iterator()).done;) {
            var symbolNode = _step.value;
            this.setSymbolDisplay(symbolNode, this.getRandomSymbol());
          }
        };
        _proto.getRandomSymbol = function getRandomSymbol() {
          if (this._symbols.length === 0) return {
            id: 0,
            type: '?',
            name: '?',
            priority: 0
          };
          var randomIndex = Math.floor(Math.random() * this._symbols.length);
          return this._symbols[randomIndex];
        };
        _proto.setSymbolDisplay = function setSymbolDisplay(symbolNode, symbol, isBlurred) {
          if (isBlurred === void 0) {
            isBlurred = false;
          }
          if (!symbolNode) return;
          symbolNode.scale = isBlurred ? v3(1, 1.2, 1) : v3(1, 1, 1);
          var sprite = symbolNode.getComponentInChildren(Sprite);
          if (sprite) {
            this.setSymbolSprite(sprite, symbol, isBlurred);
          }
          var label = symbolNode.getComponentInChildren(Label);
          if (label) label.string = symbol.name;
          symbolNode.symbolData = symbol;
        };
        _proto.setSymbolSprite = function setSymbolSprite(sprite, symbol, isBlurred) {
          var _this2 = this;
          // Construct the image path based on whether the blurred version is requested
          var imagePath = "texture/symbol/" + (isBlurred ? 'blur/' : '') + symbol.id + "/spriteFrame";

          // Load the sprite frame from resources
          resources.load(imagePath, SpriteFrame, function (err, spriteFrame) {
            if (err) {
              // If loading the blurred asset fails, try loading the normal one as a fallback
              if (isBlurred) {
                console.warn("Failed to load blurred sprite for symbol ID " + symbol.id + ", trying normal sprite.", err);
                _this2.setSymbolSprite(sprite, symbol, false); // Fallback to normal sprite
              } else {
                console.warn("Failed to load normal sprite for symbol ID " + symbol.id + ":", err);
              }
              return;
            }

            // Successfully loaded - assign the sprite frame
            if (sprite && sprite.isValid) {
              sprite.spriteFrame = spriteFrame;
            }
          });
        }

        // #endregion

        // #region Spin Lifecycle
        ;

        _proto.update = function update(dt) {
          var _this3 = this;
          this.updateCurve();
          if (!this._isSpinning) return;
          this._spinElapsedTime += dt;
          if (this._spinElapsedTime < this._spinDelay) {
            return;
          }
          var actualSpinTime = this._spinElapsedTime - this._spinDelay;
          var _this$_reelConfig = this._reelConfig,
            spinDuration = _this$_reelConfig.spinDuration,
            accelerationDuration = _this$_reelConfig.accelerationDuration,
            decelerationDuration = _this$_reelConfig.decelerationDuration;
          var constantSpinTime = spinDuration - accelerationDuration - decelerationDuration;
          if (actualSpinTime < accelerationDuration) {
            this._spinPhase = 'acceleration';
          } else if (actualSpinTime < accelerationDuration + constantSpinTime) {
            this._spinPhase = 'constant';
          } else if (this._spinPhase !== 'deceleration' && actualSpinTime < spinDuration) {
            this._spinPhase = 'deceleration';
            this._targetYPositions = this._symbolNodes.map(function (_, i) {
              return (_this3.visibleSymbolCount + _this3.topBufferSymbols - 1 - i) * _this3.symbolHeight;
            });

            // Revert all symbols to their normal sprites when deceleration begins
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._symbolNodes), _step2; !(_step2 = _iterator2()).done;) {
              var symbolNode = _step2.value;
              var symbolData = symbolNode.symbolData;
              if (symbolData) {
                this.setSymbolDisplay(symbolNode, symbolData, false);
              }
            }
          }
          var currentSpeed = this.calculateCurrentSpeed(actualSpinTime);
          if (this._spinPhase === 'deceleration' && !this._anticipationSymbolsSet) {
            this.setAnticipationSymbols();
            this._anticipationSymbolsSet = true;
          }
          this.moveSymbols(currentSpeed, dt);
        };
        _proto.calculateCurrentSpeed = function calculateCurrentSpeed(actualSpinTime) {
          var _this$_reelConfig2 = this._reelConfig,
            spinSpeed = _this$_reelConfig2.spinSpeed,
            spinDuration = _this$_reelConfig2.spinDuration,
            accelerationDuration = _this$_reelConfig2.accelerationDuration,
            decelerationDuration = _this$_reelConfig2.decelerationDuration;
          var constantSpinTime = spinDuration - accelerationDuration - decelerationDuration;
          switch (this._spinPhase) {
            case 'acceleration':
              var accelerationRatio = actualSpinTime / accelerationDuration;
              return spinSpeed * this.easeInQuad(accelerationRatio);
            case 'constant':
              return spinSpeed;
            case 'deceleration':
              var decelerationStart = accelerationDuration + constantSpinTime;
              var decelerationProgress = (actualSpinTime - decelerationStart) / decelerationDuration;
              return spinSpeed * (1 - this.easeOutCubic(decelerationProgress));
            default:
              return 0;
          }
        };
        _proto.easeInQuad = function easeInQuad(t) {
          return t * t;
        };
        _proto.easeOutCubic = function easeOutCubic(t) {
          return 1 - Math.pow(1 - t, 3);
        };
        _proto.setAnticipationSymbols = function setAnticipationSymbols() {
          var sortedNodes = [].concat(this._symbolNodes).sort(function (a, b) {
            return b.y - a.y;
          });
          var anticipationDistance = this._reelConfig.anticipationDistance;
          for (var i = 0; i < Math.min(this._finalSymbols.length, sortedNodes.length); i++) {
            var nodeIndex = Math.floor(i + this.topBufferSymbols + anticipationDistance / this.symbolHeight);
            if (sortedNodes[nodeIndex]) {
              this.setSymbolDisplay(sortedNodes[nodeIndex], this._finalSymbols[i]);
            }
          }
        };
        _proto.moveSymbols = function moveSymbols(currentSpeed, dt) {
          var _this4 = this;
          if (this._spinPhase === 'deceleration') {
            var _loop = function _loop() {
                var symbolNode = _step3.value;
                var nextY = symbolNode.y - currentSpeed * dt;
                var targetY = _this4._targetYPositions.find(function (y) {
                  return symbolNode.y >= y && nextY < y;
                });
                if (targetY !== undefined) {
                  _this4.endSpin();
                  return {
                    v: void 0
                  };
                }
              },
              _ret;
            for (var _iterator3 = _createForOfIteratorHelperLoose(this._symbolNodes), _step3; !(_step3 = _iterator3()).done;) {
              _ret = _loop();
              if (_ret) return _ret.v;
            }
          }
          var totalReelHeight = this._symbolNodes.length * this.symbolHeight;
          var bottomBoundary = -this.symbolHeight * (this.bottomBufferSymbols + 1);
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._symbolNodes), _step4; !(_step4 = _iterator4()).done;) {
            var symbolNode = _step4.value;
            symbolNode.y -= currentSpeed * dt;
            if (symbolNode.y < bottomBoundary) {
              symbolNode.y += totalReelHeight;
              if (this._spinPhase !== 'deceleration') {
                var isBlurred = this._spinPhase === 'constant';
                this.setSymbolDisplay(symbolNode, this.getRandomSymbol(), isBlurred);
              }
            }
          }
        };
        _proto.updateCurve = function updateCurve() {
          if (this._reelIndex == 0) {
            for (var i = 0; i < this._symbolNodes.length; i++) {
              var symbolNode = this._symbolNodes[i];
              var dY = symbolNode.y;
              symbolNode.x = dY * 0.1;
              // const scale = 1 - Math.abs(dY) * 0.0001;
              // symbolNode.scale = v3(scale, scale, 1);
            }
          } else if (this._reelIndex == 2) {
            for (var _i = 0; _i < this._symbolNodes.length; _i++) {
              var _symbolNode = this._symbolNodes[_i];
              var _dY = _symbolNode.y;
              _symbolNode.x = -_dY * 0.1;
              // const scale = 1 - Math.abs(dY) * 0.0001;
              // symbolNode.scale = v3(scale, scale, 1);
            }
          }
        };

        _proto.startSpin = function startSpin(finalSymbols) {
          if (this._isSpinning) return;
          this._isSpinning = true;
          this._spinElapsedTime = 0;
          this._spinPhase = 'acceleration';
          this._anticipationSymbolsSet = false;
          this._finalSymbols = [].concat(finalSymbols);
          this._spinDelay = this._reelConfig.delayReel;
        };
        _proto.endSpin = function endSpin() {
          var _this5 = this;
          if (!this._isSpinning) return;
          this._isSpinning = false;
          this._symbolNodes.sort(function (a, b) {
            return b.y - a.y;
          });
          var allAnimationsDone = new Promise(function (resolve) {
            var completedAnimations = 0;
            var totalAnimations = _this5._symbolNodes.length;
            if (totalAnimations === 0) {
              resolve();
              return;
            }
            var _loop2 = function _loop2() {
              var symbolNode = _this5._symbolNodes[i];
              var targetY = (_this5.visibleSymbolCount + _this5.topBufferSymbols - 1 - i) * _this5.symbolHeight;

              // Check if this node is for a visible symbol
              if (i >= _this5.topBufferSymbols && i < _this5.topBufferSymbols + _this5.visibleSymbolCount) {
                var finalSymbolIndexInResult = i - _this5.topBufferSymbols;
                if (finalSymbolIndexInResult < _this5._finalSymbols.length) {
                  _this5.setSymbolDisplay(symbolNode, _this5._finalSymbols[finalSymbolIndexInResult]);
                } else {
                  // Fallback for safety
                  _this5.setSymbolDisplay(symbolNode, _this5.getRandomSymbol());
                }
              } else {
                // This is a buffer symbol, so set it to a random one
                _this5.setSymbolDisplay(symbolNode, _this5.getRandomSymbol());
              }
              var _this5$_reelConfig = _this5._reelConfig,
                bounceDuration = _this5$_reelConfig.bounceDuration,
                bounceIntensity = _this5$_reelConfig.bounceIntensity;
              tween(symbolNode).to(bounceDuration, {
                y: targetY
              }, {
                easing: function easing(k) {
                  var s = bounceIntensity * 5.67;
                  return --k * k * ((s + 1) * k + s) + 1;
                }
              }).call(function () {
                completedAnimations++;
                if (completedAnimations === totalAnimations) {
                  resolve();
                }
              }).start();
            };
            for (var i = 0; i < _this5._symbolNodes.length; i++) {
              _loop2();
            }
          });
          allAnimationsDone.then(function () {
            return _this5.onSpinComplete();
          });
        };
        _proto.onSpinComplete = function onSpinComplete() {
          this.node.emit('reelSpinComplete', {
            reelIndex: this._reelIndex,
            finalSymbols: this._finalSymbols
          });
        };
        _proto.highlightWinningSymbols = function highlightWinningSymbols(winningPositions) {
          var duration = this._animationConfig.getUIConfig().winAnimationDuration;
          for (var _iterator5 = _createForOfIteratorHelperLoose(winningPositions), _step5; !(_step5 = _iterator5()).done;) {
            var position = _step5.value;
            if (this._symbolNodes[position]) {
              var symbolNode = this._symbolNodes[position];
              tween(symbolNode).to(duration, {
                scale: new Vec3(1.2, 1.2, 1)
              }).to(duration, {
                scale: new Vec3(1, 1, 1)
              }).to(duration, {
                scale: new Vec3(1.2, 1.2, 1)
              }).to(duration, {
                scale: new Vec3(1, 1, 1)
              }).start();
            }
          }
        }

        // #endregion

        // #region Cleanup
        ;

        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
          this._symbolNodes = [];
          this._symbols = [];
          this._finalSymbols = [];
        }

        // #endregion
        ;

        return ReelComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbolPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "symbolHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "visibleSymbolCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "topBufferSymbols", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bottomBufferSymbols", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseService.ts', './ResourceModel.ts', './ServiceLocator.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseService, ResourceType, ServiceLocator, logInfo, logError;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseService = module.BaseService;
    }, function (module) {
      ResourceType = module.ResourceType;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      logInfo = module.logInfo;
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e1a5uynJpF36SgxNC+cet1", "ResourceManager", undefined);

      /**
       * Resource transaction data
       */

      /**
       * Resource change event data
       */

      /**
       * Resource Manager - Handles all resource operations and synchronization
       */
      var ResourceManager = exports('ResourceManager', /*#__PURE__*/function (_BaseService) {
        _inheritsLoose(ResourceManager, _BaseService);
        function ResourceManager() {
          var _this;
          _this = _BaseService.call(this) || this;
          _this._resourceModel = null;
          _this._gameService = null;
          _this._playerModel = null;
          _this._transactionHistory = [];
          _this._syncTimer = 0;
          _this.SYNC_INTERVAL = 30000;
          // 30 seconds
          _this.MAX_TRANSACTION_HISTORY = 100;
          return _this;
        }

        /**
         * Initialize Resource Manager
         */
        var _proto = ResourceManager.prototype;
        _proto.onInitialize = /*#__PURE__*/
        function () {
          var _onInitialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var serviceLocator;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  logInfo('Initializing Resource Manager...');

                  // Get game service
                  serviceLocator = ServiceLocator.getInstance();
                  this._gameService = serviceLocator.getService('GameService');
                  if (this._gameService) {
                    _context.next = 6;
                    break;
                  }
                  logError('GameService not found - ResourceManager cannot initialize without it');
                  throw new Error('GameService instance required for ResourceManager initialization');
                case 6:
                  // Get PlayerModel from GameService (single source of truth)
                  this._playerModel = this._gameService.getPlayerModel();
                  if (this._playerModel) {
                    _context.next = 10;
                    break;
                  }
                  logError('PlayerModel not found in GameService - ResourceManager cannot initialize without it');
                  throw new Error('PlayerModel instance required for ResourceManager initialization');
                case 10:
                  // Use PlayerModel's ResourceModel as the single source of truth
                  this._resourceModel = this._playerModel.resources;
                  logInfo('ResourceManager using PlayerModel\'s ResourceModel as single source of truth');
                  this.setupResourceModelEvents();

                  // Start periodic sync only if game service is available
                  if (this._gameService) {
                    this.startPeriodicSync();
                  }
                  logInfo('Resource Manager initialized successfully');
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onInitialize() {
            return _onInitialize.apply(this, arguments);
          }
          return onInitialize;
        }()
        /**
         * Connect and sync with server
         */;

        _proto.onConnect = /*#__PURE__*/
        function () {
          var _onConnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context2.next = 3;
                    break;
                  }
                  _context2.next = 3;
                  return this.syncWithServer();
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onConnect() {
            return _onConnect.apply(this, arguments);
          }
          return onConnect;
        }()
        /**
         * Disconnect
         */;

        _proto.onDisconnect = /*#__PURE__*/
        function () {
          var _onDisconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.stopPeriodicSync();
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onDisconnect() {
            return _onDisconnect.apply(this, arguments);
          }
          return onDisconnect;
        }()
        /**
         * Setup resource model event listeners
         */;

        _proto.setupResourceModelEvents = function setupResourceModelEvents() {
          var _this2 = this;
          if (!this._resourceModel) return;
          this._resourceModel.on('goldChanged', function (event) {
            _this2.onResourceChanged(ResourceType.GOLD, event.oldValue, event.value, 'model_update');
          });
          this._resourceModel.on('energyChanged', function (event) {
            _this2.onResourceChanged(ResourceType.ENERGY, event.oldValue, event.value, 'model_update');
          });
        }

        /**
         * Handle resource change events
         */;
        _proto.onResourceChanged = function onResourceChanged(type, oldValue, newValue, reason) {
          var change = newValue - oldValue;
          var changeEvent = {
            type: type,
            oldValue: oldValue,
            newValue: newValue,
            change: change,
            reason: reason
          };
          this.emit('resourceChanged', changeEvent);

          // Log significant changes
          if (Math.abs(change) > 0) {
            logInfo("Resource changed: " + type + " " + (change > 0 ? '+' : '') + change + " (" + oldValue + " -> " + newValue + ") - " + reason);
          }
        }

        /**
         * Start periodic sync with server
         */;
        _proto.startPeriodicSync = function startPeriodicSync() {
          var _this3 = this;
          this._syncTimer = setInterval(function () {
            if (_this3._gameService && _this3._gameService.isReady) {
              _this3.syncWithServer()["catch"](function (error) {
                logError('Periodic sync failed:', error);
              });
            }
          }, this.SYNC_INTERVAL);
        }

        /**
         * Stop periodic sync
         */;
        _proto.stopPeriodicSync = function stopPeriodicSync() {
          if (this._syncTimer) {
            clearInterval(this._syncTimer);
            this._syncTimer = 0;
          }
        }

        /**
         * Sync resources with server
         */;
        _proto.syncWithServer = /*#__PURE__*/
        function () {
          var _syncWithServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var playerData;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(!this._gameService || !this._resourceModel || !this._playerModel)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  _context4.prev = 2;
                  _context4.next = 5;
                  return this._gameService.getPlayerData();
                case 5:
                  playerData = _context4.sent;
                  if (playerData.resources) {
                    // Update the PlayerModel's ResourceModel (single source of truth)
                    this._resourceModel.fromJSON(playerData.resources);
                    this.emit('syncCompleted', playerData.resources);
                    logInfo('Resources synced with server successfully');
                  }
                  _context4.next = 13;
                  break;
                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](2);
                  logError('Failed to sync resources with server:', _context4.t0);
                  this.emit('syncFailed', _context4.t0);
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[2, 9]]);
          }));
          function syncWithServer() {
            return _syncWithServer.apply(this, arguments);
          }
          return syncWithServer;
        }()
        /**
         * Get current resource model
         */;

        _proto.getResourceModel = function getResourceModel() {
          return this._resourceModel;
        }

        /**
         * Get current gold amount
         */;
        _proto.getGold = function getGold() {
          return this._resourceModel ? this._resourceModel.gold : 0;
        }

        /**
         * Get current energy amount
         */;
        _proto.getEnergy = function getEnergy() {
          return this._resourceModel ? this._resourceModel.energy : 0;
        }

        /**
         * Get maximum energy capacity
         */;
        _proto.getMaxEnergy = function getMaxEnergy() {
          return this._resourceModel ? this._resourceModel.maxEnergy : 50;
        }

        /**
         * Add gold with transaction logging
         */;
        _proto.addGold = /*#__PURE__*/
        function () {
          var _addGold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(amount, reason) {
            var oldGold, transaction;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (reason === void 0) {
                    reason = 'manual_add';
                  }
                  if (!(!this._resourceModel || amount <= 0)) {
                    _context5.next = 3;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 3:
                  oldGold = this._resourceModel.gold;
                  this._resourceModel.addGold(amount);
                  transaction = {
                    type: ResourceType.GOLD,
                    amount: amount,
                    reason: reason,
                    timestamp: Date.now(),
                    success: true
                  };
                  this.addTransaction(transaction);

                  // Sync with server if connected
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context5.next = 19;
                    break;
                  }
                  _context5.prev = 8;
                  _context5.next = 11;
                  return this._gameService.updatePlayerData({
                    resources: this._resourceModel.toJSON()
                  });
                case 11:
                  _context5.next = 19;
                  break;
                case 13:
                  _context5.prev = 13;
                  _context5.t0 = _context5["catch"](8);
                  logError('Failed to sync gold addition with server:', _context5.t0);
                  // Rollback on server sync failure
                  this._resourceModel.gold = oldGold;
                  transaction.success = false;
                  return _context5.abrupt("return", false);
                case 19:
                  return _context5.abrupt("return", true);
                case 20:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[8, 13]]);
          }));
          function addGold(_x, _x2) {
            return _addGold.apply(this, arguments);
          }
          return addGold;
        }()
        /**
         * Spend gold with validation and transaction logging
         */;

        _proto.spendGold = /*#__PURE__*/
        function () {
          var _spendGold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(amount, reason) {
            var _transaction, oldGold, success, transaction;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (reason === void 0) {
                    reason = 'manual_spend';
                  }
                  if (!(!this._resourceModel || amount <= 0)) {
                    _context6.next = 3;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 3:
                  if (this._resourceModel.hasEnoughGold(amount)) {
                    _context6.next = 8;
                    break;
                  }
                  _transaction = {
                    type: ResourceType.GOLD,
                    amount: -amount,
                    reason: reason,
                    timestamp: Date.now(),
                    success: false
                  };
                  this.addTransaction(_transaction);
                  this.emit('insufficientResources', {
                    type: ResourceType.GOLD,
                    required: amount,
                    available: this._resourceModel.gold
                  });
                  return _context6.abrupt("return", false);
                case 8:
                  oldGold = this._resourceModel.gold;
                  success = this._resourceModel.spendGold(amount);
                  transaction = {
                    type: ResourceType.GOLD,
                    amount: -amount,
                    reason: reason,
                    timestamp: Date.now(),
                    success: success
                  };
                  this.addTransaction(transaction);

                  // Sync with server if connected
                  if (!(success && this._gameService && this._gameService.isReady)) {
                    _context6.next = 24;
                    break;
                  }
                  _context6.prev = 13;
                  _context6.next = 16;
                  return this._gameService.updatePlayerData({
                    resources: this._resourceModel.toJSON()
                  });
                case 16:
                  _context6.next = 24;
                  break;
                case 18:
                  _context6.prev = 18;
                  _context6.t0 = _context6["catch"](13);
                  logError('Failed to sync gold spending with server:', _context6.t0);
                  // Rollback on server sync failure
                  this._resourceModel.gold = oldGold;
                  transaction.success = false;
                  return _context6.abrupt("return", false);
                case 24:
                  return _context6.abrupt("return", success);
                case 25:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[13, 18]]);
          }));
          function spendGold(_x3, _x4) {
            return _spendGold.apply(this, arguments);
          }
          return spendGold;
        }()
        /**
         * Add energy with transaction logging
         */;

        _proto.addEnergy = /*#__PURE__*/
        function () {
          var _addEnergy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(amount, reason) {
            var oldEnergy, transaction;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (reason === void 0) {
                    reason = 'manual_add';
                  }
                  if (!(!this._resourceModel || amount <= 0)) {
                    _context7.next = 3;
                    break;
                  }
                  return _context7.abrupt("return", false);
                case 3:
                  oldEnergy = this._resourceModel.energy;
                  this._resourceModel.addEnergy(amount);
                  transaction = {
                    type: ResourceType.ENERGY,
                    amount: amount,
                    reason: reason,
                    timestamp: Date.now(),
                    success: true
                  };
                  this.addTransaction(transaction);

                  // Sync with server if connected
                  if (!(this._gameService && this._gameService.isReady)) {
                    _context7.next = 19;
                    break;
                  }
                  _context7.prev = 8;
                  _context7.next = 11;
                  return this._gameService.updatePlayerData({
                    resources: this._resourceModel.toJSON()
                  });
                case 11:
                  _context7.next = 19;
                  break;
                case 13:
                  _context7.prev = 13;
                  _context7.t0 = _context7["catch"](8);
                  logError('Failed to sync energy addition with server:', _context7.t0);
                  // Rollback on server sync failure
                  this._resourceModel.energy = oldEnergy;
                  transaction.success = false;
                  return _context7.abrupt("return", false);
                case 19:
                  return _context7.abrupt("return", true);
                case 20:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[8, 13]]);
          }));
          function addEnergy(_x5, _x6) {
            return _addEnergy.apply(this, arguments);
          }
          return addEnergy;
        }()
        /**
         * Spend energy with validation and transaction logging
         */;

        _proto.spendEnergy = /*#__PURE__*/
        function () {
          var _spendEnergy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(amount, reason) {
            var _transaction2, oldEnergy, success, transaction;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (reason === void 0) {
                    reason = 'manual_spend';
                  }
                  if (!(!this._resourceModel || amount <= 0)) {
                    _context8.next = 3;
                    break;
                  }
                  return _context8.abrupt("return", false);
                case 3:
                  if (this._resourceModel.hasEnoughEnergy(amount)) {
                    _context8.next = 8;
                    break;
                  }
                  _transaction2 = {
                    type: ResourceType.ENERGY,
                    amount: -amount,
                    reason: reason,
                    timestamp: Date.now(),
                    success: false
                  };
                  this.addTransaction(_transaction2);
                  this.emit('insufficientResources', {
                    type: ResourceType.ENERGY,
                    required: amount,
                    available: this._resourceModel.energy
                  });
                  return _context8.abrupt("return", false);
                case 8:
                  oldEnergy = this._resourceModel.energy;
                  success = this._resourceModel.spendEnergy(amount);
                  transaction = {
                    type: ResourceType.ENERGY,
                    amount: -amount,
                    reason: reason,
                    timestamp: Date.now(),
                    success: success
                  };
                  this.addTransaction(transaction);

                  // Sync with server if connected
                  if (!(success && this._gameService && this._gameService.isReady)) {
                    _context8.next = 24;
                    break;
                  }
                  _context8.prev = 13;
                  _context8.next = 16;
                  return this._gameService.updatePlayerData({
                    resources: this._resourceModel.toJSON()
                  });
                case 16:
                  _context8.next = 24;
                  break;
                case 18:
                  _context8.prev = 18;
                  _context8.t0 = _context8["catch"](13);
                  logError('Failed to sync energy spending with server:', _context8.t0);
                  // Rollback on server sync failure
                  this._resourceModel.energy = oldEnergy;
                  transaction.success = false;
                  return _context8.abrupt("return", false);
                case 24:
                  return _context8.abrupt("return", success);
                case 25:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this, [[13, 18]]);
          }));
          function spendEnergy(_x7, _x8) {
            return _spendEnergy.apply(this, arguments);
          }
          return spendEnergy;
        }()
        /**
         * Check if player has enough resources
         */;

        _proto.hasEnoughGold = function hasEnoughGold(amount) {
          return this._resourceModel ? this._resourceModel.hasEnoughGold(amount) : false;
        }

        /**
         * Check if player has enough energy
         */;
        _proto.hasEnoughEnergy = function hasEnoughEnergy(amount) {
          return this._resourceModel ? this._resourceModel.hasEnoughEnergy(amount) : false;
        }

        /**
         * Get time until next energy regeneration
         */;
        _proto.getTimeUntilNextEnergyRegen = function getTimeUntilNextEnergyRegen() {
          return this._resourceModel ? this._resourceModel.getTimeUntilNextRegen() : 0;
        }

        /**
         * Add transaction to history
         */;
        _proto.addTransaction = function addTransaction(transaction) {
          this._transactionHistory.push(transaction);

          // Keep history size manageable
          if (this._transactionHistory.length > this.MAX_TRANSACTION_HISTORY) {
            this._transactionHistory.shift();
          }
          this.emit('transactionAdded', transaction);
        }

        /**
         * Get transaction history
         */;
        _proto.getTransactionHistory = function getTransactionHistory(type, limit) {
          var history = this._transactionHistory;
          if (type) {
            history = history.filter(function (t) {
              return t.type === type;
            });
          }
          if (limit && limit > 0) {
            history = history.slice(-limit);
          }
          return [].concat(history);
        }

        /**
         * Clear transaction history
         */;
        _proto.clearTransactionHistory = function clearTransactionHistory() {
          this._transactionHistory = [];
          this.emit('transactionHistoryCleared');
        }

        /**
         * Get resource statistics
         */;
        _proto.getResourceStats = function getResourceStats() {
          var goldTransactions = this._transactionHistory.filter(function (t) {
            return t.type === ResourceType.GOLD && t.success;
          });
          var energyTransactions = this._transactionHistory.filter(function (t) {
            return t.type === ResourceType.ENERGY && t.success;
          });
          var goldEarned = goldTransactions.filter(function (t) {
            return t.amount > 0;
          }).reduce(function (sum, t) {
            return sum + t.amount;
          }, 0);
          var goldSpent = goldTransactions.filter(function (t) {
            return t.amount < 0;
          }).reduce(function (sum, t) {
            return sum + Math.abs(t.amount);
          }, 0);
          var energyEarned = energyTransactions.filter(function (t) {
            return t.amount > 0;
          }).reduce(function (sum, t) {
            return sum + t.amount;
          }, 0);
          var energySpent = energyTransactions.filter(function (t) {
            return t.amount < 0;
          }).reduce(function (sum, t) {
            return sum + Math.abs(t.amount);
          }, 0);
          return {
            currentGold: this.getGold(),
            currentEnergy: this.getEnergy(),
            maxEnergy: this.getMaxEnergy(),
            goldEarned: goldEarned,
            goldSpent: goldSpent,
            goldNet: goldEarned - goldSpent,
            energyEarned: energyEarned,
            energySpent: energySpent,
            energyNet: energyEarned - energySpent,
            timeUntilNextEnergyRegen: this.getTimeUntilNextEnergyRegen(),
            transactionCount: this._transactionHistory.length
          };
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          this.stopPeriodicSync();

          // Don't destroy the ResourceModel as it's owned by PlayerModel
          // Just clear our reference to it
          this._resourceModel = null;
          this._playerModel = null;
          this._gameService = null;
          this._transactionHistory = [];
          _BaseService.prototype.destroy.call(this);
        };
        return ResourceManager;
      }(BaseService));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceManagerExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceLocator.ts', './Logger.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, ServiceLocator, logInfo;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ServiceLocator = module.ServiceLocator;
    }, function (module) {
      logInfo = module.logInfo;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dfe48Nm2WpDcbG8NfuDsnMS", "ResourceManagerExample", undefined);

      /**
       * Example class showing proper resource management flow
       */
      var ResourceManagerExample = exports('ResourceManagerExample', /*#__PURE__*/function () {
        function ResourceManagerExample() {}
        /**
         * Demonstrate the corrected architecture where ResourceManager 
         * uses PlayerModel's ResourceModel as single source of truth
         */
        ResourceManagerExample.demonstrateCorrectArchitecture = /*#__PURE__*/
        function () {
          var _demonstrateCorrectArchitecture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var serviceLocator, gameService, playerModel, resourceManager, goldFromPlayer, goldFromManager, success, newGoldFromPlayer, newGoldFromManager, initialEnergy, energySpent, newEnergy, playerEnergy;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  logInfo('=== ResourceManager Architecture Demo ===');

                  // 1. Get GameService instance (which owns PlayerModel)
                  serviceLocator = ServiceLocator.getInstance();
                  gameService = serviceLocator.getService('GameService');
                  if (gameService) {
                    _context.next = 6;
                    break;
                  }
                  logInfo('ERROR: GameService not initialized');
                  return _context.abrupt("return");
                case 6:
                  // 2. Get PlayerModel from GameService
                  playerModel = gameService.getPlayerModel();
                  if (playerModel) {
                    _context.next = 10;
                    break;
                  }
                  logInfo('ERROR: PlayerModel not found in GameService');
                  return _context.abrupt("return");
                case 10:
                  // 3. Get ResourceManager service
                  resourceManager = serviceLocator.getService('ResourceManager');
                  if (resourceManager) {
                    _context.next = 14;
                    break;
                  }
                  logInfo('ERROR: ResourceManager service not found');
                  return _context.abrupt("return");
                case 14:
                  logInfo('✓ All components initialized successfully');

                  // 4. Demonstrate single source of truth
                  logInfo('\n--- Demonstrating Single Source of Truth ---');

                  // Check initial gold from both sources
                  goldFromPlayer = playerModel.resources.gold;
                  goldFromManager = resourceManager.getGold();
                  logInfo("Initial Gold - PlayerModel: " + goldFromPlayer + ", ResourceManager: " + goldFromManager);
                  logInfo("Same instance? " + (playerModel.resources === resourceManager.getResourceModel()));

                  // 5. Perform resource operation through ResourceManager
                  logInfo('\n--- Adding 100 gold through ResourceManager ---');
                  _context.next = 23;
                  return resourceManager.addGold(100, 'demo_reward');
                case 23:
                  success = _context.sent;
                  if (success) {
                    // Check gold from both sources after operation
                    newGoldFromPlayer = playerModel.resources.gold;
                    newGoldFromManager = resourceManager.getGold();
                    logInfo("After adding gold - PlayerModel: " + newGoldFromPlayer + ", ResourceManager: " + newGoldFromManager);
                    logInfo("\u2713 Both sources show same value: " + (newGoldFromPlayer === newGoldFromManager));
                  } else {
                    logInfo('✗ Failed to add gold');
                  }

                  // 6. Demonstrate energy operations
                  logInfo('\n--- Testing Energy Operations ---');
                  initialEnergy = resourceManager.getEnergy();
                  logInfo("Initial Energy: " + initialEnergy);

                  // Spend some energy
                  _context.next = 30;
                  return resourceManager.spendEnergy(5, 'demo_action');
                case 30:
                  energySpent = _context.sent;
                  if (energySpent) {
                    newEnergy = resourceManager.getEnergy();
                    playerEnergy = playerModel.resources.energy;
                    logInfo("After spending 5 energy - ResourceManager: " + newEnergy + ", PlayerModel: " + playerEnergy);
                    logInfo("\u2713 Consistent values: " + (newEnergy === playerEnergy));
                  }
                  logInfo('\n=== Demo Complete ===');
                case 33:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function demonstrateCorrectArchitecture() {
            return _demonstrateCorrectArchitecture.apply(this, arguments);
          }
          return demonstrateCorrectArchitecture;
        }()
        /**
         * Demonstrate what would happen with the old broken architecture
         * (for comparison purposes - this shows the problem we fixed)
         */;

        ResourceManagerExample.demonstrateBrokenArchitecture = function demonstrateBrokenArchitecture() {
          logInfo('\n=== OLD BROKEN ARCHITECTURE (for comparison) ===');
          logInfo('In the old architecture:');
          logInfo('1. ResourceManager created: new ResourceModel() // Instance A');
          logInfo('2. PlayerModel created: new ResourceModel()     // Instance B');
          logInfo('3. ResourceManager.addGold(100) -> updates Instance A');
          logInfo('4. PlayerModel.resources.gold -> returns value from Instance B');
          logInfo('5. Result: INCONSISTENT DATA! Instance A ≠ Instance B');
          logInfo('');
          logInfo('NEW FIXED ARCHITECTURE:');
          logInfo('1. PlayerModel creates: new ResourceModel()     // Single Instance');
          logInfo('2. ResourceManager gets reference to PlayerModel.resources');
          logInfo('3. ResourceManager.addGold(100) -> updates Single Instance');
          logInfo('4. PlayerModel.resources.gold -> returns value from Same Instance');
          logInfo('5. Result: CONSISTENT DATA! ✓');
        };
        return ResourceManagerExample;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts', './BaseModel.ts', './Logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameConfig, BaseModel, logInfo;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      BaseModel = module.BaseModel;
    }, function (module) {
      logInfo = module.logInfo;
    }],
    execute: function () {
      cclegacy._RF.push({}, "abc9dw0OmhIvITLBBpLksiD", "ResourceModel", undefined);

      /**
       * Resource types in the game
       */
      var ResourceType = exports('ResourceType', /*#__PURE__*/function (ResourceType) {
        ResourceType["GOLD"] = "gold";
        ResourceType["ENERGY"] = "energy";
        return ResourceType;
      }({}));

      /**
       * Resource data structure
       */

      /**
       * Resource Model - Manages Gold and Energy
       */
      var ResourceModel = exports('ResourceModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(ResourceModel, _BaseModel);
        function ResourceModel() {
          var _this;
          _this = _BaseModel.call(this) || this;
          _this._energyRegenTimer = 0;
          _this.RESOURCE_CONFIG = GameConfig.getInstance().getResourceConfig();
          _this.initializeDefaults();
          _this.startEnergyRegeneration();
          return _this;
        }

        /**
         * Initialize default values
         */
        var _proto = ResourceModel.prototype;
        _proto.initializeDefaults = function initializeDefaults() {
          this.setData('gold', 0);
          this.setData('energy', this.RESOURCE_CONFIG.maxEnergy);
          this.setData('maxEnergy', this.RESOURCE_CONFIG.maxEnergy);
          this.setData('lastEnergyRegenTime', Date.now());
        }

        /**
         * Get current gold amount
         */;
        /**
         * Add gold
         */
        _proto.addGold = function addGold(amount) {
          this.gold += amount;
        }

        /**
         * Spend gold
         */;
        _proto.spendGold = function spendGold(amount) {
          if (this.gold >= amount) {
            this.gold -= amount;
            return true;
          }
          return false;
        }

        /**
         * Add energy
         */;
        _proto.addEnergy = function addEnergy(amount) {
          this.energy += amount;
        }

        /**
         * Spend energy
         */;
        _proto.spendEnergy = function spendEnergy(amount) {
          if (this.energy >= amount) {
            this.energy -= amount;
            return true;
          }
          return false;
        }

        /**
         * Check if player has enough resources
         */;
        _proto.hasEnoughGold = function hasEnoughGold(amount) {
          return this.gold >= amount;
        }

        /**
         * Check if player has enough energy
         */;
        _proto.hasEnoughEnergy = function hasEnoughEnergy(amount) {
          return this.energy >= amount;
        }

        /**
         * Start energy regeneration timer
         */;
        _proto.startEnergyRegeneration = function startEnergyRegeneration() {
          var _this2 = this;
          // Calculate missed regenerations since last time
          this.calculateMissedRegeneration();

          // Start periodic regeneration
          this._energyRegenTimer = setInterval(function () {
            _this2.calculateMissedRegeneration();
          }, 1000);
        }

        /**
         * Calculate and apply missed energy regeneration
         */;
        _proto.calculateMissedRegeneration = function calculateMissedRegeneration() {
          var lastRegenTime = this.getData('lastEnergyRegenTime') || Date.now();
          var currentTime = Date.now();
          var timeDiff = currentTime - lastRegenTime;
          if (timeDiff >= this.RESOURCE_CONFIG.energyRegenInterval) {
            var missedRegens = Math.floor(timeDiff / this.RESOURCE_CONFIG.energyRegenInterval);
            var energyToAdd = Math.min(missedRegens, this.maxEnergy - this.energy);
            if (energyToAdd > 0) {
              this.energy += energyToAdd;
              logInfo("Regenerated " + energyToAdd + " energy from missed time");
            }
            this.setData('lastEnergyRegenTime', currentTime);
          }
        }

        /**
         * Get time until next energy regeneration (in milliseconds)
         */;
        _proto.getTimeUntilNextRegen = function getTimeUntilNextRegen() {
          if (this.energy >= this.maxEnergy) {
            return 0;
          }
          var lastRegenTime = this.getData('lastEnergyRegenTime') || Date.now();
          var nextRegenTime = lastRegenTime + this.RESOURCE_CONFIG.energyRegenInterval;
          var currentTime = Date.now();
          return Math.max(0, nextRegenTime - currentTime);
        }

        /**
         * Validate model data
         */;
        _proto.validate = function validate() {
          var gold = this.gold;
          var energy = this.energy;
          var maxEnergy = this.maxEnergy;
          return gold >= 0 && energy >= 0 && maxEnergy > 0 && energy <= maxEnergy * 2; // Allow some overflow
        }

        /**
         * Cleanup resources
         */;
        _proto.destroy = function destroy() {
          if (this._energyRegenTimer) {
            clearInterval(this._energyRegenTimer);
            this._energyRegenTimer = 0;
          }
          _BaseModel.prototype.reset.call(this);
        }

        /**
         * Serialize to JSON
         */;
        _proto.toJSON = function toJSON() {
          return {
            gold: this.gold,
            energy: this.energy,
            lastEnergyRegenTime: this.getData('lastEnergyRegenTime') || Date.now()
          };
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(data) {
          this.gold = data.gold || 0;
          this.energy = data.energy || 0;
          this.setData('lastEnergyRegenTime', data.lastEnergyRegenTime || Date.now());

          // Recalculate missed regeneration
          this.calculateMissedRegeneration();
        };
        _createClass(ResourceModel, [{
          key: "gold",
          get: function get() {
            return this.getData('gold') || 0;
          }

          /**
           * Set gold amount
           */,
          set: function set(value) {
            this.setData('gold', Math.max(0, value));
          }

          /**
           * Get current energy amount
           */
        }, {
          key: "energy",
          get: function get() {
            return this.getData('energy') || 0;
          }

          /**
           * Set energy amount
           */,
          set: function set(value) {
            var maxEnergy = this.maxEnergy;
            this.setData('energy', Math.max(0, value));
            // Update last regen time if energy is at max
            if (value >= maxEnergy) {
              this.setData('lastEnergyRegenTime', Date.now());
            }
          }

          /**
           * Get maximum energy capacity
           */
        }, {
          key: "maxEnergy",
          get: function get() {
            return this.getData('maxEnergy') || this.RESOURCE_CONFIG.maxEnergy;
          }

          /**
           * Set maximum energy capacity
           */,
          set: function set(value) {
            this.setData('maxEnergy', Math.max(1, value));
          }
        }]);
        return ResourceModel;
      }(BaseModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RevealWave.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, log, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      log = module.log;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "c60bbOCpWZGR7aIz78tdm2k", "RevealWave", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RevealWave = exports('RevealWave', (_dec = ccclass('RevealWave'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RevealWave, _Component);
        function RevealWave() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveAmplitude", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveFrequency", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundness", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edgeSoftness", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveSpeed", _descriptor7, _assertThisInitialized(_this));
          // tốc độ chạy pha (rad/giây)
          _this._mat = null;
          _this._time = 0;
          return _this;
        }
        var _proto = RevealWave.prototype;
        _proto.update = function update(dt) {
          if (!this._mat) return;
          this._time += dt;
          var t = Math.min(this._time / this.duration, 1.0);
          this._mat.setProperty('reveal', t);
          log("reveal ", this._mat.getProperty('reveal'), t);
          if (t < 1.0) {
            var phase = this._time * this.waveSpeed;
            this._mat.setProperty('wavePhase', phase);
            log('wavePhase ', phase);
          } else {
            // Khóa full ảnh: tắt sóng và dừng update
            this._mat.setProperty('reveal', 1.0);
            this._mat.setProperty('waveAmplitude', 0.0);
            this._mat.setProperty('edgeSoftness', 0.0);
            this.enabled = false;
          }
        };
        _proto.restart = function restart() {
          var _this$sprite;
          var sp = (_this$sprite = this.sprite) != null ? _this$sprite : this.getComponent(Sprite);
          if (!sp || !sp.customMaterial) return; // cần gán Custom Material dùng effect ở trên

          // Lấy material instance từ Sprite (tránh clone shared asset)
          var inst = sp.material;
          // Fallback nếu môi trường không expose .material
          // @ts-ignore
          if (!inst && sp.getMaterialInstance) inst = sp.getMaterialInstance(0);
          this._mat = inst;

          // Khởi tạo tham số shader
          this._mat.setProperty('reveal', 0.0);
          this._mat.setProperty('waveAmplitude', this.waveAmplitude);
          this._mat.setProperty('waveFrequency', this.waveFrequency);
          this._mat.setProperty('roundness', this.roundness);
          this._mat.setProperty('edgeSoftness', this.edgeSoftness);
          this._mat.setProperty('wavePhase', 0.0);
          this._time = 0;
          this.enabled = true;
        };
        _proto.stop = function stop() {
          this.enabled = false;
        };
        return RevealWave;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waveAmplitude", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.08;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "waveFrequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "roundness", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "edgeSoftness", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "waveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServiceLocator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, logWarn, logError;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      logWarn = module.logWarn;
      logError = module.logError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54db839dB1JkIxlZ3v2tUJ6", "ServiceLocator", undefined);

      /**
       * Service Locator pattern implementation for dependency injection
       */
      var ServiceLocator = exports('ServiceLocator', /*#__PURE__*/function () {
        function ServiceLocator() {
          this._services = new Map();
        }

        /**
         * Get singleton instance
         */
        ServiceLocator.getInstance = function getInstance() {
          if (!ServiceLocator._instance) {
            ServiceLocator._instance = new ServiceLocator();
          }
          return ServiceLocator._instance;
        }

        /**
         * Register a service
         */;
        var _proto = ServiceLocator.prototype;
        _proto.registerService = function registerService(name, service) {
          if (this._services.has(name)) {
            logWarn("Service " + name + " is already registered. Replacing existing service.");
            var existingService = this._services.get(name);
            if (existingService) {
              existingService.destroy();
            }
          }
          this._services.set(name, service);
        }

        /**
         * Get a service by name
         */;
        _proto.getService = function getService(name) {
          var service = this._services.get(name);
          return service || null;
        }

        /**
         * Check if service exists
         */;
        _proto.hasService = function hasService(name) {
          return this._services.has(name);
        }

        /**
         * Unregister a service
         */;
        _proto.unregisterService = function unregisterService(name) {
          var service = this._services.get(name);
          if (service) {
            service.destroy();
            this._services["delete"](name);
          }
        }

        /**
         * Initialize all registered services
         */;
        _proto.initializeAllServices = /*#__PURE__*/
        function () {
          var _initializeAllServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var initPromises, _loop, _iterator, _step;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  initPromises = [];
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var _step$value, name, service;
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _step$value = _step.value, name = _step$value[0], service = _step$value[1];
                          if (!service.isInitialized) {
                            initPromises.push(service.initialize()["catch"](function (error) {
                              logError("Failed to initialize service " + name + ":", error);
                              throw error;
                            }));
                          }
                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  _iterator = _createForOfIteratorHelperLoose(this._services);
                case 3:
                  if ((_step = _iterator()).done) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.delegateYield(_loop(), "t0", 5);
                case 5:
                  _context2.next = 3;
                  break;
                case 7:
                  _context2.next = 9;
                  return Promise.all(initPromises);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function initializeAllServices() {
            return _initializeAllServices.apply(this, arguments);
          }
          return initializeAllServices;
        }()
        /**
         * Connect all services that support connection
         */;

        _proto.connectAllServices = /*#__PURE__*/
        function () {
          var _connectAllServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var connectPromises, _loop2, _iterator2, _step2;
            return _regeneratorRuntime().wrap(function _callee2$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  connectPromises = [];
                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                    var _step2$value, name, service;
                    return _regeneratorRuntime().wrap(function _loop2$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          _step2$value = _step2.value, name = _step2$value[0], service = _step2$value[1];
                          if (service.isInitialized && !service.isConnected) {
                            connectPromises.push(service.connect()["catch"](function (error) {
                              logError("Failed to connect service " + name + ":", error);
                              throw error;
                            }));
                          }
                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }, _loop2);
                  });
                  _iterator2 = _createForOfIteratorHelperLoose(this._services);
                case 3:
                  if ((_step2 = _iterator2()).done) {
                    _context4.next = 7;
                    break;
                  }
                  return _context4.delegateYield(_loop2(), "t0", 5);
                case 5:
                  _context4.next = 3;
                  break;
                case 7:
                  _context4.next = 9;
                  return Promise.all(connectPromises);
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee2, this);
          }));
          function connectAllServices() {
            return _connectAllServices.apply(this, arguments);
          }
          return connectAllServices;
        }()
        /**
         * Cleanup all services
         */;

        _proto.destroyAllServices = function destroyAllServices() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._services), _step3; !(_step3 = _iterator3()).done;) {
            var _step3$value = _step3.value,
              name = _step3$value[0],
              service = _step3$value[1];
            try {
              service.destroy();
            } catch (error) {
              logError("Error destroying service " + name + ":", error);
            }
          }
          this._services.clear();
        }

        /**
         * Get all registered service names
         */;
        _proto.getServiceNames = function getServiceNames() {
          return Array.from(this._services.keys());
        };
        return ServiceLocator;
      }());
      ServiceLocator._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimpleCityModelTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CityModel.ts', './GameConfig.ts', './Logger.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, CityModel, GameConfig, logInfo, logError;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CityModel = module.CityModel;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      logInfo = module.logInfo;
      logError = module.logError;
    }],
    execute: function () {
      exports('runSimpleCityModelTests', runSimpleCityModelTests);
      cclegacy._RF.push({}, "e5f6g7h8-i9j0-1234-efgh-567890123456", "SimpleCityModelTest", undefined);

      /**
       * Simple test to verify the refactored CityModel works with existing GameConfig
       */
      var SimpleCityModelTest = exports('SimpleCityModelTest', /*#__PURE__*/function () {
        function SimpleCityModelTest() {}
        /**
         * Test that CityModel uses GameConfig correctly
         */
        SimpleCityModelTest.testCityModelWithGameConfig = /*#__PURE__*/
        function () {
          var _testCityModelWithGameConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var gameConfig, village, villageBuildings, town, townBuildings, expectedTypes, expectedCount, villageHouse, townHouse, villageData, newVillage;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  logInfo('Testing CityModel with GameConfig...');

                  // Initialize GameConfig
                  gameConfig = GameConfig.getInstance();
                  _context.next = 5;
                  return gameConfig.loadConfig();
                case 5:
                  // Test Level 1 City (Village)
                  village = new CityModel('test_village', 'Test Village', 1);
                  villageBuildings = village.getBuildings();
                  logInfo("Level 1 Village: " + villageBuildings.length + " buildings");
                  villageBuildings.forEach(function (building, index) {
                    logInfo("  " + (index + 1) + ". " + building.name + " (" + building.type + ") - Cost: " + building.baseCost);
                  });

                  // Test Level 2 City (Town)
                  town = new CityModel('test_town', 'Test Town', 2);
                  townBuildings = town.getBuildings();
                  logInfo("Level 2 Town: " + townBuildings.length + " buildings");
                  townBuildings.forEach(function (building, index) {
                    logInfo("  " + (index + 1) + ". " + building.name + " (" + building.type + ") - Cost: " + building.baseCost);
                  });

                  // Verify backward compatibility - should match original hardcoded values
                  expectedTypes = ['house', 'shop', 'factory', 'tower', 'castle'];
                  expectedCount = 5;
                  if (!(villageBuildings.length !== expectedCount)) {
                    _context.next = 17;
                    break;
                  }
                  throw new Error("Expected " + expectedCount + " buildings, got " + villageBuildings.length);
                case 17:
                  villageBuildings.forEach(function (building, index) {
                    if (building.type !== expectedTypes[index]) {
                      throw new Error("Expected building type " + expectedTypes[index] + ", got " + building.type);
                    }
                  });

                  // Test building costs are from configuration
                  villageHouse = villageBuildings.find(function (b) {
                    return b.type === 'house';
                  });
                  townHouse = townBuildings.find(function (b) {
                    return b.type === 'house';
                  });
                  if (!(villageHouse && townHouse)) {
                    _context.next = 25;
                    break;
                  }
                  logInfo("Village house cost: " + villageHouse.baseCost);
                  logInfo("Town house cost: " + townHouse.baseCost);
                  if (!(townHouse.baseCost <= villageHouse.baseCost)) {
                    _context.next = 25;
                    break;
                  }
                  throw new Error('Town buildings should cost more than village buildings');
                case 25:
                  if (village.validate()) {
                    _context.next = 27;
                    break;
                  }
                  throw new Error('Village validation failed');
                case 27:
                  if (town.validate()) {
                    _context.next = 29;
                    break;
                  }
                  throw new Error('Town validation failed');
                case 29:
                  // Test serialization
                  villageData = village.toJSON();
                  newVillage = new CityModel('temp', 'temp', 1);
                  newVillage.fromJSON(villageData);
                  if (!(newVillage.getBuildings().length !== village.getBuildings().length)) {
                    _context.next = 34;
                    break;
                  }
                  throw new Error('Serialization failed - building count mismatch');
                case 34:
                  logInfo('✅ All tests passed! CityModel successfully uses GameConfig.');
                  _context.next = 41;
                  break;
                case 37:
                  _context.prev = 37;
                  _context.t0 = _context["catch"](0);
                  logError('❌ Test failed:', _context.t0);
                  throw _context.t0;
                case 41:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 37]]);
          }));
          function testCityModelWithGameConfig() {
            return _testCityModelWithGameConfig.apply(this, arguments);
          }
          return testCityModelWithGameConfig;
        }()
        /**
         * Test fallback behavior when no config is available
         */;

        SimpleCityModelTest.testFallbackBehavior = function testFallbackBehavior() {
          try {
            logInfo('Testing fallback behavior...');

            // Test with a city level that doesn't exist in config
            var unknownCity = new CityModel('unknown_city', 'Unknown City', 99);
            var buildings = unknownCity.getBuildings();

            // Should fallback to default values
            var expectedTypes = ['house', 'shop', 'factory', 'tower', 'castle'];
            var expectedCount = 5;
            if (buildings.length !== expectedCount) {
              throw new Error("Fallback failed: Expected " + expectedCount + " buildings, got " + buildings.length);
            }
            buildings.forEach(function (building, index) {
              if (building.type !== expectedTypes[index]) {
                throw new Error("Fallback failed: Expected building type " + expectedTypes[index] + ", got " + building.type);
              }
            });
            logInfo('✅ Fallback behavior works correctly.');
          } catch (error) {
            logError('❌ Fallback test failed:', error);
            throw error;
          }
        };
        return SimpleCityModelTest;
      }());

      /**
       * Run all tests
       */
      function runSimpleCityModelTests() {
        return _runSimpleCityModelTests.apply(this, arguments);
      }
      function _runSimpleCityModelTests() {
        _runSimpleCityModelTests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                logInfo('=== Running Simple CityModel Tests ===');
                _context2.next = 3;
                return SimpleCityModelTest.testCityModelWithGameConfig();
              case 3:
                SimpleCityModelTest.testFallbackBehavior();
                logInfo('=== All Simple CityModel Tests Completed Successfully! ===');
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return _runSimpleCityModelTests.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMachineComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ReelComponent.ts', './AnimationConfig.ts', './RevealWave.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Button, Label, UIOpacity, Tween, tween, log, Vec3, Component, ReelComponent, AnimationConfig, RevealWave;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      log = module.log;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ReelComponent = module.ReelComponent;
    }, function (module) {
      AnimationConfig = module.AnimationConfig;
    }, function (module) {
      RevealWave = module.RevealWave;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "76923hm7JhMgLe6lmDG3Omp", "SlotMachineComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotMachineComponent = exports('SlotMachineComponent', (_dec = ccclass('SlotMachineComponent'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(Button), _dec9 = property(Label), _dec10 = property(Button), _dec11 = property(UIOpacity), _dec12 = property(RevealWave), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMachineComponent, _Component);
        function SlotMachineComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "reelsContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spinButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spinButtonLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betIncreaseButton", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betDecreaseButton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betMultiplierLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betChangeButton", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoSpinButton", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoSpinButtonOpacity", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoSpinWave", _descriptor11, _assertThisInitialized(_this));
          _this.reelComponents = [];
          _this._viewModel = null;
          _this._animationConfig = void 0;
          // Reel completion tracking
          _this._reelCompletionStates = [false, false, false];
          _this._currentSpinResult = null;
          // Suspense spinning tracking
          _this._suspenseSpinActive = false;
          _this._firstTwoReelsMatch = false;
          _this._originalBetButtonPos = null;
          _this._originalSpinButtonPos = null;
          _this._spinButtonState = 'idle';
          return _this;
        }
        var _proto = SlotMachineComponent.prototype;
        _proto.setViewModel = function setViewModel(viewModel) {
          this._viewModel = viewModel;
          this.setupEventListeners();
          // updateUI() will now be called by the 'dataLoaded' event to prevent premature UI updates.
        };

        _proto.onLoad = function onLoad() {
          this.reelComponents = this.reelsContainer.getComponentsInChildren(ReelComponent);
          this._animationConfig = AnimationConfig.getInstance();
          if (this.betChangeButton) {
            this._originalBetButtonPos = this.betChangeButton.node.position.clone();
          }
          if (this.spinButton) {
            this._originalSpinButtonPos = this.spinButton.node.position.clone();
          }
          this.bindEvents();
        };
        _proto.onDestroy = function onDestroy() {
          this.unbindEvents();
        };
        _proto.bindEvents = function bindEvents() {
          if (this.spinButton) {
            // this.spinButton.node.on(Button.EventType.CLICK, this.onSpinClicked, this);
            this.spinButton.node.on(Node.EventType.TOUCH_START, this.onSpinTouchStart, this);
            this.spinButton.node.on(Node.EventType.TOUCH_END, this.onSpinTouchEnd, this);
            this.spinButton.node.on(Node.EventType.TOUCH_CANCEL, this.onSpinTouchEnd, this);
          }
          if (this.betIncreaseButton) {
            this.betIncreaseButton.node.on(Button.EventType.CLICK, this.onBetIncreaseClicked, this);
          }
          if (this.betDecreaseButton) {
            this.betDecreaseButton.node.on(Button.EventType.CLICK, this.onBetDecreaseClicked, this);
          }
          if (this.betChangeButton) {
            this.betChangeButton.node.on(Node.EventType.TOUCH_START, this.onBetChangeTouchStart, this);
          }
          if (this.autoSpinButton) {
            this.autoSpinButton.node.on(Button.EventType.CLICK, this.onAutoSpinClicked, this);
          }
        };
        _proto.unbindEvents = function unbindEvents() {
          if (this._viewModel) {
            this._viewModel.off('dataLoaded', this.onDataLoaded, this);
            this._viewModel.off('spinStarted', this.onSpinStarted, this);
            this._viewModel.off('spinCompleted', this.onSpinCompleted, this);
            this._viewModel.off('betMultiplierChanged', this.updateUI, this);
            this._viewModel.off('betMultiplierIncreaseBlocked', this.onBetMultiplierIncreaseBlocked, this);
            this._viewModel.off('resourceUpdated', this.updateUI, this);
            this._viewModel.off('autoSpinStateChanged', this.onAutoSpinStateChanged, this);
          }
        };
        _proto.setupEventListeners = function setupEventListeners() {
          if (!this._viewModel) return;
          this.unbindEvents(); // Ensure no duplicate listeners
          this._viewModel.on('dataLoaded', this.onDataLoaded, this);
          this._viewModel.on('spinStarted', this.onSpinStarted, this);
          this._viewModel.on('spinCompleted', this.onSpinCompleted, this);
          this._viewModel.on('betMultiplierChanged', this.updateUI, this);
          this._viewModel.on('betMultiplierIncreaseBlocked', this.onBetMultiplierIncreaseBlocked, this);
          this._viewModel.on('resourceUpdated', this.updateUI, this);
          this._viewModel.on('autoSpinStateChanged', this.onAutoSpinStateChanged, this);
          this._viewModel.on('animationProfileChanged', this.onAnimationProfileChanged, this);
        };
        _proto.onDataLoaded = function onDataLoaded() {
          if (!this._viewModel) return;
          var symbols = this._viewModel.symbols;
          for (var i = 0; i < this.reelComponents.length; i++) {
            var reel = this.reelComponents[i];
            reel.initialize(i, symbols);
            // Listen for completion events from each reel
            reel.node.on('reelSpinComplete', this.onReelSpinComplete, this);
          }
          this.updateUI();
        };
        _proto.onSpinStarted = function onSpinStarted(spinResult) {
          if (!this._viewModel) return;

          // Reset reel completion tracking for new spin
          this._reelCompletionStates = [false, false, false];
          this._currentSpinResult = spinResult;

          // Check for suspense spinning conditions (only during manual spins, not auto-spin)
          var isAutoSpinning = this._viewModel.isAutoSpinning;
          this._firstTwoReelsMatch = this.checkFirstTwoReelsMatch(spinResult);
          this._suspenseSpinActive = !isAutoSpinning && this._firstTwoReelsMatch && this.shouldTriggerSuspenseSpin();
          // Apply suspense animation profile if needed
          if (this._suspenseSpinActive) {
            this._animationConfig.setProfile('suspense');
            // Update all reel configurations immediately
            for (var _iterator = _createForOfIteratorHelperLoose(this.reelComponents), _step; !(_step = _iterator()).done;) {
              var reel = _step.value;
              reel.updateConfig();
            }
          }
          var reelResults = spinResult.reelResults;
          if (reelResults && reelResults.length > 0) {
            var finalSymbolsArray = reelResults[0];
            for (var i = 0; i < this.reelComponents.length; i++) {
              var _reel = this.reelComponents[i];
              var finalSymbolForReel = finalSymbolsArray[i] ? [finalSymbolsArray[i]] : [];
              _reel.startSpin(finalSymbolForReel);
            }
          }
          this.updateUI();
        }

        /**
         * Handle individual reel spin completion
         */;
        _proto.onReelSpinComplete = function onReelSpinComplete(event) {
          var reelIndex = event.reelIndex;

          // Mark this reel as completed
          if (reelIndex >= 0 && reelIndex < this._reelCompletionStates.length) {
            this._reelCompletionStates[reelIndex] = true;

            // Check if all reels have completed
            if (this._reelCompletionStates.every(function (completed) {
              return completed;
            })) {
              this.onAllReelsCompleted();
            }
          }
        }

        /**
         * Handle when all reels have completed spinning
         */;
        _proto.onAllReelsCompleted = function onAllReelsCompleted() {
          if (this._currentSpinResult && this._viewModel) {
            // Reset animation profile to normal after suspense spin
            if (this._suspenseSpinActive) {
              this._animationConfig.setProfile('normal');
              // Update all reel configurations back to normal
              for (var _iterator2 = _createForOfIteratorHelperLoose(this.reelComponents), _step2; !(_step2 = _iterator2()).done;) {
                var reel = _step2.value;
                reel.updateConfig();
              }
              this._suspenseSpinActive = false;
            }

            // Process the spin result now that all reels are done
            this._viewModel.processSpinResultFromComponent(this._currentSpinResult);

            // Clear the current spin result
            this._currentSpinResult = null;
          }
        }

        /**
         * Check if the first two reels show matching symbols
         */;
        _proto.checkFirstTwoReelsMatch = function checkFirstTwoReelsMatch(spinResult) {
          if (!spinResult.reelResults || spinResult.reelResults.length === 0) {
            return false;
          }
          var finalSymbolsArray = spinResult.reelResults[0];
          if (finalSymbolsArray.length < 2) {
            return false;
          }
          var firstSymbol = finalSymbolsArray[0];
          var secondSymbol = finalSymbolsArray[1];

          // Check if symbols match by comparing their type or id
          return firstSymbol.type === secondSymbol.type || firstSymbol.id === secondSymbol.id;
        }

        /**
         * Determine if suspense spin should be triggered (50% chance)
         */;
        _proto.shouldTriggerSuspenseSpin = function shouldTriggerSuspenseSpin() {
          return true;
          // return Math.random() < 0.5;
        };

        _proto.onSpinClicked = /*#__PURE__*/function () {
          var _onSpinClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._viewModel) {
                    _context.next = 3;
                    break;
                  }
                  _context.next = 3;
                  return this._viewModel.executeCommand('spin');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onSpinClicked() {
            return _onSpinClicked.apply(this, arguments);
          }
          return onSpinClicked;
        }();
        _proto.onSpinTouchStart = /*#__PURE__*/function () {
          var _onSpinTouchStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._originalSpinButtonPos) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (!(this._spinButtonState != 'idle')) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return");
                case 4:
                  this._spinButtonState = 'down';
                  tween(this.spinButton.node).to(0.2, {
                    y: this._originalSpinButtonPos.y - 45
                  }, {
                    easing: 'sineIn'
                  }).call(function () {
                    if (_this2._spinButtonState == 'up' || !_this2.hasEnoughEnergy()) {
                      _this2.showSpinButtonUp();
                    } else {
                      _this2.activateAutoSpinButton();
                    }
                  }).start();
                  if (!this._viewModel) {
                    _context2.next = 9;
                    break;
                  }
                  _context2.next = 9;
                  return this._viewModel.executeCommand('spin');
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onSpinTouchStart() {
            return _onSpinTouchStart.apply(this, arguments);
          }
          return onSpinTouchStart;
        }();
        _proto.showSpinButtonUp = function showSpinButtonUp() {
          var _this3 = this;
          Tween.stopAllByTarget(this.spinButton.node);
          this.spinButton.node.active = true;
          tween(this.spinButton.node).to(0.2, {
            position: this._originalSpinButtonPos
          }, {
            easing: 'sineOut'
          }).call(function () {
            _this3._spinButtonState = 'idle';
          }).start();
        };
        _proto.activateAutoSpinButton = function activateAutoSpinButton() {
          var _this4 = this;
          this._spinButtonState = 'prepare_auto';
          this.autoSpinButton.node.active = true;
          this.autoSpinButtonOpacity.opacity = 200;
          this.autoSpinWave.restart();
          log('activateAutoSpinButton ');
          tween(this.autoSpinButtonOpacity).to(1, {
            opacity: 255
          }).call(function () {
            _this4.spinButton.node.active = false;
            _this4._spinButtonState = 'auto';
            _this4.onAutoSpinClicked();
          }).start();
        };
        _proto.deactivateAutoSpinButton = function deactivateAutoSpinButton() {
          log("deactivateAutoSpinButton ", this._spinButtonState);
          Tween.stopAllByTarget(this.autoSpinButtonOpacity);
          this.autoSpinButton.node.active = false;
          this._spinButtonState = 'up';
          this.showSpinButtonUp();
        };
        _proto.onSpinTouchEnd = /*#__PURE__*/function () {
          var _onSpinTouchEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this._originalSpinButtonPos) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  if (this._spinButtonState == 'down') {
                    this._spinButtonState = 'up';
                  } else if (this._spinButtonState == 'prepare_auto') {
                    this.deactivateAutoSpinButton();
                  }
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onSpinTouchEnd() {
            return _onSpinTouchEnd.apply(this, arguments);
          }
          return onSpinTouchEnd;
        }();
        _proto.onBetIncreaseClicked = function onBetIncreaseClicked() {
          if (this._viewModel) {
            this._viewModel.executeCommand('increaseBetMultiplier');
          }
        };
        _proto.onBetDecreaseClicked = function onBetDecreaseClicked() {
          if (this._viewModel) {
            this._viewModel.executeCommand('decreaseBetMultiplier');
          }
        };
        _proto.onBetChangeTouchStart = function onBetChangeTouchStart() {
          var _this5 = this;
          if (!this._originalBetButtonPos) return;
          Tween.stopAllByTarget(this.betChangeButton.node);
          tween(this.betChangeButton.node).to(0.1, {
            position: new Vec3(this._originalBetButtonPos.x, this._originalBetButtonPos.y - 16, this._originalBetButtonPos.z)
          }).call(function () {
            if (_this5._viewModel) {
              _this5._viewModel.executeCommand('changeBetMultiplier');
            }
          }).to(0.1, {
            position: this._originalBetButtonPos
          }).start();
        };
        _proto.onSpinCompleted = function onSpinCompleted(spinResult) {
          this.updateUI();
          this.showWinResults(spinResult);
        };
        _proto.onAutoSpinClicked = function onAutoSpinClicked() {
          if (!this._viewModel) return;

          // If auto-spin is active or pending, stop it
          if (this._viewModel.isAutoSpinning || this._viewModel.isAutoSpinPending) {
            this._viewModel.executeCommand('stopAutoSpin');
          } else {
            // Start auto-spin (will queue if manual spin is in progress)
            this._viewModel.executeCommand('startAutoSpin');
          }
        };
        _proto.onAutoSpinStateChanged = function onAutoSpinStateChanged(payload) {
          var _this6 = this;
          var reason = payload.reason;

          // Always update the main UI
          this.updateUI();
          if (reason) log("onAutoSpinStateChanged on reason ", reason, payload);
          if (reason && reason != 'STARTED' && reason != 'QUEUED') {
            log("deactivateAutoSpinButton on reason ", reason, payload);
            this.deactivateAutoSpinButton();
          }

          // Handle specific feedback based on the reason
          if (reason === 'STARTED') {
            this._animationConfig.setProfile('autoSpin');
          } else if (reason === 'STOPPED_USER' || reason === 'QUEUE_CLEARED') {
            this._animationConfig.setProfile('normal');
          } else if (reason === 'STOPPED_NO_ENERGY') {
            this._animationConfig.setProfile('normal');
            // Show visual feedback that auto-spin stopped due to lack of energy
            if (this.spinButtonLabel) {
              this.spinButtonLabel.string = 'NO ENERGY';
              this.scheduleOnce(function () {
                _this6.updateSpinButton();
              }, 2.0);
            }
          }
        };
        _proto.onAnimationProfileChanged = function onAnimationProfileChanged() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.reelComponents), _step3; !(_step3 = _iterator3()).done;) {
            var reel = _step3.value;
            reel.updateConfig();
          }
        };
        _proto.onBetMultiplierIncreaseBlocked = function onBetMultiplierIncreaseBlocked(event) {
          var _this7 = this;
          // Visual feedback when multiplier increase is blocked due to insufficient energy
          if (this.betIncreaseButton) {
            // Temporarily disable the button and provide visual feedback
            this.betIncreaseButton.interactable = false;

            // Re-enable after a short delay
            this.scheduleOnce(function () {
              if (_this7.betIncreaseButton && _this7._viewModel && !_this7._viewModel.isSpinning) {
                _this7.betIncreaseButton.interactable = true;
              }
            }, 0.5);
          }

          // Optional: Log the blocked attempt for debugging
          console.log("Bet increase blocked: Need " + event.requiredEnergy + " energy, have " + event.availableEnergy);
        };
        _proto.updateUI = function updateUI() {
          this.updateSpinButton();
          this.updateBetMultiplierDisplay();
          this.updateAutoSpinDisplay();
        };
        _proto.updateAutoSpinDisplay = function updateAutoSpinDisplay() {
          if (!this._viewModel || !this.autoSpinButton) return;
          var isAutoSpinning = this._viewModel.isAutoSpinning;
          var isAutoSpinPending = this._viewModel.isAutoSpinPending;

          // Auto-spin button is always interactable (allows queuing and stopping)
          this.autoSpinButton.interactable = true;

          // Update auto-spin button label based on state
          var autoSpinButtonLabel = this.autoSpinButton.getComponentInChildren(Label);
          if (autoSpinButtonLabel) {
            if (isAutoSpinning) {
              autoSpinButtonLabel.string = 'STOP';
            } else if (isAutoSpinPending) {
              autoSpinButtonLabel.string = 'QUEUED';
            } else {
              autoSpinButtonLabel.string = 'AUTO';
            }
          }
        };
        _proto.updateSpinButton = function updateSpinButton() {
          if (!this._viewModel || !this.spinButton || !this.spinButtonLabel) return;
          var energyCost = this._viewModel.spinEnergyCost;
          var hasEnoughEnergy = this._viewModel.currentEnergy >= energyCost;
          var isSpinning = this._viewModel.isSpinning;
          var isAutoSpinning = this._viewModel.isAutoSpinning;
          this.spinButton.interactable = hasEnoughEnergy && !isSpinning && !isAutoSpinning;
          if (isAutoSpinning) {
            this.spinButtonLabel.string = 'AUTO-SPINNING';
          } else if (isSpinning) {
            this.spinButtonLabel.string = 'SPINNING...';
          } else if (!hasEnoughEnergy) {
            this.spinButtonLabel.string = 'NOT ENOUGH ENERGY';
          } else {
            this.spinButtonLabel.string = "SPIN (" + energyCost + " Energy)";
          }
        };
        _proto.updateBetMultiplierDisplay = function updateBetMultiplierDisplay() {
          if (!this._viewModel) return;
          var currentMultiplier = this._viewModel.currentBetMultiplier;
          var isSpinning = this._viewModel.isSpinning;
          var isAutoSpinning = this._viewModel.isAutoSpinning;

          // Update multiplier label
          if (this.betMultiplierLabel) {
            this.betMultiplierLabel.string = "x" + currentMultiplier;
          }
          var multiplierArray = this._viewModel.availableBetMultipliers;
          var currentIndex = multiplierArray.indexOf(currentMultiplier);
          var canIncrease = !isSpinning && !isAutoSpinning && currentIndex < multiplierArray.length - 1;
          var canDecrease = !isSpinning && !isAutoSpinning && currentIndex > 0;
          if (this.betIncreaseButton) {
            this.betIncreaseButton.interactable = canIncrease;
          }
          if (this.betDecreaseButton) {
            this.betDecreaseButton.interactable = canDecrease;
          }
        };
        _proto.showWinResults = function showWinResults(spinResult) {
          if (!this.winLabel) return;
          if (spinResult.totalPayout > 0) {
            log("Show win results ", spinResult);
            this.winLabel.string = this._viewModel.getDisplayResultText(spinResult);
            this.winLabel.node.active = true;

            // Get adjusted duration for speed multiplier
            var adjustedDuration = this._animationConfig.getUIConfig().winAnimationDuration;
            tween(this.winLabel.node).to(adjustedDuration, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(adjustedDuration, {
              scale: new Vec3(1, 1, 1)
            }).start();
          } else {
            this.winLabel.string = '';
            this.winLabel.node.active = false;
          }
        };
        _proto.hasEnoughEnergy = function hasEnoughEnergy() {
          var energyCost = this._viewModel.spinEnergyCost;
          var hasEnoughEnergy = this._viewModel.currentEnergy >= energyCost;
          return hasEnoughEnergy;
        };
        return SlotMachineComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelsContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spinButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spinButtonLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betIncreaseButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "betDecreaseButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "betMultiplierLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "betChangeButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "autoSpinButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "autoSpinButtonOpacity", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "autoSpinWave", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMachineConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMachineUtils.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, JsonAsset, SlotMachineUtils;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      SlotMachineUtils = module.SlotMachineUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1c7fbhMBLNP+ptX5IN4N+2p", "SlotMachineConfig", undefined);

      /**
       * Slot Machine Configuration
       */
      var SlotMachineConfig = exports('SlotMachineConfig', /*#__PURE__*/function () {
        function SlotMachineConfig() {
          this.symbols = [];
          this.paytable = [];
        }

        /**
         * Get singleton instance
         */
        SlotMachineConfig.getInstance = function getInstance() {
          if (!SlotMachineConfig._instance) {
            SlotMachineConfig._instance = new SlotMachineConfig();
          }
          return SlotMachineConfig._instance;
        }

        /**
         * Load configuration from JSON files
         */;
        var _proto = SlotMachineConfig.prototype;
        _proto.loadConfig = /*#__PURE__*/
        function () {
          var _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(window.symbols && window.paytable)) {
                    _context.next = 4;
                    break;
                  }
                  // bản design
                  this.symbols = window.symbols.filter(function (symbol) {
                    return symbol.id != 0;
                  }); // loại bỏ dấu ?
                  this.paytable = window.paytable;
                  return _context.abrupt("return");
                case 4:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    resources.loadDir('config', JsonAsset, function (err, assets) {
                      if (err) {
                        console.error('Failed to load config files:', err);
                        return reject(err);
                      }
                      var symbolsAsset = assets.find(function (a) {
                        return a.name === 'symbols';
                      });
                      var paytableAsset = assets.find(function (a) {
                        return a.name === 'paytable';
                      });
                      if (symbolsAsset && symbolsAsset.json) {
                        _this.symbols = symbolsAsset.json.filter(function (symbol) {
                          return symbol.id != 0;
                        }); // loại bỏ dấu ?
                      } else {
                        console.error('symbols.json not found or is empty.');
                      }
                      if (paytableAsset && paytableAsset.json) {
                        _this.paytable = paytableAsset.json;
                      } else {
                        console.error('paytable.json not found or is empty.');
                      }
                      resolve();
                    });
                  }));
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadConfig() {
            return _loadConfig.apply(this, arguments);
          }
          return loadConfig;
        }()
        /**
         * Get default slot machine configuration
         */;

        _proto.getDefaultConfig = function getDefaultConfig() {
          return {
            reelCount: 3,
            rowCount: 1,
            symbols: this.symbols,
            energyCostPerSpin: 1,
            availableMultipliers: [1, 2, 5, 10, 20, 40, 50, 100, 250],
            paytable: this.paytable
          };
        }

        /**
         * Get configuration for specific level
         */;
        _proto.getConfigForLevel = function getConfigForLevel(level) {
          var baseConfig = this.getDefaultConfig();

          // Adjust configuration based on player level
          if (level >= 10) {
            // Add higher multipliers for higher level players
            baseConfig.availableMultipliers = [1, 2, 5, 10, 20, 40, 50, 100, 250];
          }
          if (level >= 20) {
            // Reduce energy cost for experienced players
            baseConfig.energyCostPerSpin = 1;
          }

          // For 1x3 slot machine, we don't need advanced paylines
          // Keep the single payline for all levels

          return baseConfig;
        }

        /**
         * Validate configuration
         */;
        _proto.validateConfig = function validateConfig(config) {
          return SlotMachineUtils.validateConfiguration(config.symbols, config.paytable, config.reelCount, config.rowCount);
        }

        /**
         * Get configuration for testing
         */;
        _proto.getTestConfig = function getTestConfig() {
          var config = this.getDefaultConfig();

          // Reduce energy cost for testing
          config.energyCostPerSpin = 1;
          config.availableMultipliers = [1, 2, 5, 10, 20, 40, 50, 100, 250];
          return config;
        }

        /**
         * Create configuration from server data
         */;
        _proto.createConfigFromServerData = function createConfigFromServerData(serverData) {
          try {
            return {
              reelCount: serverData.reelCount || 3,
              rowCount: serverData.rowCount || 1,
              symbols: serverData.symbols || [],
              energyCostPerSpin: serverData.energyCostPerSpin || 1,
              availableMultipliers: serverData.availableMultipliers || [1, 2, 5, 10, 20, 40, 50, 100, 250],
              paytable: serverData.paytable || []
            };
          } catch (error) {
            console.warn('Failed to parse server config, using default:', error);
            return this.getDefaultConfig();
          }
        };
        return SlotMachineConfig;
      }());
      SlotMachineConfig._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMachineModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseModel.ts'], function (exports) {
  var _inheritsLoose, _extends, _createForOfIteratorHelperLoose, _createClass, cclegacy, BaseModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseModel = module.BaseModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d03bdpQG8pJ8bT6/mW1ZKaV", "SlotMachineModel", undefined);
      var SlotRewardType = exports('SlotRewardType', /*#__PURE__*/function (SlotRewardType) {
        SlotRewardType["ATTACK"] = "Attack";
        SlotRewardType["STEAL"] = "Steal";
        SlotRewardType["SHIELD"] = "Shield";
        SlotRewardType["GOLD"] = "Gold";
        SlotRewardType["ENERGY"] = "Energy";
        SlotRewardType["TOKEN"] = "Token";
        return SlotRewardType;
      }({}));

      /**
       * Slot machine reward data structure
       */

      /**
       * Slot machine symbol configuration
       */

      /**
       * Paytable entry configuration
       */

      /**
       * Slot machine configuration
       */

      /**
       * Slot machine spin result
       */

      /**
       * Auto-spin state
       */

      /**
       * Reasons for auto-spin state changes
       */

      /**
       * Payload for the autoSpinStateChanged event
       */

      /**
       * Slot Machine Model - Handles slot machine configuration and game logic
       */
      var SlotMachineModel = exports('SlotMachineModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(SlotMachineModel, _BaseModel);
        function SlotMachineModel() {
          var _this;
          _this = _BaseModel.call(this) || this;
          _this.DEFAULT_ENERGY_COST = 1;
          _this.DEFAULT_MULTIPLIERS = [1, 2, 5, 10, 20, 40, 50, 100, 250];
          _this.DEFAULT_REEL_COUNT = 3;
          _this.DEFAULT_ROW_COUNT = 1;
          _this.initializeDefaults();
          return _this;
        }

        /**
         * Initialize default values
         */
        var _proto = SlotMachineModel.prototype;
        _proto.initializeDefaults = function initializeDefaults() {
          this.setData('reelCount', this.DEFAULT_REEL_COUNT);
          this.setData('rowCount', this.DEFAULT_ROW_COUNT);
          this.setData('symbols', []);
          this.setData('energyCostPerSpin', this.DEFAULT_ENERGY_COST);
          this.setData('availableMultipliers', [].concat(this.DEFAULT_MULTIPLIERS));
          this.setData('selectedMultiplier', 1);
          this.setData('isSpinning', false);
          this.setData('lastSpinResult', null);
          this.setData('paytable', []);
          this.setData('autoSpinState', {
            isActive: false,
            isPending: false
          });
        }

        /**
         * Get reel count
         */;
        /**
         * Calculate total energy cost for current bet
         */
        _proto.getTotalEnergyCost = function getTotalEnergyCost() {
          return this.energyCostPerSpin * this.selectedMultiplier;
        }

        /**
         * Check if player can afford the spin
         */;
        _proto.canAffordSpin = function canAffordSpin(currentEnergy) {
          return currentEnergy >= this.getTotalEnergyCost();
        }

        /**
         * Start spinning animation
         */;
        _proto.startSpin = function startSpin(result) {
          // Prevent starting a new spin if already spinning
          if (this.isSpinning) {
            return;
          }
          this.setData('isSpinning', true);
          this.setData('lastSpinResult', result); // Store result before emitting
          this.emit('spinStarted', result);
        }

        /**
         * Process spin result from server
         */;
        _proto.processSpinResult = function processSpinResult(result) {
          // Calculate final reward with bet multiplier
          var finalReward = {
            type: result.finalReward.type,
            amount: result.totalPayout * result.betMultiplier,
            multiplier: result.betMultiplier
          };
          var processedResult = _extends({}, result, {
            finalReward: finalReward
          });
          this.setData('lastSpinResult', processedResult);
          this.setData('isSpinning', false);
          this.emit('spinCompleted', processedResult);
        }

        /**
         * Generate a complete random spin result (for testing/offline mode)
         */;
        _proto.generateSpinResult = function generateSpinResult() {
          var paytable = this.paytable;
          var totalWeight = paytable.reduce(function (sum, entry) {
            return sum + entry.weight;
          }, 0);
          var randomValue = Math.random() * totalWeight;
          var selectedPayline = null;
          for (var _iterator = _createForOfIteratorHelperLoose(paytable), _step; !(_step = _iterator()).done;) {
            var entry = _step.value;
            randomValue -= entry.weight;
            if (randomValue <= 0) {
              selectedPayline = entry;
              break;
            }
          }
          if (!selectedPayline) {
            selectedPayline = paytable[paytable.length - 1];
          }
          var reelResults = [[]];
          var symbols = this.symbols;
          var zeroPrioritySymbols = symbols.filter(function (s) {
            return s.priority === 0;
          });
          var slots = [selectedPayline.slot1, selectedPayline.slot2, selectedPayline.slot3];
          var _loop = function _loop() {
            var symbolType = slots[i];
            if (symbolType === '?') {
              var randomSymbol = zeroPrioritySymbols[Math.floor(Math.random() * zeroPrioritySymbols.length)];
              symbolType = randomSymbol.type;
            }
            var symbol = symbols.find(function (s) {
              return s.type === symbolType;
            });
            if (symbol) {
              reelResults[0].push(symbol);
            }
          };
          for (var i = 0; i < slots.length; i++) {
            _loop();
          }
          var spinResult = {
            reelResults: reelResults,
            totalPayout: selectedPayline.rewardAmount,
            betMultiplier: this.selectedMultiplier,
            finalReward: {
              type: selectedPayline.rewardType,
              amount: selectedPayline.rewardAmount
            }
          };
          return spinResult;
        }

        /**
         * Load configuration from server data
         */;
        _proto.loadConfiguration = function loadConfiguration(config) {
          this.setData('reelCount', config.reelCount);
          this.setData('rowCount', config.rowCount);
          this.symbols = config.symbols;
          this.energyCostPerSpin = config.energyCostPerSpin;
          this.availableMultipliers = config.availableMultipliers;
          this.paytable = config.paytable;

          // Reset selected multiplier to first available
          if (config.availableMultipliers.length > 0) {
            this.selectedMultiplier = config.availableMultipliers[0];
          }
          this.emit('configurationLoaded', config);
        }

        /**
         * Reset spin state
         */;
        _proto.resetSpin = function resetSpin() {
          this.setData('isSpinning', false);
          this.setData('lastSpinResult', null);
          this.emit('spinReset');
        }

        /**
         * Get reward display text
         */;
        _proto.getRewardDisplayText = function getRewardDisplayText(reward) {
          switch (reward.type) {
            case SlotRewardType.GOLD:
              return reward.amount + " Gold";
            case SlotRewardType.ENERGY:
              return reward.amount + " Energy";
            case SlotRewardType.TOKEN:
              return reward.amount + " Event Items";
            case SlotRewardType.ATTACK:
              return 'Attack';
            case SlotRewardType.STEAL:
              return 'Raid';
            case SlotRewardType.SHIELD:
              return 'Shield';
            default:
              return 'Unknown Reward';
          }
        }

        /**
         * Validate model data
         */;
        _proto.validate = function validate() {
          var symbols = this.symbols;
          var paytable = this.paytable;
          var energyCost = this.energyCostPerSpin;
          var multipliers = this.availableMultipliers;
          var selectedMultiplier = this.selectedMultiplier;

          // Basic validation
          if (energyCost <= 0 || !Array.isArray(symbols) || !Array.isArray(paytable) || !Array.isArray(multipliers)) {
            return false;
          }

          // Validate symbols
          if (symbols.length === 0) {
            return false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(symbols), _step2; !(_step2 = _iterator2()).done;) {
            var symbol = _step2.value;
            if (symbol.id === undefined || !symbol.type) {
              return false;
            }
          }

          // Validate paytable
          for (var _iterator3 = _createForOfIteratorHelperLoose(paytable), _step3; !(_step3 = _iterator3()).done;) {
            var entry = _step3.value;
            if (!entry.payId || !entry.slot1 || !entry.slot2 || !entry.slot3 || entry.weight <= 0) {
              return false;
            }
          }

          // Validate multipliers
          if (multipliers.length === 0 || !multipliers.includes(selectedMultiplier)) {
            return false;
          }
          return true;
        }

        /**
         * Serialize to JSON
         */;
        _proto.toJSON = function toJSON() {
          return {
            reelCount: this.reelCount,
            rowCount: this.rowCount,
            symbols: this.symbols,
            energyCostPerSpin: this.energyCostPerSpin,
            availableMultipliers: this.availableMultipliers,
            selectedMultiplier: this.selectedMultiplier,
            isSpinning: this.isSpinning,
            lastSpinResult: this.lastSpinResult,
            paytable: this.paytable,
            autoSpinState: this.autoSpinState
          };
        }

        /**
         * Deserialize from JSON
         */;
        _proto.fromJSON = function fromJSON(data) {
          this.setData('reelCount', data.reelCount || this.DEFAULT_REEL_COUNT);
          this.setData('rowCount', data.rowCount || this.DEFAULT_ROW_COUNT);
          this.symbols = data.symbols || [];
          this.energyCostPerSpin = data.energyCostPerSpin || this.DEFAULT_ENERGY_COST;
          this.availableMultipliers = data.availableMultipliers || [].concat(this.DEFAULT_MULTIPLIERS);
          this.selectedMultiplier = data.selectedMultiplier || 1;
          this.setData('isSpinning', data.isSpinning || false);
          this.setData('lastSpinResult', data.lastSpinResult || null);
          this.paytable = data.paytable || [];
          this.autoSpinState = data.autoSpinState || null;
        }

        /**
         * Start auto-spin
         */;
        _proto.startAutoSpin = function startAutoSpin() {
          var _this$autoSpinState;
          // Prevent auto-spin from starting if already active
          if ((_this$autoSpinState = this.autoSpinState) != null && _this$autoSpinState.isActive) {
            return;
          }

          // Prevent auto-spin from starting if a manual spin is in progress
          if (this.isSpinning) {
            return;
          }
          this.autoSpinState = {
            isActive: true,
            isPending: false
          };
          this.emit('autoSpinStateChanged', {
            newState: this.autoSpinState,
            reason: 'STARTED'
          });
        }

        /**
         * Stop auto-spin
         */;
        _proto.stopAutoSpin = function stopAutoSpin() {
          var _this$autoSpinState2;
          if (!((_this$autoSpinState2 = this.autoSpinState) != null && _this$autoSpinState2.isActive)) {
            return; // Not active
          }

          if (this.autoSpinState) {
            this.autoSpinState.isActive = false;
            this.autoSpinState.isPending = false;
            this.emit('autoSpinStateChanged', {
              newState: this.autoSpinState,
              reason: 'STOPPED_USER'
            });
          }
        }

        /**
         * Stop auto-spin due to insufficient energy
         */;
        _proto.stopAutoSpinDueToInsufficientEnergy = function stopAutoSpinDueToInsufficientEnergy() {
          var _this$autoSpinState3;
          if (!((_this$autoSpinState3 = this.autoSpinState) != null && _this$autoSpinState3.isActive)) {
            return; // Not active
          }

          if (this.autoSpinState) {
            this.autoSpinState.isActive = false;
            this.autoSpinState.isPending = false; // Also clear pending
            this.emit('autoSpinStateChanged', {
              newState: this.autoSpinState,
              reason: 'STOPPED_NO_ENERGY'
            });
          }
        }

        /**
         * Check if auto-spin can continue
         */;
        _proto.canContinueAutoSpin = function canContinueAutoSpin(currentEnergy) {
          var _this$autoSpinState4;
          if (!((_this$autoSpinState4 = this.autoSpinState) != null && _this$autoSpinState4.isActive)) {
            return false;
          }

          // The only condition to stop is insufficient energy
          return this.canAffordSpin(currentEnergy);
        }

        /**
         * Queue auto-spin to start after current manual spin completes
         */;
        _proto.queueAutoSpin = function queueAutoSpin() {
          if (!this.autoSpinState) {
            this.autoSpinState = {
              isActive: false,
              isPending: false
            };
          }

          // Set pending flag if not already active
          if (!this.autoSpinState.isActive) {
            this.autoSpinState.isPending = true;
            this.emit('autoSpinStateChanged', {
              newState: this.autoSpinState,
              reason: 'QUEUED'
            });
          }
        }

        /**
         * Check if auto-spin is pending
         */;
        /**
         * Activate pending auto-spin (called when manual spin completes)
         */
        _proto.activatePendingAutoSpin = function activatePendingAutoSpin() {
          var _this$autoSpinState5;
          if (!((_this$autoSpinState5 = this.autoSpinState) != null && _this$autoSpinState5.isPending)) {
            return false;
          }

          // Don't activate if currently spinning
          if (this.isSpinning) {
            return false;
          }
          this.autoSpinState.isActive = true;
          this.autoSpinState.isPending = false;
          this.emit('autoSpinStateChanged', {
            newState: this.autoSpinState,
            reason: 'STARTED'
          });
          return true;
        }

        /**
         * Clear pending auto-spin without activating it
         */;
        _proto.clearPendingAutoSpin = function clearPendingAutoSpin() {
          var _this$autoSpinState6;
          if ((_this$autoSpinState6 = this.autoSpinState) != null && _this$autoSpinState6.isPending) {
            this.autoSpinState.isPending = false;
            this.emit('autoSpinStateChanged', {
              newState: this.autoSpinState,
              reason: 'QUEUE_CLEARED'
            });
          }
        };
        _createClass(SlotMachineModel, [{
          key: "reelCount",
          get: function get() {
            return this.getData('reelCount') || this.DEFAULT_REEL_COUNT;
          }

          /**
           * Get row count
           */
        }, {
          key: "rowCount",
          get: function get() {
            return this.getData('rowCount') || this.DEFAULT_ROW_COUNT;
          }

          /**
           * Get available symbols
           */
        }, {
          key: "symbols",
          get: function get() {
            return this.getData('symbols') || [];
          }

          /**
           * Set available symbols
           */,
          set: function set(value) {
            this.setData('symbols', [].concat(value));
          }

          /**
           * Get energy cost per spin
           */
        }, {
          key: "energyCostPerSpin",
          get: function get() {
            return this.getData('energyCostPerSpin') || this.DEFAULT_ENERGY_COST;
          }

          /**
           * Set energy cost per spin
           */,
          set: function set(value) {
            this.setData('energyCostPerSpin', Math.max(1, value));
          }

          /**
           * Get available bet multipliers
           */
        }, {
          key: "availableMultipliers",
          get: function get() {
            return this.getData('availableMultipliers') || [].concat(this.DEFAULT_MULTIPLIERS);
          }

          /**
           * Set available bet multipliers
           */,
          set: function set(value) {
            this.setData('availableMultipliers', [].concat(value));
          }

          /**
           * Get selected bet multiplier
           */
        }, {
          key: "selectedMultiplier",
          get: function get() {
            return this.getData('selectedMultiplier') || 1;
          }

          /**
           * Set selected bet multiplier
           */,
          set: function set(value) {
            var availableMultipliers = this.availableMultipliers;
            if (availableMultipliers.includes(value)) {
              this.setData('selectedMultiplier', value);
            }
          }

          /**
           * Check if slot machine is currently spinning
           */
        }, {
          key: "isSpinning",
          get: function get() {
            return this.getData('isSpinning') || false;
          }

          /**
           * Get last spin result
           */
        }, {
          key: "lastSpinResult",
          get: function get() {
            return this.getData('lastSpinResult') || null;
          }

          /**
           * Get paytable
           */
        }, {
          key: "paytable",
          get: function get() {
            return this.getData('paytable') || [];
          }

          /**
           * Set paytable
           */,
          set: function set(value) {
            this.setData('paytable', [].concat(value));
          }

          /**
           * Get auto-spin state
           */
        }, {
          key: "autoSpinState",
          get: function get() {
            return this.getData('autoSpinState') || null;
          }

          /**
           * Set auto-spin state
           */,
          set: function set(value) {
            this.setData('autoSpinState', value);
          }
        }, {
          key: "isAutoSpinPending",
          get: function get() {
            var _this$autoSpinState7;
            return ((_this$autoSpinState7 = this.autoSpinState) == null ? void 0 : _this$autoSpinState7.isPending) || false;
          }
        }]);
        return SlotMachineModel;
      }(BaseModel));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMachineUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab7baA9PCBP6rZYHjYdbVUm", "SlotMachineUtils", undefined);
      /**
       * Slot Machine Utilities - Helper functions for slot machine logic
       */
      var SlotMachineUtils = exports('SlotMachineUtils', /*#__PURE__*/function () {
        function SlotMachineUtils() {}
        /**
         * Format payout display text
         */
        SlotMachineUtils.formatPayoutText = function formatPayoutText(amount) {
          if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1) + "M";
          } else if (amount >= 1000) {
            return (amount / 1000).toFixed(1) + "K";
          } else {
            return amount.toString();
          }
        };
        SlotMachineUtils.formatPayoutSeperated = function formatPayoutSeperated(amount) {
          return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }

        /**
         * Validate slot machine configuration
         */;
        SlotMachineUtils.validateConfiguration = function validateConfiguration(symbols, paytable, reelCount, rowCount) {
          var errors = [];

          // Validate symbols
          if (!symbols || symbols.length === 0) {
            errors.push('No symbols defined');
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(symbols), _step; !(_step = _iterator()).done;) {
              var symbol = _step.value;
              if (symbol.id === undefined || !symbol.type) {
                errors.push("Invalid symbol: " + JSON.stringify(symbol));
              }
            }
          }

          // Validate paytable
          if (!paytable || paytable.length === 0) {
            errors.push('No paytable defined');
          } else {
            for (var _iterator2 = _createForOfIteratorHelperLoose(paytable), _step2; !(_step2 = _iterator2()).done;) {
              var entry = _step2.value;
              if (!entry.payId || !entry.slot1 || !entry.slot2 || !entry.slot3 || entry.weight <= 0) {
                errors.push("Invalid paytable entry: " + entry.payId);
              }
            }
          }

          // Validate reel and row counts
          if (reelCount <= 0 || rowCount <= 0) {
            errors.push('Invalid reel or row count');
          }
          return {
            isValid: errors.length === 0,
            errors: errors
          };
        };
        return SlotMachineUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StringUtils.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f4eb29pLYxA/5xwy6jF3nUT", "StringUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StringUtils = exports('StringUtils', (_dec = ccclass('StringUtils'), _dec(_class = /*#__PURE__*/function () {
        function StringUtils() {}
        StringUtils.formatNumberWithCommas = function formatNumberWithCommas(num) {
          return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        };
        StringUtils.formatNumberWithDot = function formatNumberWithDot(num) {
          return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        };
        return StringUtils;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});