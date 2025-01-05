import React, { useEffect, useState } from "react";
import axios from "axios";



const LoginRedirectHandler: React.FC = () => {
    const [image, setImage] = useState(null);


    const getUserInfo = async (accessToken:any) => {
        try {
          const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,  // 발급받은 Access Token을 헤더에 넣어줍니다.
            },
          });
      
          console.log('User Info:', response.data);

          const profileImageUrl = response.data.properties.profile_image;
          console.log('User Info:', profileImageUrl);

          // 프로필 사진을 화면에 표시하기
        const imageElement = document.createElement('img');
        imageElement.src = profileImageUrl;
        setImage(profileImageUrl);
        document.body.appendChild(imageElement); // 이미지 화면에 추가

          return profileImageUrl;
        } catch (error) {
          console.error('Error fetching user info:', error);
        }

    };

    const getToken = async (code:any) => {
        const REACT_APP_REST_API_KEY = "a02163b3c0fa117ce426f2e4a46b3804";
        // debugger
        try {
          const response = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            new URLSearchParams({
              grant_type: 'authorization_code',
              client_id: REACT_APP_REST_API_KEY, // REST API 키
              redirect_uri: "http://127.0.0.1:3000/kakao-login", // Redirect URI
              code: code, // Authorization Code
            }),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );
      
        //   console.log("Success Token=>" + JSON.stringify(response.data));

          console.log("Success Token=>" + (response.data.access_token));

          console.log("Image=>" + getUserInfo(response.data.access_token));

          return response.data.access_token;
        } catch (error) {
          console.error('Error fetching token:' + error);
        }
      };


  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");
// debugger
    const access_token =  getToken(code);

    console.log("image===>" +image)

    // console.log("kakaoToken=>" + JSON.stringify(access_token))

    console.log("code==>"+code)
    if (code) {
      axios
        .post(`http://127.0.0.1:8080/Authcate?code=${code}`)
        .then((response) => {
          console.log("accessToken: ", response.data);
          localStorage.setItem("accessToken", response.data.accessToken);
        //   window.location.href = "/";
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  }, []);

  return <div>로그인 처리 중</div>;
};

export default LoginRedirectHandler;