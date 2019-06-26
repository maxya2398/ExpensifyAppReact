import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Deberia remover', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('Deberia editar', ()=>{
    const actionEdit = editExpense('123abc', { note: 'New Note'});
    expect(actionEdit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    })
});


test('Deberia agregar con valores que se proveen', ()=>{
    const expenseData = {
        description: 'Renta',
        note: 'Renta de ultimo mes',
        amount: 109500,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Deberia agregar con valores por default', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});