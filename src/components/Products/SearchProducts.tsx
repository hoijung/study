import { IProduct } from 'models';
import { useRef } from 'react';
import Product from './Product';
import { useIntersectionObserver } from 'components/Scroll/UseIntersect';
import { QueryClientProvider, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import getSeverIp from 'utils/getSeverIp';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from '@tanstack/react-query'

import * as S from './style';

interface IProps {
  products: IProduct[];
}

const serverIp = getSeverIp();
// 데이터 조회 함수
async function getSearchPosts(pageParam: any) {
  console.log("pageParam=>" + JSON.stringify(pageParam))
  const response = await fetch(`${serverIp}/projectAll?page=${pageParam}`);
  // const response = await fetch(serverIp + '/projectAll'+?keyword=${keyword}&page=${pageParam});
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

const SearchProducts = () => {

  const observeBox = useRef<HTMLDivElement>(null);

  interface SearchPrdInfo {
    curPage: number;
    totalPage: number;
    posts: post[]; // 실제 데이터 구조로 변경
  }

  interface post {
    id: number,
    title: any,
    curPage: number;
    totalPage: number;
  }

  // React Suspense를 사용하기 위해 useSuspenseInfiniteQuery를 사용
  const getSearchPostsQuery = useSuspenseInfiniteQuery<SearchPrdInfo>({
    queryKey: ['searchProduct'],
    queryFn: ({ pageParam }) => getSearchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      // 현재 페이지가 마지막 페이지일 경우 undefined
      lastPage.curPage === lastPage.totalPage ? undefined : lastPage.curPage + 1,
  });

  // useInfiniteQuery 사용
  // const { getSearchPostsQuery } = usePostQuery();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = getSearchPostsQuery;

  useIntersectionObserver({
    target: observeBox
    , onIntersect: fetchNextPage
    // 다음페이지에 가져올 데이터가 있고 데이터 패칭중이 아니라면 IntersectionObserver 사용
    , enabled: hasNextPage && !isFetchingNextPage,
  }
  )
  return (
  //   <S.Container>
  //   {products?.map((p) => (
  //     <Product product={p} key={p.sku} />
  //   ))}
  // </S.Container>

    <S.Container>
        {data.pages.map(({ posts }) =>
          posts.map((post: any) => (
              <Product product={post} key={post.id}/>
          )),
        )}
        {/* 여기 div가 관찰 대상 */}
        <div ref={observeBox}><br/></div> 
    </S.Container>
  )
};

export default SearchProducts;
