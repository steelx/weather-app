angular.module("weatherApp")
    .directive("addCityModal", ['$uibModal', '$rootScope', function modalTrigger($uibModal, $rootScope) {
        function postLink(scope, elem, attrs) {
            function onClick() {
                var size = scope.$eval(attrs.size) || 'lg'; // default to large size
                var $modalInstance = $uibModal.open({
                    controller: ['$uibModalInstance', function ($uibModalInstance) {
                        var vm = this;
                        vm.addCity = function addCity(city) {
                            $uibModalInstance.close(city);
                        };
                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }],
                    controllerAs: 'vm',
                    templateUrl : 'js/addCityModal/addCityModalTpl.html',
                    size: size
                });
                $modalInstance.result.then(
                    function (newCity) {
                        if(newCity) {
                            $rootScope.$broadcast('ADD_NEW_CITY', newCity);
                        }
                    },
                    function (reason) {
                        console.log("Modal closed");
                    }
                );
            }

            elem.on('click', onClick);
            scope.$on('$destroy', function() {
                elem.off('click', onClick);
            });
        }

        return {
            restrict: 'A',
            link: postLink
        };
    }
]);