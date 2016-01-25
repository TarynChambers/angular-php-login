(function() {
  'use strict';

  angular
    .module('inventory')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        data : { label : 'Home'},
        views : {
          content : {
            templateUrl : 'app/home/welcome.tpl.html'
          }
        }
      });

    $urlRouterProvider.otherwise('login');
  }

})();
