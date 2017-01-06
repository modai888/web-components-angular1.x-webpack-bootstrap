'use strict';

var _ = require('lodash');
var combineReducers = require('redux').combineReducers;
// 整合页面上各组件的reducer
var layoutReducers = require('./layout/layout.redux').reducers;

// actions
const TOGGLE_ASIDE = 'TOGGLE_ASIDE';

// action creators
function toggleAside() {
    return {
        type: TOGGLE_ASIDE
    }
}


// reducers

function layoutSettings(preState, action) {
    // 设定默认值
    console.log('reducer: layoutSettings... with action: ' + action.type);
    if (_.isUndefined(preState)) {
        preState = {
            asideFolded: false,
            headingTheme: 'primary',
            navbarTheme: 'primary',
            asideTheme: 'primary'
        }
    }

    switch (action.type) {
        case TOGGLE_ASIDE:
            return _.assign({}, preState, {asideFolded: !preState.asideFolded});
            break;
        default:
            return preState;
    }

}

module.exports = {
    reducers: combineReducers(_.assign({}, {
        layoutSettings: layoutSettings
    }, layoutReducers)),
    actions: {
        toggleAside: toggleAside
    }
};


