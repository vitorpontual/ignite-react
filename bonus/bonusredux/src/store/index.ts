import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';



import rootReducer from './modules/rootReducer';
import cart from './modules/cart/reducer';
import rootSaga from './modules/rootSaga';

import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )); // valor inicial

  sagaMiddleware.run(rootSaga)

export default store;