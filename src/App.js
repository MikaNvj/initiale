import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Pages from './Pages/page';
import Layout from './Pages/Layout/Layout';
import Nav from './Pages/nav/nav';
import Tb from './Pages/Page/TB/tb';
import Pointage from './Pages/Page/POINTAGE/pointage';
import Emp from './Pages/Page/Employees/employees';
import Stat from './Pages/Page/Statistique/statistique';
import Imp from './Pages/Page/impression/impression';
function App() {
  return (
    <>
    <Pages/>
    <Routes>
      <Route path="/" element={<Tb/>}/>
      <Route path="pointage" element={<Pointage/>}/>
      <Route path="employees" element={<Emp/>}/>
      <Route path="statistique" element={<Stat/>}/>
      <Route path="impression" element={<Imp/>}/>
    {/* <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} /> */}
    </Routes>
    </>
  );
}

export default App;
