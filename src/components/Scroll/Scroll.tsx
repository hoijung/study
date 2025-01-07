import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Scroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        alert('안녕');
      }
    }, { threshold: 0.01 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
	<div>
		<div style={{ height: "100vh" }}>위는 빈 화면입니다.</div>
 		<div ref={ref} style={{ height: "100vh" }}>
   			 여기에 스크롤을 내리면 "안녕"이라는 알림이 뜹니다.
        </div>
  </div>
  );
}

export default Scroll;