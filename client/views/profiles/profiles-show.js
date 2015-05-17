'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, fauxProfiles, Profile){
  console.log('in ProfilesShowCtrl');

  $scope.student = fauxProfiles[0];


  $scope.editStudent = function(student){
    Profile.editStudent(student)
    .then(function(response){
      $scope.students = response.data.students;
    });
  };
  $scope.deleteStudent = function(student){
    Profile.deleteStudent(student)
    .then(function(response){
      $scope.students = response.data.students;
    });
  };
});
