(function () {

  var dependencies = ['$scope'];
  var func = function ($scope) {
    $scope.foo = {
      bar: 'home'
    }
  };

  angular.module('gradeBookApp').controller('home.HomeController', dependencies.concat(func));
})();
