import React, {useState, useEffect} from 'react'
import './App.css';
import APIManager from "../../API/APIManager.js"
import Grid from './grid/grid.js'
import Header from './header/header.js'

//TODO: If this was connected to redux this would need to be wrapped in the connect function
const App = props => {

  // Using the UseState Hook (?) to create these state variables and their setters
  const [budget, setBudget] = useState([])
  const [loan, setLoan] = useState([])
  // Not sure how to use this yet because I'm not sure what collateral is...
  const [collateral, setCollateral] = useState([])

  // useEffect hook is like componentDidMount, run the api call and set the state
  // After the component mounts I believe
  useEffect(() => {
    APIManager.all().then(data => {
      // Get each one of our models
      const budgetData = data.budget
      const loanData = data.loan
      const collateralData = data.collateral
      // Set the state
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
