import { CORE_CONCEPTS } from './data';
// Importing Components
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
	function handleSelect() {
		alert('Nice!');
	}

	return (
		<div>
			<Header />
			<main>
				{/* Using components and props */}
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>

				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{/* Wrapping other components is called component composition */}
						<TabButton onSelect={handleSelect}>
							Components
						</TabButton>
						{/* I could've passed the text as an attribute prop like above but 
            sometimes, this version is a bit more recognizable for tags*/}
						{/* For components that take a single piece of renderable content, using childeren is better. 
            Use attributes If I have multiple smaller pieces of information that must be passed to a component */}
						<TabButton onSelect={handleSelect}>JSX</TabButton>
						{/* Passing the handling of the click in lets me access dynamic content on this page. 
            What I used to do was create a separate component and then call it here. Doing something like this
            helps me keep things more organized and into smaller components
             */}
						<TabButton onSelect={handleSelect}>Props</TabButton>
						<TabButton onSelect={handleSelect}>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
