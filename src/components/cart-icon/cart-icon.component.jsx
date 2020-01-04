import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// This will cause performance issues since with redux, the state is
// always a new object and the reduce will calculate with the new state
// causing rerendering in React for any action to reducers.
// Instead, we memoize the old props

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   )
// });

// Memoized value of itemCount through Reselector
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
