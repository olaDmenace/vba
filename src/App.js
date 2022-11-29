// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boiler from "./components/membership/dashboard/Boiler";
import Dashboard from "./components/membership/dashboard/Dashboard";
import TradeManager from "./components/membership/tradeManagers/TradeManagers";
import SignIn from "./components/membership/SignIn";
import SignUp from "./components/membership/SignUp";
import Bots from "./components/membership/Bots/Bots";


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
          <Route path='/dashboard' element={<Boiler />}>
            <Route path='' element={<Dashboard />} />
            <Route path='TradeManagers' element={<TradeManager />} />
            <Route path='Bots' element={<Bots />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
