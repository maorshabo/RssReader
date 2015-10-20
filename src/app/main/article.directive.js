(function() {
  'use strict';

  angular
    .module('rss')
    .directive('articleItem',articleItem);

  /** @ngInject */
  function articleItem(SearchBarHandler) {
    var directive = {
      restrict: 'E',
      scope: {
        article: '='
      },
      templateUrl: 'app/main/article.html'
    };

    return directive;
  }

})();
