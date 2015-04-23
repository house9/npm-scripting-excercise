(function () {

  var dependencies = ['$stateProvider', '$urlRouterProvider'];

  var func = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "templates/home/index.html",
        controller: "home.HomeController"
      })
      .state('students', {
        url: "/students",
        templateUrl: "templates/students/index.html",
        controller: "students.StudentController"
      })
  };

  console.log(dependencies.concat(func));
  angular.module('gradeBookApp').config(dependencies.concat(func));

})();
