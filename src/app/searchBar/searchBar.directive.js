(function() {
  'use strict';

  angular
    .module('rss.searchBar')
    .directive('searchBar',['SearchBarHandler',SearchBarDirective]);

  /** @ngInject */
  function SearchBarDirective(SearchBarHandler) {
    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/searchBar/searchBar.html',
      controller: SearchBarController,
      controllerAs: 'vm',
      bindToController: true
    };

    function SearchBarController() {
      var vm = this;
      vm.search = function() {
        SearchBarHandler.getFeedFromUrl(vm.url);
        vm.url = '';
      };
    }

    return directive;
  }

})();
