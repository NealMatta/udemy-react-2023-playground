export default function UserInput() {
	return (
		<div id="user-input">
			<div className="input-group">
				<label htmlFor="initialInvestment">Initial Investment</label>
				<input type="number" id="initialInvestment" />
			</div>
			<div className="input-group">
				<label htmlFor="annualInvestment">Annual Investment</label>
				<input type="number" id="annualInvestment" />
			</div>
			<div className="input-group">
				<label htmlFor="expectedReturn">Expected Return</label>
				<input type="number" id="expectedReturn" />
			</div>
			<div className="input-group">
				<label htmlFor="duration">Duration</label>
				<input type="number" id="duration" />
			</div>
		</div>
	);
}
