angular.module('myFirstApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   // .when('/', {
   //    templateUrl: 'index.html'
   //  })
    .when('/about/:id', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    })
    .when('/contact/:id', {
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    })
    $locationProvider.html5Mode(true);
})
.factory('myFirstAppFactory', function() {
  var appFactory = {};
  appFactory.changeText = function(text) {
    return 'Hello' + text;
  };
  return appFactory;
})
.service('myFirstAppService', function() {
  this.changeText = function(text1, text2) {
    return text1 + '' + text2;
  };
});