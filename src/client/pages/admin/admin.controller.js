'use strict';
var actions = require('./admin.redux').actions;

module.exports = function AdminController($ngRedux, $scope) {
    'ngInject';

    var vm = this;
    vm.title = '管理后台';

    // 绑定redux状态树
    console.log('connect adminController to Redux...');
    var unsubscribe = $ngRedux.connect(mapStateToTarget, actions)(this);
    console.log('connected...');
    $scope.$on('$destroy', unsubscribe);
};

function mapStateToTarget(state) {
    console.log('adminController get Redux state...');
    var settings = state.layoutSettings;
    var themes = state.themes;
    return {
        asideFolded: settings.asideFolded,
        headingTheme: themes.heading,
        navbarTheme: themes.navbar,
        asideTheme: themes.aside
    }
}
