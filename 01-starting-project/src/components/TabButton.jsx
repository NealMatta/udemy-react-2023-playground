// Object Destructuring from props.children --> Children
export default function TabButton({ children, onSelect }) {
	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
}
