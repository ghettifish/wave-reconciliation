import React, { CSSProperties } from 'react';
import './Accounting.css';
import styled from "styled-components";

const MULTIPLIER = 0.029;

interface WaveDetails {
  invoiceTotal: number;
  waveFee: string;
  amountDeposited: string;
}
interface IState {
  numbers: string;
  total: string;
  kicks: WaveDetails[];
}


class Calculator extends React.Component<{}, IState> {
  state = {
    numbers: '',
    total: '',
    kicks: []
  };
  
  getWaveFee = (invoiceTotal: number ) => ((invoiceTotal * MULTIPLIER) + .3);

  getAmountDeposited = (invoiceTotal: number) => (invoiceTotal - this.getWaveFee(invoiceTotal));

  calculateWave = (numbers: string) => 
    numbers.split(" ")
      .filter(invoiceTotal => invoiceTotal !== "")
      .map(invoiceTotal => {
        const invoiceTotalNum = parseFloat(invoiceTotal);

        return ({
          invoiceTotal: invoiceTotalNum,
          waveFee: this.getWaveFee(invoiceTotalNum).toFixed(2),
          amountDeposited: this.getAmountDeposited(invoiceTotalNum).toFixed(2)
        } as WaveDetails)

      }
      )


  calculateTotal = (kicks: WaveDetails[]) =>  
                      kicks.map(kick => kick.amountDeposited)
                            .reduce((acc, cv) => (parseFloat(acc) + parseFloat(cv)).toFixed(2))
  
  handleChange(event: {target: {value: string}}) {

    console.log(event.target.value.split(" "))
    event.target.value 
    ? this.setState({
        numbers: event.target.value,
        kicks: this.calculateWave(event.target.value),
        total: this.calculateTotal(this.calculateWave(event.target.value))
      })
    : this.setState({
      numbers: event.target.value,
      kicks: [],
      total: ""
    })

  }
  render() {
    return (
      <Wrapper>   
        <div className="col-1">

          <h3>Wave Apps Reconciliation Helper</h3>
          <p>Enter any numbers separated by spaces to get the total that should have been deposited in your bank. </p>

          <input 
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.numbers}
          ></input>
        </div>

        <table className="col-2">
          <thead>
            <tr>
              <th>Invoice Total</th>
              <th>Wave Fee</th>
              <th>Amount Deposited</th>
            </tr>
          </thead>
          <tbody>
            {this.state.kicks && 
              this.state.kicks.map((lineItem: WaveDetails) => (
              <tr>
                <td>{lineItem.invoiceTotal}</td>
                <td>{lineItem.waveFee}</td>
                <td>{lineItem.amountDeposited}</td>
              </tr>
              ))
            }     
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total: {this.state.total}</td>
            </tr>
          </tfoot>
        </table>
      </Wrapper>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />        
      </header>
    </div>
  );
}

export default App;


const Wrapper = styled.div`
  display: flex;
  max-width: 90vw;
  & .col-1 {
    flex: 1;
    align-items: flex-start;
    margin-right: 5vw;
    & p, h3{
      text-align: left;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    & h3 {
      margin-block-end: .5em;
    }
    & input {
      background: none;
      border: none;
      margin-top: 0.5em;
      border-bottom: 2px solid #fff;
      font-size: 36px;
      color: #fff;
      width: 100%;
    }
  }
  & .col-2 {
    flex: 1;
  }
  & thead {
    background: #2f3b56;
    padding: 25px;
  }
  & tbody {
    background: #303644;
    padding: 25px;
  }
  & tfoot {
    background: #2f384e;
    padding: 25px;
  }
 
  & th, td {
    text-align: left;
    padding: 15px;
  }



`