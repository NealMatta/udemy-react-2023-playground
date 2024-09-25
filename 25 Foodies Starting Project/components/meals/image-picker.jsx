'use client';
// Need to do above because I'm using event handlers which are only on client side

import { useRef } from 'react';
import classes from './image-picker.module.css';
export default function ImagePicker({ label, name }) {
	const imageInput = useRef();

	function handlePickClick() {
		// Doing this so that I can reference the input button without having to show the ugly button
		imageInput.current.click();
	}
	return (
		<>
			<div className={classes.picker}>
				<label htmlFor={name}>{label}</label>
				<div c lang={classes.control}>
					<input
						className={classes.input}
						type="file"
						id={name}
						accept="image/png, image/jpeg"
						name={name}
						ref={imageInput}
					/>

					<button className={classes.button} type="button" onClick={handlePickClick}>
						Pick an Image
					</button>
				</div>
			</div>
		</>
	);
}
