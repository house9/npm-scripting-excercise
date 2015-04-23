(function () {

  var dependencies = ['$scope'];
  var func = function ($scope) {
    $scope.foo = {
      bar: 'bar'
    }
  };

  angular.module('gradeBookApp').controller('students.StudentController', dependencies.concat(func));
})();
