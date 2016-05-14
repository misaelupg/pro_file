'use strict';

/**
 * @ngdoc function
 * @name proFileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proFileApp
 */
app
  .controller('MainCtrl', ['$scope', '$mdDialog', '$mdMedia', 
    'profileData', function ($scope, $mdDialog, $mdMedia) {

    $scope.showSend = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './views/partials/send-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
    function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

    $scope.profileData = dataFact.getProfileData();
  }]);
