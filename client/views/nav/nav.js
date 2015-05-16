'use strict';

angular.module('recruitr')
.controller('NavCtrl', function($rootScope, $scope, $state, $firebaseObject, $http, User){
  function goHome(){
    $state.go('home');
  }

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        return data.password.email;
      case 'twitter':
        return data.twitter.username;
      case 'google':
        return data.google.displayName;
      case 'facebook':
        return data.facebook.displayName;
      case 'github':
        return data.github.displayName;
    }
  }

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
      $http.defaults.headers.common.Authorization = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6ImdpdGh1YjoxMTYzNDU4NSIsInByb3ZpZGVyIjoiZ2l0aHViIn0sImlhdCI6MTQzMTM2NzU4Nn0._IuW2klvx5rfm7reKHfYU09JPA8rANrwsfg0Re9GPBk';
      User.initialize().then(function(response){
        $rootScope.activeUser.mongoId = response.data;
        goHome();
      });
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $http.defaults.headers.common.Authorization = null;
      goHome();
    }
  });

  $scope.logout = function(){
    User.logout();
  };
});
