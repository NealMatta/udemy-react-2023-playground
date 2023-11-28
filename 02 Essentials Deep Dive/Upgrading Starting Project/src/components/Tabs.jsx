import React from 'react';

// Section 65. This is a wrapper component used to enforce structure when creating multiple components

// Setting multiple slots (Children and Button) is a way to compartmentalize the code and keep it consistent
export default function Tabs({ children, buttons }) {
	return (
		<>
			<menu>{buttons}</menu>
			{children}
		</>
	);
}
