'use strict';

angular.module('recruitr')
.controller('NavCtrl', function($rootScope, $scope, $state, $http, User){
  function goHome(){
    $state.go('home');
  }

  $scope.logout = function(){
    User.logout();
    goHome();
  };
});
