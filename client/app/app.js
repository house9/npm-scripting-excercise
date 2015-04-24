(function () {
  // var modules = [
  //   'homeModule',
  //   'studentsModule'
  // ];

  var dependencies = [
    'ngAnimate',
    'ngStorage',
    'ngResource',
    'ui.router',
    'ui.router.util',
    'ui.jq',
    'ui.event',
    'ui.bootstrap',
    'angular-bootstrap-select',
    'datatables',
    'datatables.bootstrap',
    'ui.calendar',
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
