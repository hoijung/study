import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

interface HeaderProps {
  nickname: string | null; // 부모로부터 전달받은 nickname
}

const  KakaoInfo: React.FC<HeaderProps> = ({nickname}) => {
  // const KakaoInfo: React.FC<HeaderProps> = ({ nickname }) => {

  return (
    <div>
      <p>Your nickname is: {nickname}</p>  {/* nickname을 화면에 표시 */}
    </div>
  );
}

export default KakaoInfo;