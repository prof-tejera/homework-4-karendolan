import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  // Special case when make the number a decimal
  handleDotClick = (dot) => {
    if (!this.state.operator) {
      console.log(this.state.first);
      if (this.state.first && this.state.first % 1 !== 0) return;
      this.setState({ first: `${this.state.first || ""}${dot}` });
    } else {
      console.log(this.state.second);
      if (this.state.second && this.state.second % 1 !== 0) return;
      this.setState({ second: `${this.state.second || ""}${dot}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseFloat(this.state.first);
      const second = parseFloat(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "clear") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <>
        <Screen value={this.getScreenValue()} />
        <Operator value="clear" onClick={this.handleOperatorClick} />
        <div style={{
          display: "flex",
          flexWrap: "wrap-reverse",
         }}>
         <div style={{
           display: "flex",
           flexWrap: "wrap-reverse",
           alignContent: "flex-end",
           width: "250px",
          }}>
            <Number value={0} onClick={this.handleNumberClick} />
            <Operator value="." onClick={this.handleDotClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "flex",
            width: "50px",
           }}>
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="+" onClick={this.handleOperatorClick} />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;