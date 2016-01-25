angular.module('login')
  .config(function ($stateProvider) {
    $stateProvider.state('login', {
      url : '/login',
      data : {
        label : 'Log-In'
      },
      views : {
        content : {
          templateUrl : 'app/login/login.tpl.html',
          controller : 'LoginController',
          controllerAs : 'vm'
        }
      }
    });
  });
