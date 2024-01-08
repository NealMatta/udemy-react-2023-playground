export default function SideBar({ allProjects }) {
	function handleAdd() {
		console.log(allProjects);
	}
	return (
		<>
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				Your Projects
			</h2>

			<button
				onClick={handleAdd}
				className="px-6 py-2 mb-5 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
			>
				+ Add Project
			</button>
			{allProjects && (
				<div className="flex flex-col gap-3 ">
					{allProjects.map((project) => {
						return (
							<button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
								{project.title}
							</button>
						);
					})}
				</div>
			)}
		</>
	);
}
