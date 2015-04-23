(function () {
  // var modules = [
  //   'homeModule',
  //   'studentsModule'
  // ];

  var dependencies = [
    'ui.router'
  ];

  // modules.forEach(function (value, index) {
  //   angular.module(value, []);
  // });

  // console.log(modules);
  console.log(dependencies);
  console.log('------------------------');
  // angular.module('gradeBookApp', dependencies.concat(modules));
  angular.module('gradeBookApp', dependencies);

})();
