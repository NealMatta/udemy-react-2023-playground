// What React.FC does is that it defines this function is a functional component
// It makes it so that I don't have to always import children and define the type

const Todos: React.FC<{ items: string[] }> = (props) => {
	return (
		<>
			<ul>
				{props.items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default Todos;
