import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

<<<<<<< HEAD
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
=======
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
>>>>>>> de3a69f3ec1d8c57c8a719084edbb40bf9d15307

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
<<<<<<< HEAD
    composeEnhacers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
=======
    composeEnhancers(applyMiddleware(thunk))
>>>>>>> de3a69f3ec1d8c57c8a719084edbb40bf9d15307
  );

  return store;
};
