(function () {

  var dependencies = ['$stateProvider', '$urlRouterProvider'];

  var func = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/app/home");

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'templates/layout/app.html'
      })
      .state('app.home', {
        url: "/home",
        templateUrl: "templates/home/index.html",
        controller: "home.HomeController"
      })
      .state('app.students', {
        url: "/students",
        templateUrl: "templates/students/index.html",
        controller: "students.StudentController"
      })

      //separate state for login & error pages
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
      })
      .state('error', {
        url: '/error',
        templateUrl: 'views/error.html'
      })
  };

  console.log(dependencies.concat(func));
  angular.module('gradeBookApp').config(dependencies.concat(func));

})();
