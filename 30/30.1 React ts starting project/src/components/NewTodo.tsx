import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	// Need to be perscriptive about what type of data it would be connected to
	// All HTML Values have their own type
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		// Question mark addition ensures that typescript can extract the value
		const enteredText = todoTextInputRef.current?.value;

		if (!enteredText || enteredText.trim().length === 0) {
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<label>Add Todo</label>
		</form>
	);
};

export default NewTodo;
