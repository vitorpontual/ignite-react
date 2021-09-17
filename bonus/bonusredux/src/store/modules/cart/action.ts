import { ActoinTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActoinTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActoinTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActoinTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}