/**
 * Created by Yash on 12/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('InstaApp', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/gallery', {
                    templateUrl: 'views/view.gallery.html',
                    controller: 'GalleryCtrl'
                })
                .otherwise({redirectTo: '/gallery'});
        }]);
})();