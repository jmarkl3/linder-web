import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.js"
import PrivacyPolicyLinder from "./Pages/PrivacyPolicyLinder.js"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          {/* http://localhost:3000/#/Linder-Privacy-Policy */}
          <Route path="/Linder-Privacy-Policy" element={<PrivacyPolicyLinder/>}/>
            
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
