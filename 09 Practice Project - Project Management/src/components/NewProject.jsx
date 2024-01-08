import Input from './Input';
import { useRef } from 'react';

export default function NewProject({ handleNewProject }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleCancel() {
		title.current.value = '';
		description.current.value = '';
		dueDate.current.value = '';
	}

	function handleSave() {
		handleNewProject(
			title.current.value,
			description.current.value,
			dueDate.current.value
		);
		handleCancel();
	}

	return (
		<div className="flex flex-col gap-3">
			<div className="flex flex-row justify-end gap-4 my-4">
				<button
					onClick={handleCancel}
					className="text-stone-700 hover:text-red-500"
				>
					Cancel
				</button>
				<button
					className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
					onClick={handleSave}
				>
					Save
				</button>
			</div>
			<Input label={'title'} type={'text'} ref={title} />
			<Input label={'description'} type={'text'} ref={description} />
			<Input label={'due date'} type={'date'} ref={dueDate} />
		</div>
	);
}
