import { useState } from 'react';

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCard = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload) => {
    setState({ ...state, cart: state.cart.filter(({ id }) => id !== payload.id) });
  };

  return { state, addToCard, removeFromCart };
};
