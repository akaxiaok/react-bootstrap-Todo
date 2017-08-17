import {assert} from 'chai';
import store from './store';

describe('store', () => {
    it('should store created', () => {
        assert.isOk(store);
    })
})
