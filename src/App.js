// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boiler from "./components/membership/dashboard/Boiler";
import Dashboard from "./components/membership/dashboard/Dashboard";
import TradeManager from "./components/membership/tradeManagers/TradeManagers";
import SignIn from "./components/membership/SignIn";
import SignUp from "./components/membership/SignUp";
import Authentication from "./components/membership/Authentication";
import Bots from "./components/membership/Bots/Bots";
import EditBot from "./components/membership/Bots/EditBot";
import Analytics from "./components/membership/analytics/Analytics";
import Signal from "./components/membership/signalGroups/SignalGroup";
import SignalManagement from "./components/membership/signalGroups/SignalManagement";
import MyTrades from "./components/membership/myTrades/MyTrades";
import SignalPage from './components/membership/signalGroups/SignalGroupList'
import CreateSignal from "./components/membership/signalGroups/CreateSignal";


import ProtectedRoutes from "./components/ProtectedRoutes";



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
          <Route path="/Auth" element={<Authentication />} />
          <Route path='/dashboard' element={<ProtectedRoutes><Boiler /></ProtectedRoutes>}>
            <Route path='' element={<Dashboard />}>
              <Route path='' exact element={<Signal />} />
              <Route path='Bots' element={<Bots />} />
            </Route>
            <Route path='TradeManagers' element={<TradeManager />} />
            <Route path='Edit' element={<EditBot />} />
            <Route path='Analytics' element={<Analytics />} />
            <Route path='SignalPage' element={<SignalPage />} />
            <Route path="SignalManagement" element={<SignalManagement />} />
            <Route path='MyTrades' element={<MyTrades />} />
            <Route path='CreateSignal' element={<CreateSignal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
