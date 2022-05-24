import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
        };
        props.onAddExpense(expenseData)
	};

	return (
		<div className='new-expenses'>
			<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
		</div>
	);
};

export default NewExpenses;
