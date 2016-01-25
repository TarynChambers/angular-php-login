(function () {
  'use strict';

  angular
    .module('login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['AuthenticationService', 'toastr', '$state'];
  function LoginController(AuthenticationService, toastr, $state) {
    var vm = this;

    vm.login = login;

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();

    function login() {
      vm.dataLoading = true;
      AuthenticationService.Login(vm.username, vm.password, function (response) {
        if (response) {
          if(!response.data.error){
            if(response.data.username === vm.username){
              if(response.data.password === vm.password){
                // user and pass is good
                AuthenticationService.SetCredentials(vm.username, vm.password);
                toastr.success('you are logged in!');
                $state.go('members');
              }
            }
          }else{
            // bad username and pass
            vm.errorMessage = response.data.message;
            vm.dataLoading = false;
            toastr.error('bad user or pass');
          }
        } else { // didn't get a response
          toastr.error('no response from server!');
          vm.dataLoading = false;
        }
      });
    }
  }

})();
