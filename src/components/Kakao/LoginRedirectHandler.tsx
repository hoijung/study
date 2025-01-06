import React, { useEffect, useState } from "react";
import axios from "axios";
import KakaoInfo from "./KakaoInfo";

const LoginRedirectHandler: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);  // 이미지를 저장할 상태
  const [nickname, setNickname] = useState<string | null>(null);  // 닉네임 상태

  // 사용자 정보 요청 함수
  const getUserInfo = async (accessToken: string) => {
    try {
      const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 발급받은 Access Token을 헤더에 넣어줍니다.
        },
      });

      console.log("User Info:", response.data);

      const profileImageUrl = response.data.properties.profile_image;
      const userNickname = response.data.properties.nickname;

      // 상태 업데이트
      setImage(profileImageUrl);
      setNickname(userNickname);

      return profileImageUrl;
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // 토큰을 요청하고 반환하는 함수
  const getToken = async (code: string) => {
    const REACT_APP_REST_API_KEY = "a02163b3c0fa117ce426f2e4a46b3804";
    try {
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          client_id: REACT_APP_REST_API_KEY, // REST API 키
          redirect_uri: "http://127.0.0.1:3000/kakao-login", // Redirect URI
          code: code, // Authorization Code
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Success Token =>", response.data.access_token);

      // 토큰을 받은 후 사용자 정보를 요청
      await getUserInfo(response.data.access_token);  // 비동기 함수로 호출

      return response.data.access_token;
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");

    if (code) {
      // 토큰을 받고, 그 후에 사용자 정보를 요청
      getToken(code);
    }

  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <>
      <div>로그인 처리 중</div>
      {image && <img src={image} alt="Profile" />} {/* 프로필 사진을 화면에 표시 */}
      {nickname && <div>{nickname}</div>} {/* 사용자 닉네임 표시 */}
      <KakaoInfo nickname={nickname} />
    </>
  );
};

export default LoginRedirectHandler;
