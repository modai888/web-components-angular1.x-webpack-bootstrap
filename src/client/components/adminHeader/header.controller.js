'use strict';

function HeaderController($scope, $timeout) {
    // 获取header主题
    // 获取collapse navbar主题
    $scope.headerTheme = 'th-black';
    $scope.collapseTheme = 'th-primary';
    $scope.appName = '金融系统';


    var setTheme = function () {
        var themes = ['white', 'light', 'dark', 'black', 'info', 'primary', 'success', 'warning', 'danger'];
        var hi = Math.round(Math.random() * (themes.length - 1));
        var ci = Math.round(Math.random() * (themes.length - 1));
        $scope.headerTheme = 'th-' + themes[hi];
        $scope.collapseTheme = 'th-' + themes[ci];

        $timeout(setTheme, 5000);
    };

    // setTheme();
}

HeaderController.$inject = ['$scope', '$timeout'];
module.exports = HeaderController;