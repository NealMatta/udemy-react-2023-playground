export default function UserInput({ values }) {
	return (
		<div id="user-input">
			<div>
				<label>Initial Investment</label>
				<input
					type="number"
					id="initialInvestment"
					defaultValue={values.initialInvestment}
				/>
			</div>
			<div>
				<label>Annual Investment</label>
				<input
					type="number"
					id="annualInvestment"
					defaultValue={values.annualInvestment}
				/>
			</div>
			<div>
				<label>Expected Return</label>
				<input
					type="number"
					id="expectedReturn"
					defaultValue={values.expectedReturn}
				/>
			</div>
			<div>
				<label>Duration</label>
				<input
					type="number"
					id="duration"
					defaultValue={values.duration}
				/>
			</div>
		</div>
	);
}
