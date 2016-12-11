/**
 * Created by Yash on 12/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('InstaApp')
        .controller('GalleryCtrl', ['$scope','$http','Lightbox', function ($scope, $http, Lightbox) {
            $scope.images = [];
            var imgArray = [];
            console.log("In Controller change");
            $http.jsonp('https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN')
                .then(function (response) {
                    $scope.images = response.data.data;
                    angular.forEach($scope.images, function (val) {
                       imgArray.push(val.images.standard_resolution);
                    });
                    $scope.openLightboxModal = function (index) {
                        Lightbox.openModal(imgArray, index);
                    }
                },(function (error) {
                    console.log(error);
                }));
        }]);

})();