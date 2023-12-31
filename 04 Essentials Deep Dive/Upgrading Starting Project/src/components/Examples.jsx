import { useState } from 'react';
import TabButton from './TabButton';
import Section from './Section';
import { EXAMPLES } from '../data';
import Tabs from './Tabs';

export default function Examples() {
	// Since State is in it's own components, only this function is executed again when needed
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
		// console.log(selectedTopic);
	}

	let tabContent = <p>Please select a topic.</p>;

	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<Section id="examples">
			<h2>Examples</h2>
			<Tabs
				/* 67 - ButtonsContainer is a way to pass in HTML elements to other components
				It's even possible to pass in custom components using curly braces to enclose the 
				identifier */
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onClick={() => handleSelect('components')}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleSelect('jsx')}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onClick={() => handleSelect('props')}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onClick={() => handleSelect('state')}
						>
							State
						</TabButton>
					</>
				}
			>
				{tabContent}
			</Tabs>
		</Section>
	);
}
