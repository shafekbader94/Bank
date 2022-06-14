import React, { Component } from "react";
import Transaction from "./Transaction";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Transactions extends Component {
  render() {
    const data = this.props.transactions;
    return (
      <div>
        <br></br>
        <Row className="mx-0 tableClass">
          <Col as={Col}>#</Col>
          <Col as={Col}>Amount</Col>
          <Col as={Col}>Vendor</Col>
          <Col as={Col}>Category</Col>
          <Col as={Col}>Delete</Col>
        </Row>

        {data.map((u, i) => {
          return (
            <Transaction
              name="name"
              value={u.vendor}
              _id={u._id}
              key={i}
              num={i}
              amount={u.amount}
              vendor={u.vendor}
              category={u.category}
              deleteTransaction={this.props.deleteTransaction}
            />
          );
        })}
      </div>
    );
  }
}

export default Transactions;
