// What React.FC does is that it defines this function is a functional component
// It makes it so that I don't have to always import children and define the type

import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
			))}
		</ul>
	);
};

export default Todos;
