
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Recruiter from 'components/Recruiter';
import Main from 'components/Main';
import DataGridDemo from 'components/Board/Board';
import RealGrid from 'components/RealGrid';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/board" element={<DataGridDemo />} />
      <Route path="/reqruiter" element={<Recruiter />} />
      <Route path="/realgrid" element={<RealGrid />} />
    </Routes>
  );
}



export default App;
