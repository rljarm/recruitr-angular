'use strict';

angular.module('recruitr')
.factory('Profile', function($rootScope, $http, nodeUrl){
  function Profile(){
  }
  Profile.find = function(){
    return $http.get(nodeUrl + '/profiles?page=1');
  };
  Profile.save = function(student){
    return $http.post(nodeUrl + '/profiles', student);
  };
  Profile.findStudent = function(studentId){
    return $http.get(nodeUrl + '/profiles/' + studentId);
  };

  return Profile;
});
