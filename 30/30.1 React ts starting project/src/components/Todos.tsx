// What React.FC does is that it defines this function is a functional component
// It makes it so that I don't have to always import children and define the type

import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<>
			<ul>
				{props.items.map(({ id, text }) => (
					<li key={id}>{text}</li>
				))}
			</ul>
		</>
	);
};

export default Todos;
