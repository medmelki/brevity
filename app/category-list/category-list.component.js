'use strict';

// Register `categoryList` component, along with its associated controller and template
angular.module('categoryList').component('categoryList', {
    templateUrl: 'category-list/category-list.template.html',
    controller: function categoryListController() {
        this.categories = [
            {
                name: "Audio Only",
                enabled: true
            }, {
                name: "Broadcast - DVCPRO HD",
                enabled: true
            }, {
                name: "Broadcast - IMX",
                enabled: true
            }, {
                name: "Broadcast - XDCAM",
                enabled: true
            }, {
                name: "Editorial - DNxHD",
                enabled: true
            }, {
                name: "Editorial - ProRes",
                enabled: true
            }, {
                name: "Editorial ABR",
                enabled: true
            }, {
                name: "H264 ABR (Apple)",
                enabled: true
            }, {
                name: "H264 ABR (Apple) [gpu]",
                enabled: true
            }, {
                name: "Original Source Files",
                enabled: true
            }, {
                name: "Proxy",
                enabled: true
            }, {
                name: "Thumbnails",
                enabled: true
            }, {
                name: "Web video",
                enabled: true
            }, {
                name: "Web video (HEVC)",
                enabled: true
            }, {
                name: "Web video [gpu]",
                enabled: true
            }
        ];
    }
});
