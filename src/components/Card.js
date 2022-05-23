import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>;//children is a reserved name allowing us to add code inbetween the < >{}< />
}

export default Card