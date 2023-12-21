import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';

export default function Results({ values }) {
	const annualData = calculateInvestmentResults(values);

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{annualData &&
					annualData.map((val) => {
						return (
							<tr key={val.year}>
								<td>{val.year}</td>
								<td>{formatter.format(val.valueEndOfYear)}</td>
								<td>{formatter.format(val.interest)}</td>
								<td>
									{formatter.format(
										val.valueEndOfYear -
											(val.year * val.annualInvestment +
												values.initialInvestment)
									)}
								</td>
								<td>
									{formatter.format(
										val.year * val.annualInvestment +
											values.initialInvestment
									)}
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
}
