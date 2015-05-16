'use strict';

angular.module('recruitr')
.controller('UsersListCtrl', function($scope, User){
  User.find()
  .then(function(response){
    $scope.users = response.data.users;
  });
});
