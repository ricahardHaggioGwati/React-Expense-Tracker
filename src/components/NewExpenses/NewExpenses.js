import {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpense = (props) => {
  const [isEditing, setIsEnding] = useState(false)


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEnding(false)
  };

  const startEditingHandler = () => {
  setIsEnding(true)
  }
  
  const stopEditingHandler = () => {
    setIsEnding(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
      {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
      
    </div>
  );
};

export default NewExpense;