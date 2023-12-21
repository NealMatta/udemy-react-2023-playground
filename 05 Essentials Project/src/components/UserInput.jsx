export default function UserInput() {
	return (
		<div id="user-input">
			<div>
				<label>Initial Investment</label>
				<input type="number" id="initialInvestment" />
			</div>
			<div>
				<label>Annual Investment</label>
				<input type="number" id="annualInvestment" />
			</div>
			<div>
				<label>Expected Return</label>
				<input type="number" id="expectedReturn" />
			</div>
			<div>
				<label>Duration</label>
				<input type="number" id="duration" />
			</div>
		</div>
	);
}
