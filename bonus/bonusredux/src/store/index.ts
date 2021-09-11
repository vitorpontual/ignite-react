import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import cart from './modules/cart/reducer';

import rootReducer from './modules/rootReducer';

import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer, composeWithDevTools()); // valor inicial

export default store;