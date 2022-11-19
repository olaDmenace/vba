// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/membership/dashboard/Dashboard";
import SignIn from "./components/membership/SignIn";
import SignUp from "./components/membership/SignUp";


// import './App.css';



/*
  This is a project created with React App.
  Please, consult the tailwind.config.js file to confirm customisation

**/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
