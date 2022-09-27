import { useState } from 'react';

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCard = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  return { state, addToCard };
};