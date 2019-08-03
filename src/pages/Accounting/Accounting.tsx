import React from 'react';
import logo from '../logo.svg';
import './Accounting.css';

const MULTIPLIER = 0.029;

class Calculator extends React.Component {
    state = {
    numbers: '',
    total: '',
    kicks: []
    };
  getWavePrice = (number: number) => (number - (number *  MULTIPLIER) - 0.3);

  calculateWave = (number: string) => 
    number.split(" ")
      .filter( x => x)
      .map(x => this.getWavePrice(parseFloat(x)))
      .reduce((x,y) => x + y)
  
  
  
  handleChange(event: {target: {value: string}}) {
    const total = event.target.value && this.calculateWave(event.target.value).toFixed(2)
    this.setState({
      numbers: event.target.value,
      kicks: event.target.value.split(" "),
      total: total === "NaN" ? "Please enter number" : total
    })
  }
  render() {
    return (
      <>
        {this.state.kicks && 
          this.state.kicks.map(x => <p>{x}</p>)
        }
        <h1>{this.state.total}</h1>
        
        <form>
          <input 
          type="text"
          onChange={event => this.handleChange(event)}
          value={this.state.numbers}
          style={inputStyle}
          ></input>
        </form>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Wave Apps Reconciliation Helper</h3>
        <p> Enter any numbers separated by spaces to get the total that should have been deposited in your bank. </p>
        <Calculator />        
      </header>
    </div>
  );
}

export default App;

const inputStyle = {
  background: "none",
  border: "none",
  borderBottom: "2px solid #fff",
  fontSize: 42,
  color: "#7ea9ff"
}
