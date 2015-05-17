'use strict';

angular.module('recruitr')
.factory('User', function($rootScope, $http, nodeUrl){
  function User(){
  }

  // not sure if this next block is needed
  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };

  User.login = function(loginInfo){
    return $http.post(nodeUrl + '/users/authenticate', loginInfo);
  };

  User.save = function(user){
    return $http.post(nodeUrl + '/users', user);
  };

  User.find = function(){
    return $http.get(nodeUrl + '/users');
  };

  User.deleteUser = function(user){
    console.log(user)
    // return $http.delete(nodeUrl + '/users/' + user._id);
  };

  return User;
});
