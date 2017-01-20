
angular.module('weatherApp')
	.controller('weatherController', [
        '$scope', '$http', '$uibModal', 'weatherService',
        function($scope, $http, $uibModal, weatherService) {
			var weatherCtrl = this;
            weatherCtrl.cities = ["Mumbai", "New York", "California"];
            weatherCtrl.currentCity = "Mumbai";
            weatherCtrl.weatherDate = new Date();
            weatherCtrl.weatherDateDay = new Date();

            weatherCtrl.cityChanged = function cityChanged(){
                weatherService.getForecast(weatherCtrl.currentCity)
                    .then(
                        function (response) {
                            weatherCtrl.currentWeather = response.data;
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
                weatherCtrl.cities.push(newCity);
            }
        }
	]
);