angular.module("weatherApp")
    .factory('weatherService', ['$http', function ($http) {
        var apiKey = '3d8b309701a13f65b660fa2c64cdc517';//TODO constant
        var weatherInfo = {
            getWeather: getWeather,
            getForecast: getForecast
        };
        return weatherInfo;

        function getWeather(cityName) {
            return $http.get('http://api.openweathermap.org/data/2.5/weather', { params: { q: cityName, APPID: apiKey} });
        }

        function getForecast(cityName) {
            return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily', { params: { q: cityName, APPID: apiKey, cnt: 4, units: "metric"} });
        }
    }
    ]);