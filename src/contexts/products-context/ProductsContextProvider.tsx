import { createContext, useContext, FC, useState, ReactNode } from 'react';

import { IProduct } from 'models'; 

export interface IProductsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  products: IProduct[];
  setProducts(products: IProduct[]): void;
  filters: string[];
  setFilters(filters: string[]): void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);
const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider'
    );
  }

  return context;
};

interface ProductsProviderProps {
  children: ReactNode;  // children의 타입을 명시적으로 설정
}

const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const ProductContextValue: IProductsContext = {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  };

  return <ProductsContext.Provider value={ProductContextValue} {...{ children }} />;
};

export { ProductsProvider, useProductsContext };
