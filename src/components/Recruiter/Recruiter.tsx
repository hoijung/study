import netherlandsRecruiter from './jeremy-akeze-doghouse-it-recruitment.jpg';
import * as S from './style';
import { KAKAO_AUTH_URL } from 'components/Kakao/kakaoLogin';
import Button from '@mui/material/Button';

function Recruiter () {
  console.log(KAKAO_AUTH_URL);
  return (     
    <>
        <a href={KAKAO_AUTH_URL}>
          <Button>카카오로 로그인/회원가입</Button>
        </a>
    </>
  )
}

export default Recruiter;
