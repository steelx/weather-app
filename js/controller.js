
angular.module('weatherApp')
	.controller('weatherCtrl', [
        '$scope', '$http', '$uibModal', 'weatherService',
        function($scope, $http, $uibModal, weatherService) {

            $scope.cities = ["Mumbai", "New York", "California"];
            $scope.currentCity = "Mumbai";
            $scope.weatherDate = new Date();
            $scope.weatherDateDay = new Date();

            $scope.cityChanged = function cityChanged(){
                weatherService.getForecast($scope.currentCity)
                    .then(
                        function (response) {
                            $scope.currentWeather = response.data;
                        },
                        function(reject){
                            console.log(reject);
                        }
                    );
            };

            $scope.$on("ADD_NEW_CITY", function(event, city){
                addNewCity(city);
            });
            function addNewCity(newCity) {
                $scope.cities.push(newCity);
            }
        }
	]
);