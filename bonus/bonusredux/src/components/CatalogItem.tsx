import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAdddProductTocart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>{" "}

      <button type='button' onClick={handleAdddProductTocart}>Comprar</button>

      { hasFailedStockCheck && <span style={{ color: 'red'}}>Falta de estoque</span>}
    </article>

  )
}

export default CatalogItem