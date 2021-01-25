import { connect } from 'react-redux';
// import {useEffect} from 'react'
// import { APP_LOADED } from '../constants/action-types';
import './App.css';
import Grid from './grid/grid.js'
import Header from './header/header.js'

const mapStateToProps = state => {
  return {
    budget: state.budget,
    loan: state.loan
  }
}

// const mapDispatchToProps = dispatch => ({
//   onLoad: () =>
//     dispatch({ type: APP_LOADED})
// })

const App = () => {
//   useEffect( () => {
//     this.props.onLoad()
//  }, []);

  return (
  <div>
    <Header
    budget={this.props.budget}
    loan={this.props.loan}
     />
    <Grid />
  </div>
  )
}

export default connect(mapStateToProps)(App)
