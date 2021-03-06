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
    'profileFactory', function ($scope, $mdDialog, $mdMedia, profileFactory) {

    $scope.showSend = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './views/partials/send-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
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

    $scope.profileData = profileFactory.getProfileData();

    

  $scope.skillSet = document.getElementsByClassName('bar-current');
    
    $scope.updateSkillLevel = function() {
       for (var i = 0; i < $scope.skillSet.length; i++) {
            $scope.skillSet[i].style.width = $scope.skillSet[i].dataset.level + '%';
        }
    };


  }]);
