(function () {
  'use strict';

angular.module('register')
  .controller('RegisterController', RegisterController);

function RegisterController(UserService, $state, toastr) {
  var vm = this;

  vm.register = register;

  function register() {
    vm.dataLoading = true;
    UserService.Create(vm.user)
      .then(function () {
        $state.go('login');
        toastr.success('You have successfully registered');
      })
      .catch(function (response) {
        if (response.status !== 200) {
          vm.dataLoading = false;
          toastr.error(response.status);
        }
      });
  }
}

})();

