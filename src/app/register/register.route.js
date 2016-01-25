angular.module('register')
  .config(function ($stateProvider) {
    $stateProvider.state('register', {
      url : '/register',
      data : {
        label : 'Register'
      },
      views : {
        content : {
          templateUrl : 'app/register/register.tpl.html',
          controller : 'RegisterController',
          controllerAs : 'vm'
        }
      }
    });
  });
