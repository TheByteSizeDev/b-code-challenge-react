const Header = props => (
    <div>
        <h1>Create Project Budget</h1>
        <h2>Total Funds: ${props.loan.total_funds}</h2>
        <h2>Total Budget: ${props.budget.total_budget}</h2>
        <h3>Loan Number: #{props.loan_number}</h3>
    </div>
)

export default Header 