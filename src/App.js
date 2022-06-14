import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Transactions from "./Components/Transactions";
import Operations from "./Components/Operations";
import Categories from "./Components/Categories";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
    };
  }

  componentDidMount = async () => {
    const transactions = await axios.get("http://localhost:4200/transactions");
    this.setState({ transactions: transactions.data });
  };

  pushTransaction = async (newTransaction) => {
    await axios.post("http://localhost:4200/transaction", newTransaction);
  };

  componentDidUpdate = async () => {
    const transactions = await axios.get("http://localhost:4200/transactions");
    this.setState({ transactions: transactions.data });
  };

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:4200/transaction/${id}`);
  };

  render() {
    let sum = 0;
    for (let i of this.state.transactions) {
      sum = sum + i.amount;
    }
    const color = sum > 500 ? "forestgreen" : "crimson";
    return (
      <Router>
        <div className="App">
          <div className="backgroundButtons">
            <div id="main-links">
              <Link to="/operations">Operations</Link>
              <Link to="/transactions">Transactions</Link>
              <Link to="/categories">Categories</Link>
            </div>
          </div>
          <h2 className={color} id="balance">
            Balance: {sum}$
          </h2>

          <Route
            exact
            path="/transactions"
            render={() => (
              <Transactions
                transactions={this.state.transactions}
                deleteTransaction={this.deleteTransaction}
              />
            )}
          />
          <Route
            exact
            path="/operations"
            render={() => <Operations pushTransaction={this.pushTransaction} />}
          />
          <Route
            exact
            path="/categories"
            render={() => <Categories transactions={this.state.transactions} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
