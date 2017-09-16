'use strict';

// Register `locationList` component, along with its associated controller and template
angular.module('locationList').component('locationList', {
    templateUrl: 'location-list/location-list.template.html',
    controller: function locationListController() {
        this.locations = [
            {
                name: "Brevity Engine-cse1",
                type: 'location',
                enabled: true
            }
        ];
    }
});
