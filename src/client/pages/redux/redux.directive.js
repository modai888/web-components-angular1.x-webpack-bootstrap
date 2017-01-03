'use strict';

module.exports = [function reduxApp() {
    return {
        restrict: 'E',
        controllerAs: 'app',
        controller: ReduxAppController,
        template: require('./redux.html'),
        scope: {}
    };
}];

ReduxAppController.$inject = ['$ngRedux', '$scope', 'AsyncActions'];
function ReduxAppController($ngRedux, $scope, AsyncActions) {
    var self = this;

    self.options = ['angularjs', 'frontend'];
    self.handleChange = function (reddit) {
        self.selectReddit(reddit);
    };
    self.handleRefreshClick = function () {
        self.invalidateReddit(self.selectedReddit);
        self.fetchPostsIfNeeded(self.selectedReddit);
    };
    self.componentWillReceiveStateAndActions = function (nextState, nextActions) {
        if (nextState.selectedReddit !== self.selectedReddit) {
            nextActions.fetchPostsIfNeeded(nextState.selectedReddit);
        }
    };

    // 建立组件与redux的关联
    var unsubscribe = $ngRedux.connect(mapStateToTarget, AsyncActions)(function (selectedState, actions) {
        self.componentWillReceiveStateAndActions(selectedState, actions);
        Object.assign(self, selectedState, actions);
    });

    self.fetchPostsIfNeeded(self.selectedReddit);
    $scope.$on('$destroy', unsubscribe);
}

// 状态选择器，选择指定的状态
function mapStateToTarget(state) {
    var postsByReddit = state.postsByReddit;
    var ret = postsByReddit[state.selectedReddit] || {};
    return {
        selectedReddit: state.selectedReddit,
        posts: ret.items || [],
        isFetching: typeof ret.isFetching === 'undefined' ? true : ret.isFetching,
        lastUpdated: ret.lastUpdated
    };
}
