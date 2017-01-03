'use strict';

// action creators

function selectReddit(reddit) {
    return {
        type: 'SELECT_REDDIT',
        reddit: reddit
    }
}

function invalidateReddit(reddit) {
    return {
        type: 'INVALIDATE_REDDIT',
        reddit: reddit
    }
}

function requestPosts(reddit) {
    return {
        type: 'REQUEST_POSTS',
        reddit: reddit
    }
}

function receivePosts(reddit, json) {
    return {
        type: 'RECEIVE_POSTS',
        reddit: reddit,
        posts: json.data.children.map(function (c) {
            return c.data;
        }),
        receivedAt: Date.now()
    }
}


module.exports = ['$http', function asyncService($http) {

    function fetchPosts(reddit) {
        return function (dispatch) {
            dispatch(requestPosts(reddit));
            return $http.get('http://www.reddit.com/r/' + reddit + '.json')
                .then(function (res) {
                    var json = res.data;
                    dispatch(receivePosts(reddit, json));
                })
        }
    }

    function shouldFetchPosts(state, reddit) {
        var posts = state.postsByReddit[reddit];
        if(!posts) return true;
        if(posts.isFetching) return false;
        return posts.didInvalidate;
    }

    function fetchPostsIfNeeded(reddit) {
        return function (dispatch, getState) {
            if (shouldFetchPosts(getState(), reddit)) {
                return dispatch(fetchPosts(reddit));
            }
        }
    }

    return {
        selectReddit: selectReddit,
        invalidateReddit: invalidateReddit,
        fetchPostsIfNeeded: fetchPostsIfNeeded
    }
}];