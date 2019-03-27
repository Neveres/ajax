import { assert } from 'chai';
import ajax from './../index';

describe('ajax', () => {
    it('should be a function', () => {
        assert.isFunction(ajax);
    });
});

