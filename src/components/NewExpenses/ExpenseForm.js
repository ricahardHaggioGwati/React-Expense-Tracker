import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')
    
    /* Alt approach to manage State
    const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
    })
    */

	const titleChangeHandler = (event) => {
		//storing the state of the targeted event
		setTitle(event.target.value);
		/*
        setUserInput(
        ...userInput
        enteredTitle: event.target.value
        )
        ````````
        When depending the value of the previous state to update the new state, the method above may result in capturing and updating the wrong state, rather use the below

            setTitle((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
            })
        */
	};
    
    const amountChangeHandler = (event) => {
		setAmount(event.target.value);
		/*
        setUserInput(
        ...userInput
        enteredAmount: event.target.value
        )
        */
	}

    const updateDateHandler = (event) => {
		setDate(event.target.value);
		/*
        setUserInput(
        ...userInput
        enteredDate: event.target.value
        )
        */
    }
    
    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
			title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate) 
        };
        
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input value={enteredTitle} onChange={titleChangeHandler} type='text' />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
                    <input
                        value={enteredAmount}           //Two way Binding
						onChange={amountChangeHandler}
						type='number'
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
                    <input
                        value={enteredDate}
						onChange={updateDateHandler}
						type='date'
						min='2019-01-01'
						max='2022-12-31'
					/>
				</div>
			</div>
			<div className='new-expense__actions '>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
