import React from 'react';

// 65 - This is a wrapper component used to enforce structure when creating multiple components

// Setting multiple slots (Children and Button) is a way to compartmentalize the code and keep it consistent

export default function Tabs({
	children,
	buttons,
	ButtonsContainer = 'menu' /*68 - Easy way to set default components on props */,
}) {
	/* 67 - ButtonsContainer is either a standard identifier or a custom 
	component. Depending on if the value is a string or a custom component, React
	automatically creates the component. 
	
	One thing to note here is that this destructured component needs to be capitalized*/

	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
