import React, { useReducer } from 'react';
import CartContext from './Cart-context';

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
  }
  return dafaultCartState;
};

const dafaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    dafaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
