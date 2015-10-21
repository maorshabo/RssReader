(function() {
  'use strict';

  angular
    .module('rss')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/:id?', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
