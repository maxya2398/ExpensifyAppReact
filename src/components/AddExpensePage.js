import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
<<<<<<< HEAD
  onSubmit = (expense) =>{
=======
  onSubmit = (expense) => {
>>>>>>> de3a69f3ec1d8c57c8a719084edbb40bf9d15307
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
