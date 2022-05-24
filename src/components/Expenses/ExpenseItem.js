import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {   // passes key value pairs key:attribute names in App.js, value = value recieved
	// React Hook useState return [].length === 1 || [0] === current state value, [1] === function to update the state
	const [title, setTitle] = useState(props.title)						
	
	const clickHandler = () => {
		setTitle('Updated')
		console.log(title)
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	);
}

export default ExpenseItem;

//<ExpenseDate/> can be wriiten this way if they is no content inbetween the opening and closing square brackets