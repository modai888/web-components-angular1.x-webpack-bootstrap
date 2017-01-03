'use strict';
// reducer就是根据action更新state的逻辑
var combineReducers = require('redux').combineReducers;

// reducer:  selectedReddit
function selectedReddit(state, action) {
    // set default:
    state = state || 'angularjs';
    switch (action.type) {
        case "SELECT_REDDIT":
            return action.reddit;
        default:
            return state;
    }
}

//  reducer： postsByReddit

function posts(state, action) {
    if (!state) state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    };

    switch (action.type) {
        case 'INVALIDATE_REDDIT':
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case 'REQUEST_POSTS':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case 'RECEIVE_POSTS':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function postsByReddit(state, action) {
    state = state || {};
    switch (action.type) {
        case 'INVALIDATE_REDDIT':
        case 'RECEIVE_POSTS':
        case 'REQUEST_POSTS':
            var ret = {};
            ret[action.reddit] = posts(state[action.reddit], action);
            return Object.assign({}, state, ret);
        default:
            return state;
    }
}

module.exports = combineReducers({
    selectedReddit: selectedReddit,
    postsByReddit: postsByReddit
});

