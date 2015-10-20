(function() {
  'use strict';

  angular
    .module('rss')
    .config(config);

  /** @ngInject */
  function config($logProvider,$httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }

})();
