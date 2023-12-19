import './App.css';
import Loginpage from './Components/Loginpage';
import Profilepage from './Components/Profilepage';
import { Route,Routes } from 'react-router-dom';
import TableData from './Components/Table';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route path="/profile" element={<Profilepage />} />
       </Routes>
       {/* <TableData/> */}
    
    </div>
  );
}

export default App;
