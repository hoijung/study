import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="/">홈</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/board">게시판</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/reqruiter">구인</a>
      <hr />
    </header>
  );
};

export default Header;
