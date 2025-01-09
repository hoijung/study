
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Recruiter from 'components/Recruiter';
import Main from 'components/Main';
import DataGridDemo from 'components/Board/Board';
import RealGrid from 'components/RealGrid';
import LoginRedirectHandler from 'components/Kakao/LoginRedirectHandler';
import Projects from 'components/Projects/Projects';
import Scroll from 'components/Scroll/Scroll';
import Lists from 'components/Scroll/Lists';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/board" element={<DataGridDemo />} />
      <Route path="/reqruiter" element={<Recruiter />} />
      <Route path="/realgrid" element={<RealGrid />} />
      <Route path="/kakao-login" element={<LoginRedirectHandler />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/scroll" element={<Scroll />} />
      <Route path="/lists" element={<Lists />} />
    </Routes>
  );
}



export default App;
