(function () {
  'use strict';

  angular
    .module('user')
    .factory('AuthenticationService', AuthenticationService);

  AuthenticationService.$inject = ['$http', '$cookies', '$rootScope'];
  function AuthenticationService($http, $cookies, $rootScope) {
    var service = {};

    service.Login = Login;
    service.SetCredentials = SetCredentials;
    service.ClearCredentials = ClearCredentials;

    return service;

    function Login(username, password, callback) {
      $http.post('app/components/php/login-user.php', { username: username, password: password })
        .then(function successCallback(response) {
          callback(response);
      }, function errorCallback(response) {
        return response.message;
      });
    }

    function SetCredentials(username, password) {
      // base encode 64
      var authdata = btoa(username + ':' + password);

      $rootScope.globals = {
        currentUser: {
          username: username,
          authdata: authdata
        }
      };

      $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
      $cookies.put('globals', $rootScope.globals);
    }

    function ClearCredentials() {
      $rootScope.globals = {};
      $cookies.remove('globals');
      $http.defaults.headers.common.Authorization = 'Basic';
    }
  }

})();
