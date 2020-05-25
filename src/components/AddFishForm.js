import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  idRef = React.createRef();
  customer_nameRef = React.createRef();
  customer_emailRef = React.createRef();
  productRef = React.createRef();
  quantityRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = (event) => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const fish = {
      id: this.idRef.current.value,
      customer_name: this.customer_nameRef.current.value,
      customer_email: this.customer_emailRef.current.value,
      product: this.productRef.current.value,
      quantity: parseFloat(this.quantityRef.current.value),
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="customer_name"
          ref={this.customer_nameRef}
          type="text"
          placeholder="Name"
        />
        <input
          name="quantity"
          ref={this.quantityRef}
          type="text"
          placeholder="Quantity"
        />
        <select name="product" ref={this.productRef}>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <input
          type="email"
          name="customer_email"
          style={{ width: "100%" }}
          placeholder="Email"
          ref={this.customer_emailRef}
        />
        <input name="id" ref={this.idRef} type="text" placeholder="Order ID" />
        <button type="submit">+ Add Data</button>
      </form>
    );
  }
}

export default AddFishForm;
