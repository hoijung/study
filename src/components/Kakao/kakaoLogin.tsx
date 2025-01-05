import axios from "axios";

const clientId = process.env.REACT_APP_Kakao_Client_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;

console.log()
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`;