import React from 'react';
import { Routes, Route, BrowserRouter,Switch } from 'react-router-dom';
import Bidding from './views/bidding/index.jsx';
import Trainning from './views/trainning/index.jsx';
import DashboardUI from './views/dashboard/index.jsx';
import Sharing from './views/sharing/index.jsx';
import './assets/css/page/App.css';
import KPI from './views/Other Kpi/index.jsx';
import Register from './views/register/Register.jsx';
import Login from './views/login/Login.jsx';
import Project from './views/projectsp/Index.jsx';
import Interview from './views/interview/index.jsx';
import Cert from './views/certificate/index.jsx';
import Employees from './views/employee/index.jsx';
import Kper from './views/kper/index.jsx';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
   <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<DashboardUI/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Trainning" element={<Trainning/>}/>
            <Route path="/Sharing" element={<Sharing/>}/>
            <Route path="/Bidding" element={<Bidding/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Interview" element={<Interview/>}/>
            <Route path="/Cert" element={<Cert/>}/>
            <Route path="/Employees" element={<Employees/>}/>
            <Route path="/Kpers" element={<Kper/>}/>
            <Route path='/KPI' element={<KPI/>}/>
         </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
