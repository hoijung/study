import { IProduct } from 'models';
import { useRef } from 'react';
import Product from './Product';
import { useIntersectionObserver } from 'components/Scroll/UseIntersect';
import { QueryClientProvider, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import getSeverIp from 'utils/getSeverIp';
import {QueryClient,
} from '@tanstack/react-query'
import SearchProducts from './SearchProducts';

import * as S from './style';

interface IProps {
  products: IProduct[];
}

// Create a client
const queryClient = new QueryClient()

const Products = () => {

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos/>
    </QueryClientProvider>
  );
};


const Todos = () => {
  return (
    <div>
      <SearchProducts />     
    </div>
  )
}


export default Products;
