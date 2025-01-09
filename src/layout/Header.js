import React from 'react';

const name = localStorage.getItem("accessToken");

const Header = () => {
  return (
    <header>
      <a href="/">홈</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/board">게시판</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/reqruiter">구인</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/realgrid">리얼그리드</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/projects">React Query</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/scroll">Scroll</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/lists">Lists</a>
      &nbsp;&nbsp;
      {name} 님 안녕하세요
      <hr />
    </header>
  );
};

export default Header;
