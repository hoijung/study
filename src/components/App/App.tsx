
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Recruiter from 'components/Recruiter';
import Main from 'components/Main';
import DataGridDemo from 'components/Board/Board';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/board" element={<DataGridDemo />} />
      <Route path="/reqruiter" element={<Recruiter />} />
    </Routes>
  );
}



export default App;
