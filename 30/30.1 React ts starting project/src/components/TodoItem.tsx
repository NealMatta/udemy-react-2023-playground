import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};

export default TodoItem;

/* If you use React.FC, it automatically types children for you 
because React.FC includes children in its type definition. 
However, with the function keyword or when not using 
React.FC, you must explicitly type children as shown above. */
