const assert = chai.assert;
const ajax = window.ajax;

describe('ajax', function () {
    it('should be a function', function () {
        assert.isFunction(ajax);
    });
});

describe('Mthod: GET within fetch', function () {
    it('response should be an object', function () {
        ajax('https://httpbin.org/get', {
            success: function (data) {
                assert.isObject(data);
            }
        });
    });
});

describe('Mthod: POST within fetch', function () {
    it('response should be an object', function () {
        ajax('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ HK: 3345678 }) },
        {
            success: function (data) {
                assert.isObject(data);
            }
        });
    });
});

describe('Mthod: GET within XMLHttpRequest', function () {
    it('response should be an object', function () {
        ajax('https://httpbin.org/get', {
            mechanism: 'XMLHttpRequest' },
        {
            success: function (data) {
                assert.isObject(data);
            }
        });
    });
});

describe('Mthod: POST within XMLHttpRequest', function () {
    it('response should be an object', function () {
        ajax('https://httpbin.org/post', {
            mechanism: 'XMLHttpRequest',
            method: 'POST' },
        {
            success: function (data) {
                assert.isObject(data);
            }
        });
    });
});

