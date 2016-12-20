'use strict';

var headerDir = require('./header.directive')();

describe('components -> header', function () {

    it('should has a template', function () {
        expect(headerDir.template).toContain('首页');
    })

});