(function() {
  'use strict';

  angular
    .module('rss')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sharedData) {
    var vm = this;
    vm.currentUrl = sharedData.getCurrentUrl();
    return vm;
  }
})();
