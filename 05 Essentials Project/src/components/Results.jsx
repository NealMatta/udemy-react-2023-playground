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
					annualData.map((data) => {
						const investedCapital =
							data.year * data.annualInvestment +
							values.initialInvestment;
						const totalInterest =
							data.valueEndOfYear - investedCapital;
						return (
							<tr key={data.year}>
								<td>{data.year}</td>
								<td>{formatter.format(data.valueEndOfYear)}</td>
								<td>{formatter.format(data.interest)}</td>
								<td>{formatter.format(totalInterest)}</td>
								<td>{formatter.format(investedCapital)}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
}
