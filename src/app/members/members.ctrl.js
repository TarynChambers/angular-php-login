(function () {
  'use strict';

  angular
    .module('members')
    .controller('MembersController', MembersController);

  MembersController.$inject = ['toastr', '$rootScope', '$log'];
  function MembersController(toastr, $rootScope, $log) {
    var vm = this;
    toastr.info('members page');
    vm.message = "hello member";
  }

})();
