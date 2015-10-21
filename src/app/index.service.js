(function() {
  'use strict';

  angular
    .module('rss')
    .service('sharedData', sharedData);

  /** @ngInject */
  function sharedData(localStorageService,$routeParams) {
    var currentUrl;
    var urlsHistory = localStorageService.get('historyList') || [];
    var urlIndex;

    var service = {
      getCurrentUrl: getCurrentUrl,
      setCurrentUrl: setCurrentUrl,
      getUrlsHistory: getUrlsHistory,
      setUrlsHistory: setUrlsHistory,
      setActiveFalseToHistoryItems: setActiveFalseToHistoryItems
    };

    return service;

    function getCurrentUrl() {
      urlIndex = parseInt($routeParams.id);
      if (urlIndex) {
          setCurrentUrl(urlsHistory.find(function(url) {
            return url.id == urlIndex;
          }));
      }
      return currentUrl;
    }

    function setCurrentUrl(url) {
      if (url) {
        setActiveFalseToHistoryItems();
        url.active = true;
        currentUrl = url;
      }
    }

    function getUrlsHistory() {
      return urlsHistory;
    }

    function setUrlsHistory(newUrlsHistory) {
      localStorageService.set('historyList', newUrlsHistory);
      urlsHistory = newUrlsHistory;
    }

    function setActiveFalseToHistoryItems() {
      urlsHistory.map(function (url) {
        url.active = false;
      });
    }
  }
})();
