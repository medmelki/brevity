'use strict';

// Register `organizationList` component, along with its associated controller and template
angular.module('organizationList').component('organizationList', {
    templateUrl: 'organization-list/organization-list.template.html',
    controller: function organizationListController() {
        this.organizations = [
            {
                name: "Martin's test Account",
                role: 'ORG_ADMIN',
                enabled: true
            }
        ];
    }
});
