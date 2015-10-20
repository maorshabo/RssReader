(function() {
  'use strict';

  angular
    .module('rss')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sharedData,$scope) {
    var vm = this;
    vm.currentUrl = sharedData.getCurrentUrl();

    // this keep me updated with any change to currentUrl at sharedData service
    $scope.$watch(function() { return sharedData.getCurrentUrl() },function(newCurrentUrl) {
      if (newCurrentUrl !== void(0)) {
        vm.currentUrl = newCurrentUrl
      }
    });
    return vm;
  }
})();
