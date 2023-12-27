import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
	return (
		// Fragments are used to make sure you're only returning a single value
		<>
			<Header />
			<main>
				{/* Use components when you have state values that shouldn't affect the function they live in */}
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
