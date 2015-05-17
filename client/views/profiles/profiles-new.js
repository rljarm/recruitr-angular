'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state, msaList){
  $scope.msa = msaList;

  $scope.create = function(){
    var student = {
        firstName: $scope.student.firstName,
        lastName: $scope.student.lastName,
        photo: $scope.student.photo,
        skills: $scope.student.skills,
        exposure: $scope.student.exposure,
        bio: $scope.student.blurb,
        location: $scope.student.location,
        interests: [
          $scope.student.interest1,
          $scope.student.interest2,
          $scope.student.interest3,
          $scope.student.interest4,
          $scope.student.interest5
        ],
        locationPref: [
          $scope.student.preferedLocation1,
          $scope.student.preferedLocation2,
          $scope.student.preferedLocation3
        ],
        remote: $scope.student.remoteWorking,
        relocate: $scope.student.relocation,
        available: $scope.student.forHire,
        education: $scope.student.education,
        contact: {
          email: $scope.student.email,
          phone: $scope.student.phone
        },
        social: {
          github: $scope.student.github,
          twitter: $scope.student.twitter,
          linkedin: $scope.student.linkedin,
          stackoverflow: $scope.student.stackoverflow
        }
      };
    Profile.save(student)
    .then(function(){
      $state.go('profiles.list');
    });
  };
  console.log('in ProfilesNewCtrl');
});
