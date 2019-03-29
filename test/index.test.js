import { assert } from 'chai';
import ajax from '../src/index.js';

describe('ajax', () => {
    it('should be a function', () => {
        assert.isFunction(ajax);
    });
});

