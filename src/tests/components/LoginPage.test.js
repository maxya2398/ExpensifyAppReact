import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage startLogin={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', ()=>{
  const startLogin = jest.fn();//esto es un spy
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
