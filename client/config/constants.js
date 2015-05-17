'use strict';

angular.module('recruitr')
.constant('firebaseUrl', 'https://kolohelios-auth.firebaseio.com')
.constant('nodeUrl', ' http://192.168.1.42:8000')
.constant('fauxProfiles',
[
  {
    _id: 'a00000000000000000000001',
    firstName: 'Andrew',
    lastName: 'Dinh',
    photo: 'https://avatars0.githubusercontent.com/u/11606611?v=3&s=460',
    createdAt: 1431541042952,
    skills: ['Joi', 'Hapi', 'Node'],
    exposure: ['Selenium', 'QA', 'Java', 'Python'],
    bio: 'Developer A; this is some extra text to make it the full 3 sentences. Tumblr polaroid Odd Future, before they sold out photo booth bespoke heirloom put a bird on it wolf dreamcatcher banjo Neutra swag hashtag. Bicycle rights artisan pickled scenester readymade Thundercats, Williamsburg skateboard deep v Blue Bottle umami cronut next level. ',
    location: 'San Jose, CA',
    interests: ['Soccer', 'Football', 'Tennis'],
    remote: true,
    relocate: false,
    locationPref: ['San Francisco', 'Fremont', 'San Jose'],
    education: ['edA', 'edB', 'edC'],
    contact: {
      email: 'test1@test.com',
      phone: '510-345-6789',
      address: '125 Main St, Fremont, CA 94555'
    },
    social: {
      github: 'https://github.com/andrewtdinh',
      facebook: 'BookFace3',
      twitter: 'https://twitter.com/andrewtdinh',
      linkedIn: 'https://www.linkedin.com/in/andrewtdinh',
      stackoverflow: 'http://stackoverflow.com/users/4750158/andrewtdinh'
    }
  },
  {
    _id: 'a00000000000000000000002',
    firstName: 'Jon',
    lastName: 'Edwards',
    photo: 'http://pickaface.net/avatar/kolohelios533660af577c3.png',
    createdAt: 1431541042952,
    skills: ['Joi', 'Hapi', 'Node'],
    exposure: ['Selenium', 'QA', 'Java', 'Python'],
    bio: 'Developer A',
    location: 'San Jose, CA',
    interests: ['Soccer', 'Football', 'Tennis'],
    remote: true,
    relocate: false,
    locationPref: ['San Francisco', 'Fremont', 'San Jose'],
    education: ['edA', 'edB', 'edC'],
    contact: {
      email: 'test1@test.com',
      phone: '510-345-6789',
      address: '125 Main St, Fremont, CA 94555'
    },
    social: {
      github: 'https://github.com/andrewtdinh',
      facebook: 'BookFace3',
      twitter: 'https://twitter.com/andrewtdinh',
      linkedIn: 'https://www.linkedin.com/in/andrewtdinh',
      stackoverflow: 'http://stackoverflow.com/users/4750158/andrewtdinh'
    }
  }
]);
