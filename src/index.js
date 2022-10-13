import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./Nav";
// import UET from "./UET";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./Intro";
import Aboutme from "./Aboutme";
import Git from "./Git";
import Myskill from "./Myskill";
import Team from "./Team";
import Footer from "./Footer";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <Button/> */}
    <Nav/>
    {/* <UET/> */}
    <Intro />
    <Aboutme/>
    <Git />
    <Myskill />
    <Team/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
