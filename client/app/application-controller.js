(function () {

  //settings and state
  var app = {
    name: 'sing',
    title: 'Gradebook - Dashboard',
    version: '0.0.1',
    /**
     * Whether to print and alert some log information
     */
    debug: true,
    /**
     * In-app constants
     */
    settings: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'gray-light': '#999',
        'gray-lighter': '#eee',
        'gray': '#666',
        'gray-dark': '#343434',
        'gray-darker': '#222',
        'gray-semi-light': '#777',
        'gray-semi-lighter': '#ddd',
        'brand-primary': '#5d8fc2',
        'brand-success': '#64bd63',
        'brand-warning': '#f0b518',
        'brand-danger': '#dd5826',
        'brand-info': '#5dc4bf'
      },
      screens: {
        'xs-max': 767,
        'sm-min': 768,
        'sm-max': 991,
        'md-min': 992,
        'md-max': 1199,
        'lg-min': 1200
      },
      navCollapseTimeout: 2500
    },

    // *
    //  * Application state. May be changed when using.
    //  * Synced to Local Storage

    state: {
      /**
       * whether navigation is static (prevent automatic collapsing)
       */
      'nav-static': false
    }
  };

  var dependencies = ['$scope', '$localStorage'];
  var func = function ($scope, $localStorage) {
    $scope.app = app;

    if (angular.isDefined($localStorage.state)) {
      $scope.app.state = $localStorage.state;
    } else {
      $localStorage.state = $scope.app.state;
    }

    $scope.print = function() {
      window.print();
    };

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      $scope.loginPage = toState.name == 'login';
      $scope.errorPage = toState.name == 'error';
      $(document).trigger('sn:loaded', [event, toState, toParams, fromState, fromParams]);
    })
  };

  angular.module('gradeBookApp').controller('GradeBookAppController', dependencies.concat(func));
})();
