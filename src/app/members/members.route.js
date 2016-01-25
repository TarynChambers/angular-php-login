angular.module('members')
  .config(function ($stateProvider) {
    $stateProvider.state('members', {
      url : '/members',
      data : {
        label : 'Members'
      },
      views : {
        content : {
          templateUrl : 'app/members/members-start.tpl.html',
          controller : 'MembersController',
          controllerAs : 'vm'
        }
      }
    });
  });
