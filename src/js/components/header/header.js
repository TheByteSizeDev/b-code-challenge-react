
const Header = ({loan, budget}) => (
    <div>
        <h1>Create Project Budget</h1>
        {/* The total funds for a load, maybe would be good to switch this to the budget model */}
        {/* Make it the counter of how much of the budget is left to be budgeted? */}
        <h2>Total Funds: ${loan.total_funds}</h2>
        {/* Total to be budgeted */}
        <h2>Total Budget: ${budget.total_budget}</h2>
        <h3>Loan Number: #{loan.loan_number}</h3>
    </div>
)

export default Header 