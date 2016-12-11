/**
 * Created by Yash on 12/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('InstaApp', ['ngRoute', 'ui.bootstrap.tpls', 'bootstrapLightbox'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/gallery', {
                    templateUrl: 'views/view.gallery.html',
                    controller: 'GalleryCtrl'
                })
                .otherwise({redirectTo: '/gallery'});
        }])
        .config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }])
        .config(function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'https://api.instagram.com/**']);
        });
})();