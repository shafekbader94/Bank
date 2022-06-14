import React, { Component } from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Transaction extends Component {
  deleteTransaction = () => {
    this.props.deleteTransaction(this.props._id);
  };

  render() {
    const amount = this.props.amount;
    const vendor = this.props.vendor;
    const category = this.props.category;
    const num = this.props.num;
    const color = amount > 0 ? "forestgreen" : "crimson";
    return (
      <div>
        <Row className={color}>
          <Col as={Col}>{num}</Col>
          <Col as={Col}>{amount}</Col>
          <Col as={Col}>{vendor}</Col>
          <Col as={Col}>{category}</Col>
          <Col>
            <button onClick={this.deleteTransaction}>Delete</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transaction;
