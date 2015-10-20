(function() {
  'use strict';

  angular
    .module('rss.historyUrl')
    .directive('historyUrl',HistoryUrl);

  function HistoryUrl(sharedData,$location) {
    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/historyUrl/historyUrl.html',
      controllerAs: 'vm',
      controller: controllerFunc,
      bindToController: true
    };

    function controllerFunc($scope) {
      var vm = this;
      vm.urls = [];
      $scope.$watch(function() { return sharedData.getUrlsHistory() },function(newUrlsHistory) {
        if (newUrlsHistory !== void(0)) {
          vm.urls = newUrlsHistory;
          vm.selectUrl(newUrlsHistory[0]);
        }
      });

      vm.removeUrl = function(url,event) {
        // this is to stop the propagation to the select url function
        event.stopPropagation();
        // remove the url from the array
        vm.urls.splice(vm.urls.indexOf(url),1);
        if (vm.urls.length == 0) {
          sharedData.setCurrentUrl({});
        }
        // if the removed item was selected one then select the first one after delete
        if (url.active) {
          vm.selectUrl(vm.urls[0]);
        }

        sharedData.setUrlsHistory(vm.urls);
      };

      vm.selectUrl = function(url) {
        sharedData.setCurrentUrl(url);
      }
    }

    return directive;
  }

})();
