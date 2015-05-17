'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, fauxProfiles, Profile, $state){
  console.log('in ProfilesShowCtrl');
  var studentId = $state.params.studentId;
  Profile.findStudent(studentId)
  .then(function(response){
    $scope.student = response.data.student;
  });

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
