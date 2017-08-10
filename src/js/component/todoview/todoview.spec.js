import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import TodoView from './todoview';
import { VisibilityFilters } from '../../actions';

describe('<TodoView />', () => {
  it('renders className', () => {
    const wrapper = shallow(
      <TodoView handleClick={() => {
        console.log('click')
      }} currentState={VisibilityFilters.SHOW_ALL} className="testClassName" />
    );
    assert.strictEqual(wrapper.find('.btn-primary').length, 1);
  });
});