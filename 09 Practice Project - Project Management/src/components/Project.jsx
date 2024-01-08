export default function Project() {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex  justify-between">
				<h1 className="text-4xl font-bold text-stone-700">
					Learning React
				</h1>
				<button className="hover:text-red-500">Delete</button>
			</div>

			<p className="text-gray-400">Dec 29, 2024</p>

			<p>Description</p>
			<hr />
			<h2 className="text-3xl font-bold text-stone-700 ">Tasks</h2>
			<div className="flex">
				<input
					className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mr-4"
					type="text"
				/>
				<button className="text-stone-700 hover:text-stone-950">
					Add Task
				</button>
			</div>
			<p>This project does not have any tasks yet</p>
		</div>
	);
}
