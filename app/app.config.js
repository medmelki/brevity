'use strict';

angular.module('brevityApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/projects', {
            template: '<project-list></project-list>'
        }).when('/downloads', {
            template: '<download-list></download-list>'
        }).when('/locations', {
            template: '<location-list></location-list>'
        }).when('/organizations', {
            template: '<organization-list></organization-list>'
        }).when('/users', {
            template: '<user-list></user-list>'
        }).when('/categories', {
            template: '<category-list></category-list>'
        }).when('/configurations', {
            template: '<configuration-list></configuration-list>'
        })
    }
]);
