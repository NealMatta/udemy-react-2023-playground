import { useRef } from 'react';

export default function Project({ currentProject, deleteProject, addTask }) {
	const taskValue = useRef();

	function handleAddingTask() {
		addTask(taskValue.current.value);
	}

	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-between">
				<h1 className="text-4xl font-bold text-stone-700">
					{currentProject.title}
				</h1>
				<button onClick={deleteProject} className="hover:text-red-500">
					Delete
				</button>
			</div>

			<p className="text-gray-400"> {currentProject.dueDate}</p>

			<p>{currentProject.description}</p>
			<hr />
			<h2 className="text-3xl font-bold text-stone-700 ">Tasks</h2>
			<div className="flex">
				<input
					ref={taskValue}
					className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mr-4"
					type="text"
				/>

				<button
					onClick={handleAddingTask}
					className="text-stone-700 hover:text-stone-950"
				>
					Add Task
				</button>
			</div>
			{/* If tasks is Empty */}
			{!currentProject.tasks.length > 0 && (
				<p>This project does not have any tasks yet</p>
			)}
			{currentProject.tasks.length > 0 &&
				currentProject.tasks.map((task, index) => {
					return <div key={index}> {task} </div>;
				})}
		</div>
	);
}
