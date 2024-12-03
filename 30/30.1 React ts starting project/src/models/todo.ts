// Since I'm not creating a component, it doesn't need to be tsx
class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
	}
}
export default Todo;
