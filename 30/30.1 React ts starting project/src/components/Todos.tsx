// What React.FC does is that it defines this function is a functional component
// It makes it so that I don't have to always import children and define the type

import Todo from '../models/todo';
import SingleTodo from './SingleTodo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul>
			{props.items.map(({ id, text }) => (
				<SingleTodo key={id} text={text} />
			))}
		</ul>
	);
};

export default Todos;
