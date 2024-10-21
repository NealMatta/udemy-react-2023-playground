import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';

function App() {
	return (
		<main>
			<section>
				<h2>Why work with us?</h2>
				<Accordion className="accordion">
					<AccordionItem className="accordion-item" title="We got 20 years of experience">
						<article>
							<p>You cant go wrong with us</p>
							<p>We are in the bussiness of planning good trips</p>
						</article>
					</AccordionItem>
					<AccordionItem className="accordion-item" title="We're working with local guides">
						<article>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
						</article>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
}

export default App;
