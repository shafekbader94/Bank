import React, { Component } from "react";
import Transaction from "./Transaction";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Categories extends Component {
  theCategory = () => {
    const categories = {};
    for (let transaction of this.props.transactions) {
      let category = transaction.category.toLowerCase();
      if (categories[category]) {
        categories[category].sum =
          categories[category].sum + transaction.amount;
      } else {
        categories[category] = { sum: transaction.amount };
      }
    }

    return categories;
  };

  render() {
    const categories = this.theCategory();
    const categoriesEntries = Object.entries(categories);
    return (
      <div>
        <br></br>
        <Row className="mx-0 tableClass">
          <Col as={Col}>#</Col>
          <Col as={Col}>Category Name</Col>
          <Col as={Col}>Sum</Col>
        </Row>

        {categoriesEntries.map((u, i) => {
          return (
            <div key={i}>
              <Row className="category">
                <Col as={Col}>{i}</Col>
                <Col as={Col}>{u[0]}</Col>
                <Col as={Col}>{u[1].sum}</Col>
              </Row>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
