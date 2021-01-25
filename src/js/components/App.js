import React, {useState, useEffect} from 'react'
import './App.css';
import APIManager from "../../API/APIManager.js"
import Grid from './grid/grid.js'
import Header from './header/header.js'

const App = props => {

  const [budget, setBudget] = useState([])
  const [loan, setLoan] = useState([])
  const [collateral, setCollateral] = useState([])

  useEffect(() => {
    APIManager.all().then(data => {
      const budgetData = data.budget
      const loanData = data.loan
      const collateralData = data.collateral
      setBudget(budgetData[0]);
      setLoan(loanData[0]);
      setCollateral(collateralData[0]);
    })
  }, []);

  return (
    <div>
      <Header
      budget={budget}
      loan={loan}
      />
      <Grid 
      budget={budget}
      />
    </div>
  )
}

export default App
