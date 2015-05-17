'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state){
  $scope.create = function(){
    var student = {
        firstName: $scope.student.firstName,
        lastName: $scope.student.lastName,
        photo: $scope.student.photo,
        skills: [
          $scope.student.skill1,
          $scope.student.skill2,
          $scope.student.skill3,
          $scope.student.skill4,
          $scope.student.skill5
        ],
        exposure: [
          $scope.student.exposure1,
          $scope.student.exposure2,
          $scope.student.exposure3,
          $scope.student.exposure4,
          $scope.student.exposure5,
          $scope.student.exposure6,
          $scope.student.exposure7,
          $scope.student.exposure8,
          $scope.student.exposure9
        ],
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
