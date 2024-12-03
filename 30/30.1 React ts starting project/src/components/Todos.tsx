// What React.FC does is that it defines this function is a functional component
// It makes it so that I don't have to always import children and define the type

import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
	return (
		<ul>
			{props.items.map(({ id, text }) => (
				<TodoItem key={id} text={text} onRemoveTodo={props.onRemoveTodo.bind(null, id)} />
			))}
		</ul>
	);
};

export default Todos;
