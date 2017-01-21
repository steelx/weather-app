angular.module("weatherApp")
    .factory('weatherService', ['$http', function ($http) {
        var API_KEY = '3d8b309701a13f65b660fa2c64cdc517', root_url = '//api.openweathermap.org/data/2.5/';
        var weatherInfo = {
            getWeather: getWeather,
            getForecast: getForecast
        };
        return weatherInfo;

        function getWeather(cityName) {
            return $http.get(root_url + 'weather', { params: { q: cityName, APPID: API_KEY} });
        }

        function getForecast(cityName) {
            return $http.get(root_url + 'forecast/daily', { params: { q: cityName, APPID: API_KEY, cnt: 4, units: "metric"} });
        }
    }
    ]);