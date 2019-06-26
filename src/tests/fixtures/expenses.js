import moment from 'moment';

export default [{
    id: '1',
    description: 'Goma',
    note: '',
    amount: 1.95,
    createdAt: 0
}, {
    id: '2',
    description: 'Lapiz',
    note: '',
    amount: 300,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Calculadora',
    note: '',
    amount: 18.23,
    createdAt:  moment(0).add(4, 'days').valueOf()
}]