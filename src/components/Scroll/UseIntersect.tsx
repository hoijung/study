'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';

/**
 *  @description IntersectionObserver Target 이벤트를 실행하는 함수
 *  @param {RefObject} target - IntersectionObserver Target을 전달하는 RefObject
 *  @param {() => void} onIntersect - Target이 ViewPort에 보일 경우 실행 할 함수
 *  @param {number} threshold - IntersectionObserver 인식 시점을 전달하는 값
 *  @param {boolean} enabled - IntersectionObserver 사용 여부
 *  @returns None
 *  @example useIntersectionObserver({ target: myRef, onIntersect: () => { alert('Intersect'); }, enabled: isLoading? false : true });
 */

interface UseIntersectionObserverProps {
  root?: null | unknown;
  target: RefObject<HTMLDivElement>;
  onIntersect: () => void;
  threshold?: number;
  enabled?: boolean;
}

export const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.5,
  enabled = true,
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    // IntersectionObserver 사용 여부 체킹
    if (!enabled) {
      return;
    }

    // IntersectionObserver 생성
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      // 인식 시점에 지정한 event handler 적용
      // entry 의 속성인 isIntersecting 를 이용해 조건을 검사하고, 콜백함수 를 실행
      {
        threshold,
      },
    );
    const element = target && target.current; // IntersectionObserver Target 정의
    if (!element) {
      // IntersectionObserver Target이 없을 경우, 종료
      return;
    }
    observer.observe(element); // IntersectionObserver 실행
    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(element);
    };
  }, [enabled, threshold, target, onIntersect]); // IntersectionObserver Target 업데이트
};