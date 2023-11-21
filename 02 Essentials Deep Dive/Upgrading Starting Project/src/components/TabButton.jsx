// Using the forwarding props method lets me not have to worry about passing in things like functions but
// rather I can use onClick normally when calling the button in the first place
export default function TabButton({ children, isSelected, ...props }) {
	console.log('TABBUTTON COMPONENT EXECUTING');
	return (
		<li>
			<button className={isSelected ? 'active' : undefined} {...props}>
				{children}
			</button>
		</li>
	);
}
