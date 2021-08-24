import { memo } from "react"

type ProductItemProps = {
  product: {
    id: number,
    price: number,
    priceFormatted: string,
    title: string,
  }
  onAddToWishList: (id: number) => void
}

// shallow compare -> comparação rasa
// {} === {} // false
// igualdade referencial - ocupando o mesmo espaço na memória

 function ProductItemComponent({ product, onAddToWishList}: ProductItemProps) {
  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})
