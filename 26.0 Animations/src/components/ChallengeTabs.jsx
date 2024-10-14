import Badge from './Badge.jsx';
import { motion } from 'framer-motion';

function Tab({ isSelected, onSelect, badgeCaption, children }) {
	return (
		<li>
			<button className={isSelected ? 'selected' : undefined} onClick={onSelect}>
				{children}
				{/* Adding keys means that the component will be destroyed, recreated, and then retrigger any animations */}
				<Badge key={badgeCaption} caption={badgeCaption}></Badge>
			</button>
			{/* Having a layout ID means that Framer Motion will automatically look for when 
      another element in you page has the same ID and then plays an animation to smoothly animate it */}
			{isSelected && <motion.div layoutId="tab-indicator" className="active-tab-indicator" />}
		</li>
	);
}

export default function ChallengeTabs({ selectedType, onSelectType, challenges, children }) {
	return (
		<>
			<menu id="tabs">
				<Tab
					isSelected={selectedType === 'active'}
					onSelect={() => onSelectType('active')}
					badgeCaption={challenges.active.length}
				>
					Active
				</Tab>
				<Tab
					isSelected={selectedType === 'completed'}
					onSelect={() => onSelectType('completed')}
					badgeCaption={challenges.completed.length}
				>
					Completed
				</Tab>
				<Tab
					isSelected={selectedType === 'failed'}
					onSelect={() => onSelectType('failed')}
					badgeCaption={challenges.failed.length}
				>
					Failed
				</Tab>
			</menu>
			<div>{children}</div>
		</>
	);
}
