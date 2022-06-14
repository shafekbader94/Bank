import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      vendor: "",
      category: "",
      redirect: false,
    };
  }
  pushTransactionData = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  pushTransaction = async (event) => {
    let name = event.target.name;

    let amount = this.state.amount * 1;
    let vendor = this.state.vendor;
    let category = this.state.category;
    let newTransaction;
    if (name === "Deposit") {
      newTransaction = { amount, vendor, category };
      await this.props.pushTransaction(newTransaction);
    } else if (name === "Withdraw") {
      amount = this.state.amount * -1;
      newTransaction = { amount, vendor, category };
      await this.props.pushTransaction(newTransaction);
    }
    this.setState({
      redirect: true,
    });
    console.log(newTransaction);
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="operation">
          <label>Amount </label>{" "}
          <input
            name="amount"
            value={this.state.amount}
            onChange={this.pushTransactionData}
          ></input>
        </div>
        <br></br>
        <div className="operation">
          <label>Vendor </label>{" "}
          <input
            name="vendor"
            value={this.state.vendor}
            onChange={this.pushTransactionData}
          ></input>
        </div>
        <br></br>
        <div className="operation">
          {" "}
          <label>Category </label>{" "}
          <input
            name="category"
            value={this.state.category}
            onChange={this.pushTransactionData}
          ></input>
        </div>
        <br></br>
        <button
          name="Deposit"
          className="forestgreen"
          onClick={this.pushTransaction}
        >
          Deposit
        </button>{" "}
        <button
          name="Withdraw"
          className="crimson"
          onClick={this.pushTransaction}
        >
          Withdraw
        </button>
        {this.state.redirect && <Redirect to="/transactions" />}
      </div>
    );
  }
}

export default Operations;
