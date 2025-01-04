import { useEffect } from 'react';

import Loader from 'components/Loader';
import { GithubCorner, GithubStarButton } from 'components/Github';
import Recruiter from 'components/Recruiter';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Cart from 'components/Cart';
import { BrowserRouter } from "react-router-dom";
import { useProducts } from 'contexts/products-context';
import Board from "components/Board"


import * as S from './style';

function Main() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); 

  return (
    <div>
      {isFetching && <Loader />}
      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
          <GithubStarButton />
        </S.Side>
        <S.Main>
          <S.MainHeader>
            <p>{products?.length} Product(s) found</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
    </div>
  );
}

export default Main;
