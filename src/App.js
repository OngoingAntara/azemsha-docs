import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

function App() {
  return (
    <Routes>
      <Route path="/depreciation" element={<Page1/>}></Route>
      <Route path="/rent" element={<Page2/>}></Route>
      <Route path="/percent" element={<Page3/>}></Route>
      <Route path="/nma" element={<Page4/>}></Route>
      <Route path="/finance" element={<Page5/>}></Route>
    </Routes>
  );
}

export default App;
