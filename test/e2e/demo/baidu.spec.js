describe('baidu', function () {
    it('should have a title',function () {
        browser.ignoreSynchronization = true;
        browser.get('https://baidu.com');

        expect(browser.getTitle()).toEqual('百度一下，你就知道');
    })
});