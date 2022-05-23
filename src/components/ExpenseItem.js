import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {   // passes key value pairs key:attribute names in App.js, value = value recieved

	return (
		<Card className='expense-item'>
            <ExpenseDate date={props.date}/>              
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;

//<ExpenseDate/> can be wriiten this way if they is no content inbetween the opening and closing square brackets