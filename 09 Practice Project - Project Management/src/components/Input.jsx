import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, type }, ref) {
	return (
		<>
			<label className="text-sm font-bold uppercase text-stone-500">
				{label}
			</label>
			<input
				className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
				type={type}
				ref={ref}
			/>
		</>
	);
});

export default Input;
