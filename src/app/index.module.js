(function() {
  'use strict';

  angular
    .module('rss', ['ngRoute','ngSanitize','rss.searchBar','rss.historyUrl','LocalStorageModule']);

})();
