const SingleTodo: React.FC<{ text: string }> = (props) => {
	return (
		<>
			<li>{props.text}</li>
			<li>{props.children}</li>
		</>
	);
};

export default SingleTodo;

/* If you use React.FC, it automatically types children for you 
because React.FC includes children in its type definition. 
However, with the function keyword or when not using 
React.FC, you must explicitly type children as shown above. */
