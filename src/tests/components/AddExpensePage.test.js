import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

<<<<<<< HEAD
beforeEach(()=>{
    startAddExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
=======
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
>>>>>>> de3a69f3ec1d8c57c8a719084edbb40bf9d15307
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

<<<<<<< HEAD
test('should hanlde onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
=======
test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
>>>>>>> de3a69f3ec1d8c57c8a719084edbb40bf9d15307
