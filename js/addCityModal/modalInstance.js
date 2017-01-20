angular.module("weatherApp")
    .factory('modalInstance', ['$uibModal', function ($uibModal) {
        var open = function (size, title, message) {
            return $uibModal.open({
                controller: ['items', '$uibModalInstance', function (items, $uibModalInstance) {
                    var vm = this;
                    console.log(items);
                    vm.addCity = items;
                    vm.confirm = function addCity(city) {
                        $uibModalInstance.close(city);
                    };
                    vm.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }],
                controllerAs: 'vm',
                templateUrl : 'js/addCityModal/addCityModalTpl.html',
                size: size,
                resolve: {
                    items: function() {
                        return {
                            title: title,
                            message: message
                        };
                    }
                }
            });
        };

        return {
            open: open
        };
    }]);