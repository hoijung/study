import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { json } from 'stream/consumers';
import getSeverIp from 'utils/getSeverIp';

// 게시글 관련 Query들을 usePostQuery에서 관리
export default function usePostQuery(keyword = '') {
     // const serverIp = process.env.REACT_APP_Server_IP;
  const serverIp = getSeverIp();

      interface SearchPostInfo {
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

    // 데이터 조회 함수
    async function getSearchPosts(pageParam: any) {
      console.log("pageParam=>" + JSON.stringify(pageParam))
      const response = await fetch(`${serverIp}/projectAll?keyword=${keyword}&page=${pageParam}`);
      // const response = await fetch(serverIp + '/projectAll'+?keyword=${keyword}&page=${pageParam});
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    }

  // React Suspense를 사용하기 위해 useSuspenseInfiniteQuery를 사용
  const getSearchPostsQuery = useSuspenseInfiniteQuery<SearchPostInfo>({
    queryKey: ['searchPost', keyword],
    queryFn: ({ pageParam }) => getSearchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      // 현재 페이지가 마지막 페이지일 경우 undefined
      lastPage.curPage === lastPage.totalPage ? undefined : lastPage.curPage + 1,
  });

  return { getSearchPostsQuery };
}