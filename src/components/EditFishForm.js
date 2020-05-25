import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      id: PropTypes.string,
      customer_name: PropTypes.string,
      customer_email: PropTypes.string,
      product: PropTypes.string,
      quantity: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  };
  handleChange = (event) => {
    // update that fish
    // 1. Take a copy of the curernt fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]:
        event.currentTarget.name === "price"
          ? parseFloat(event.currentTarget.value)
          : event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.customer_name}
        />
        <input
          type="number"
          name="quantity"
          onChange={this.handleChange}
          value={this.props.fish.quantity}
        />
        <select
          type="text"
          name="product"
          onChange={this.handleChange}
          value={this.props.fish.product}
        >
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <input
          type="email"
          name="customer_email"
          onChange={this.handleChange}
          style={{width: "100%"}}
          value={this.props.fish.customer_email}
        />
        <input
          type="text"
          name="id"
          onChange={this.handleChange}
          value={this.props.fish.id}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Data
        </button>
      </div>
    );
  }
}

export default EditFishForm;
