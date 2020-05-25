import React from "react";
import PropTypes from "prop-types";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      id: PropTypes.string,
      customer_name: PropTypes.string,
      customer_email: PropTypes.string,
      product: PropTypes.string,
      quantity: PropTypes.number,
    }),
    addToOrder: PropTypes.func,
    index: PropTypes.string,
  };
  render() {
    const { id, customer_name, customer_email, product, quantity } = this.props.details;
    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {customer_name}
          <span className="price">Quantity: {quantity}</span>
        </h3>
        <br />
        <h3 className="fish-name">
          <span className="price">E-Mail ID: {customer_email}</span>
          <span className="price">Order ID: {id}</span>
        </h3>
        <br />
        <p>Product: {product}</p>
      </li>
    );
  }
}

export default Fish;
