/* React Hooks
1. Only call Hooks inside of component functions
2. Only call Hooks on the top level. They should not for example be called inside of if-statements */
import { useState } from 'react';
// Data
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
// Importing Components
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

// React only executes code once. It's only re-executed when there's a UI change
function App() {
	/* State is a React specifc component that tells React to re-render the component to which the 
  state belongs and its child and descendent components */

	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		/* Calling the set React function schedules the state update. This is an important distinction because 
    I cannot immediately use the new state value. For example, console logging the selectedTopic would be the
    previous value */
	}

	return (
		<div>
			<Header />
			<main>
				{/* Using components and props */}
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept
								key={conceptItem.title}
								{...conceptItem}
							/>
						))}
					</ul>
				</section>

				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{/* Wrapping other components is called component composition */}
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => {
								handleSelect('components');
							}}
						>
							Components
						</TabButton>
						{/* I could've passed the text as an attribute prop like above but 
            sometimes, this version is a bit more recognizable for tags*/}
						{/* For components that take a single piece of renderable content, using childeren is better. 
            Use attributes If I have multiple smaller pieces of information that must be passed to a component */}
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => {
								handleSelect('jsx');
							}}
						>
							JSX
						</TabButton>
						{/* Passing the handling of the click in lets me access dynamic content on this page. 
            What I used to do was create a separate component and then call it here. Doing something like this
            helps me keep things more organized and into smaller components
             */}
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => {
								handleSelect('props');
							}}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => {
								handleSelect('state');
							}}
						>
							State
						</TabButton>
					</menu>
					{!selectedTopic ? (
						<p>Please select a topic.</p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
