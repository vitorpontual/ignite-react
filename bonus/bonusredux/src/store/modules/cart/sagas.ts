import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './action';
import { ActoinTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse { 
  id: number;
  quantity: number;
}

function* checkProductsStock({ payload}: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockReponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)

  if (availableStockReponse.data.quantity > currentQuantity) { 
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id))
  }



}

export default all([
  takeLatest(ActoinTypes.addProductToCartRequest, checkProductsStock)
])
