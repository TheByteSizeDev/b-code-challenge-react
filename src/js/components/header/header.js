
const Header = ({loan, budget}) => (
    <div>
        <h1>Create Project Budget</h1>
        <h2>Total Funds: ${loan.total_funds}</h2>
        <h2>Total Budget: ${budget.total_budget}</h2>
        <h3>Loan Number: #{loan.loan_number}</h3>
    </div>
)

export default Header 