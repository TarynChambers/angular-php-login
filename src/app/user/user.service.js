(function() {
  'use strict';

  angular
    .module('user')
    .factory('UserService', UserService);

  /** @ngInject */

  function UserService($http, $q) {
    var service = {};

    service.GetCurrent = GetCurrent;
    service.GetAll = GetAll;
    service.GetById = GetById;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;

    return service;

    function GetCurrent() {
      return $http.get('/api/users/current').then(handleSuccess, handleError);
    }

    function GetAll() {
      return $http.get('/api/users').then(handleSuccess, handleError);
    }

    function GetById(_id) {
      return $http.get('/api/users/' + _id).then(handleSuccess, handleError);
    }

    function Create(user) {
      return $http.post('app/components/php/create-user.php', user);
    }

    function Update(user) {
      return $http.put('/api/users/' + user._id, user).then(handleSuccess, handleError);
    }

    function Delete(_id) {
      return $http.delete('/api/users/' + _id).then(handleSuccess, handleError);
    }

    // private functions

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(res) {
      return $q.reject(res.data);
    }
  }


})();