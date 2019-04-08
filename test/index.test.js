const assert = chai.assert;
const ajax = window.ajax;

describe('ajax', function () {
    it('should be a function', function () {
        assert.isFunction(ajax);
    });
});

