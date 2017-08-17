import React from 'react';
import sinon from 'sinon';
import {mount} from 'enzyme';
import {assert} from 'chai';
import Unredo from './unredo';

describe('<Unredo />', () => {
    const undoSpy = sinon.spy();
    const redoSpy = sinon.spy();
    const wrapper = mount(<Unredo redo={redoSpy} undo={undoSpy} canRedo={false} canUndo={true}/>)
    it('should can undo', () => {
        assert.strictEqual(wrapper.find('[disabled=false]').text(), 'Undo');
    })
    it('should undo when click Undo', () => {
        wrapper.find('[disabled=false]').simulate('click');
        assert.strictEqual(undoSpy.calledOnce, true);
    })
    it('should not Redo when click Redo', () => {
        wrapper.find('[disabled=true]').simulate('click');
        assert.strictEqual(redoSpy.calledOnce, false);
    })

})