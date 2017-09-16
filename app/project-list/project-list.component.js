'use strict';

// Register `projectList` component, along with its associated controller and template
angular.module('projectList').component('projectList', {
    templateUrl: 'project-list/project-list.template.html',
    controller: function projectListController() {
        this.projects = [
            {
                title: 'Test1',
                role: 'OWNER',
                owner: 'Martin Modrencov',
                enabled: true,
                lastActivity: 1505557812
            },
            {
                title: 'Test2',
                role: 'OWNER 2',
                owner: 'Martin Modrencov',
                enabled: false,
                lastActivity: 1405557812
            }
        ];
    }
});
