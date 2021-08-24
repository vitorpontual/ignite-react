import { List, AutoSizer, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishList: (id: number) => void
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          onAddToWishList={onAddToWishList} product={results[index]}
        />
      </div>
    )
  }
  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={10}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

/*
  * 1. Criar uma nova versão do componente
  * 2. Comparar com a versão anterior
  * 3. Se houverem alteraçãos, vai atualizar o que alterou (Diff)
*/

/*
   1. Pure Fucntional Components
   2. Renders too often
   3. Re-renders to big size
   4. Medium to big size
*/

/*
   useMemo / useCallback

   1. Calculos pesados
   2. Igualdade referencial (quando a gente passa aquea informação a um componente filho)
   3.
*/
