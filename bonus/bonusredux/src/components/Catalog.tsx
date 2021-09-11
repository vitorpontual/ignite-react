import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { addProductToCart } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, []);


  console.log(catalog)

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}

    </main>
  );
}

export default Catalog;