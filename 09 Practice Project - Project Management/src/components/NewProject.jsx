import Input from './Input';

export default function NewProject() {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex flex-row justify-end gap-4 my-4">
				<button className="text-stone-700 hover:text-red-500">
					Cancel
				</button>
				<button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
					Save
				</button>
			</div>
			<Input label={'title'} type={'text'} />
			<Input label={'description'} type={'text'} />
			<Input label={'due date'} type={'date'} />
		</div>
	);
}
