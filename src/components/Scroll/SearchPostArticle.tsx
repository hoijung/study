'use client';

// export const dynamic = 'force-dynamic';

import React, { useRef } from 'react';
import usePostQuery from './usePostQuery';
import { useIntersectionObserver } from './UseIntersect';
// import { BeatLoader } from 'react-spinners';
import PostListCard from './PostListCard';

type Props = {
  searchWord: string;
};

export default function SearchPostArticle({ searchWord }: Props) {
  // target ref obj
  const observeBox = useRef<HTMLDivElement>(null);
  
  // useInfiniteQuery 사용
  const { getSearchPostsQuery } = usePostQuery(searchWord);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = getSearchPostsQuery;

  // Intersection Observer 커스텀 훅 사용
  useIntersectionObserver({
    // 관찰 대상
    target: observeBox,
    // 관찰 대상이 뷰포트에 들어왓을 때 실행시킬 함수(다음페이지 데이터 get)
    onIntersect: fetchNextPage,
    // 다음페이지에 가져올 데이터가 있고 데이터 패칭중이 아니라면 IntersectionObserver 사용
    enabled: hasNextPage && !isFetchingNextPage,
  });

  return (
    <article>
      {"hasNextPage=> " + hasNextPage}<br/>
      {"isFetchingNextPage=> " + isFetchingNextPage}
      {"fetchNextPage=> " + fetchNextPage}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      {data && (
        <ul>
          {data.pages.map(({ posts }) =>
            posts.map((post:any) => (
              <li key={post.id}>
                <PostListCard post={post} />
              </li>
            )),
          )}
        </ul>
      )}
      {!isLoading && hasNextPage && (
        <div className="flex justify-center">
        </div>
      )}
      {/* 여기 div가 관찰 대상 */}
      <div ref={observeBox} />
    </article>
  );
}