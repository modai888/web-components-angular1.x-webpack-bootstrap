'use strict';

var actions = require('./layout.redux').actions;

module.exports = ['$ngRedux', '$scope', function ($ngRedux, $scope) {
    var vm = this;

    vm.themes = ['black', 'dark', 'primary', 'success', 'info', 'warning', 'light'];

    var unsubscribe = $ngRedux.connect(mapStateToTarget, actions)(this);
    $scope.$on('$destroy', unsubscribe);
}];

function mapStateToTarget(state) {
    var themes = state.themes;
    return {
        heading: themes.heading,
        navbar: themes.navbar,
        leftAside: themes.aside
    }
}