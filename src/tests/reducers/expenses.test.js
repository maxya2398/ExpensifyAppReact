import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('Default', ()=>{
    const state=expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('ID EXISTE', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state=expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('ID No EXISTE', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Add Expense', ()=>{
    const expense = {
        id: '4',
        description: 'Hola',
        note: '',
        amount: 15.95,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Edit Expense con Id Real', ()=>{
    const amount= 120000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    };
    const state=expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Edit Expense sin Id Real', ()=>{
    const amount= 120000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '920',
        updates:{
            amount
        }
    };
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});