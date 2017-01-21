angular.module("weatherApp")
    .directive("googleMap", [function () {
        return {
            restrict: "AE",
            scope: { lat: '=', long: '=' },
            templateUrl: 'js/googleMap/googleMap.tpl.html',
            replace: true,
            transclude: 'element',
            link: function (scope, elem, attrs) {
                function initMap() {
                    var myLatLng = {lat: Number(scope.lat), lng: Number(scope.long)};

                    var map = new google.maps.Map(elem[0], {
                        zoom: 10,
                        center: myLatLng
                    });

                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Hello World!'
                    });
                    marker.setMap(map);
                }

                scope.$watch('lat', function () {
                    console.log(scope.long, scope.lat);
                    initMap();
                });
                initMap();
            }
        };
    }
]);