'use strict';

function AsideController($scope, $timeout) {
    $scope.menus = {
        label: 'root',
        children: [
            {
                label: 'Dashboard',
                icon: 'fa fa-bars',
                children: [
                    {
                        label: 'Dashboard v1',
                    },
                    {
                        label: 'Dashboard v2',
                    }
                ]
            }, {
                label: 'Layout',
                icon: 'fa fa-bars',
                children: [
                    {
                        label: 'Application',
                    }, {
                        label: 'Full Width',
                    }, {
                        label: 'Boxed'
                    }
                ]
            }
        ]
    }
}

AsideController.$inject = ['$scope', '$timeout'];
module.exports = AsideController;