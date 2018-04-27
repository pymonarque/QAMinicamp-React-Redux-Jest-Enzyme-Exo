import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Clock from './Clock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    updateTime: jest.fn(),
    time: new Date().toLocaleTimeString()
  }
  const enzymeWrapper = mount(
    <Clock {...props} />
  )
  return {
    props,
    enzymeWrapper
  }
}

describe('Clock component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()
        expect( enzymeWrapper.find( 'h2' ).text() ).toBe('It is ' + props.time + '.')
    })
})