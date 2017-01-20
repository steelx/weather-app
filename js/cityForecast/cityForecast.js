angular.module("weatherApp")
    .directive("cityForecast", [function () {
        return {
            restrict: "AE",
            scope: { currentWeather: '=' },
            templateUrl: 'js/cityForecast/cityForecastTpl.html',
            replace: true,
            transclude: true
        };
    }
]);