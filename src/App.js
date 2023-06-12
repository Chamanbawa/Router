import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import "./style/index.css";
import Header from "./components/Header";
import Documentation from "./pages/Documentation";
import Tutorials from "./pages/Tutorial";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <>
      <Header title="React" />
      <main>
        
        <Routes>
          <Route exact  path ="/home" element={<Home/>}/>
          <Route exact  path ="/documentation" element={<Documentation/>}/>
          <Route exact  path ="/tutorials" element={<Tutorials/>}/>
          <Route exact  path ="/about-us" element={<AboutUs/>}/>
        </Routes>
      
      </main>
    </>
  );
}

export default App;
