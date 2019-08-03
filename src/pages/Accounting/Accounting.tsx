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
      total
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
          onChange={this.handleChange}
          value={this.state.numbers}
          style={{fontSize: 42}}
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
        <h3>Nic's super cool calculator</h3>
        <p>
         <Calculator />
        </p>
        
      </header>
    </div>
  );
}

export default App;
