import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Valores default', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Deberia poner ordenar por cargo', ()=>{
    const state= filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Deberia poner ordenar por Fecha', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state= filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});


test('Set Text Filter', ()=>{
    const text= 'esto';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text);
});

test('Set StartDate Filter', ()=>{
    const startDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
    expect(state.startDate).toBe(startDate);
});

test('Set EndDate Filter', ()=>{
    const endDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
    expect(state.endDate).toBe(endDate);
});