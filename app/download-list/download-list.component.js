'use strict';

// Register `downloadList` component, along with its associated controller and template
angular.module('downloadList').component('downloadList', {
    templateUrl: 'download-list/download-list.template.html',
    controller: function downloadListController() {
        this.downloads = [
            {
                file: 'Test.csv',
                size: '35 MO',
                sent: 'YES',
                sender: 'John Doe',
                project: 'Project1',
                status: 'Accepted'
            }
        ]
    }
});
