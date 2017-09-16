'use strict';

// Register `userList` component, along with its associated controller and template
angular.module('userList').component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function userListController() {
        this.users = [
            {
                name: "Martin Modrencov",
                email: 'martin@aol.com',
                role: 'Organization administrator',
                enabled: true
            }
        ];
    }
});
