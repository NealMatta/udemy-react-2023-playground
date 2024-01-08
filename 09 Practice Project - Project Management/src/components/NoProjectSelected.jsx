import noProject from '../assets/no-projects.png';

export default function NoProjectSelected() {
	return (
		<div className="flex flex-col  mx-auto gap-4">
			<img src={noProject} className="w-16 h-16 object-contain mx-auto" />
			<h1 className="mx-auto text-3xl font-bold">No Project Selected</h1>
			<p className="mx-auto text-xl">
				Select a project or get started with a new one{' '}
			</p>
			<button className=" mx-auto w-auto rounded-lg p-2 px-4 bg-stone-500">
				Create a new Project
			</button>
		</div>
	);
}
