'use strict';

// Register `configurationList` component, along with its associated controller and template
angular.module('configurationList').component('configurationList', {
    templateUrl: 'configuration-list/configuration-list.template.html',
    controller: function configurationListController() {
        this.configurations = [
            {
                name: "Martin Modrencov",
                email: 'martin@aol.com',
                role: 'Organization administrator',
                enabled: true
            }
        ];
    }
});
