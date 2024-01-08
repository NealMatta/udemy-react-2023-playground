import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import Project from './components/Project';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';

/* Project Structure
{
  title: "",
  description: "",
  dueDate: "",
  tasks: ["",""]
}

*/
function App() {
	const [projects, setProjects] = useState([]);
	const [mainShow, setMainShow] = useState(0);

	function handleAddProject() {
		setMainShow(1);
	}
	function handleNoProject() {
		setMainShow(0);
	}

	function handleSaveNewProject(title, description, dueDate) {
		const newProject = {
			title: title,
			description: description,
			dueDate: dueDate,
			tasks: [],
		};
		setProjects([...projects, newProject]);
	}
	return (
		<>
			<main className="h-screen flex gap-8 pt-10">
				{/* Side Bar */}
				<section className="p-10 w-1/5 bg-stone-950 rounded-tr-3xl">
					<SideBar
						allProjects={projects}
						handleAddProject={handleAddProject}
					/>
				</section>

				{/* Main Component */}
				<div className="w-3/5 p-10">
					{mainShow === 0 && (
						<NoProjectSelected
							handleAddProject={handleAddProject}
						/>
					)}
					{mainShow === 1 && (
						<NewProject
							handleNewProject={handleSaveNewProject}
							handleNoProject={handleNoProject}
						/>
					)}
					{mainShow === 2 && <Project />}
				</div>
			</main>
		</>
	);
}

export default App;
