import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import Project from './components/Project';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
	return (
		<>
			<main className="h-screen flex gap-8 pt-10">
				{/* Side Bar */}
				<section className="p-10 w-1/5 bg-stone-950 rounded-tr-3xl">
					<SideBar />
				</section>

				{/* Main Component */}
				<div className="w-3/5 p-10">
					{/* <NewProject /> */}
					{/* <Project /> */}
					<NoProjectSelected />
				</div>
			</main>
		</>
	);
}

export default App;
