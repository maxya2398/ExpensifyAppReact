import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Editar Gasto</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
        />
        <div>
          <button className="button button--secondary" onClick={this.onRemove}>Remover</button>
        </div>  
      </div>
      </div>
    );
  }
};

// return (
//   <div>
//     <ExpenseForm
//       expense={this.props.expense}
//       onSubmit={this.onSubmit}
//     />
//     <button onClick={this.onRemove}>Remove</button>
//   </div>
// );

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


// import React from 'react';
// import { connect } from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import { editExpense, removeExpense } from '../actions/expenses';

// export class EditExpensePage extends React.Component {
//   onSubmit = (expense) => {
//     this.props.editExpense(this.props.expense.id, expense);
//     this.props.history.push('/');
//   };
//   onRemove = () => {
//     this.props.removeExpense({ id: this.props.expense.id });
//     this.props.history.push('/');
//   };
//   render() {
//     return (
//       <div>
//         <ExpenseForm
//           expense={this.props.expense}
//           onSubmit={this.onSubmit}
//         />
//         <button onClick={this.onRemove}>Remove</button>
//       </div>
//     );
//   }
// };

// const mapStateToProps = (state, props) => ({
//   expense: state.expenses.find((expense) => expense.id === props.match.params.id)
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   editExpense: (id, expense) => dispatch(editExpense(id, expense)),
//   removeExpense: (data) => dispatch(removeExpense(data))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
