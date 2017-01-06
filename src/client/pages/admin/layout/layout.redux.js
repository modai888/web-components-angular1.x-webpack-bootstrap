'use strict';

var _ = require('lodash');

// actions
const SELECT_THEME = 'SELECT_THEME';

// action creators
function selectTheme(theme, target) {
    return {
        type: SELECT_THEME,
        target: target,
        theme: theme
    }
}


// reducers
function themes(preState, action) {
    if (_.isUndefined(preState)) {
        // 初始化默认状态
        var profiles = JSON.parse(localStorage.getItem('layout_themes') || '{}');
        preState = _.assign({
            heading: 'primary',
            navbar: 'primary',
            aside: 'dark'
        }, profiles);
    }
    switch (action.type) {
        case SELECT_THEME:
            var state = {}, newState;
            state[action.target] = action.theme;
            newState = _.assign({}, preState, state);
            // 布局设置缓存
            debugger;
            localStorage.setItem('layout_themes', JSON.stringify(newState));
            return newState;
            break;
        default:
            return preState;
    }
}

module.exports = {
    reducers: {
        themes: themes
    },
    actions: {
        selectTheme: selectTheme
    }
};