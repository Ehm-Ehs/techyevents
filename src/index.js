import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './App';
import Aboutus from'./createacct/createshop/dummy/header/headerpages/Aboutus';
import Signupclient from'./createacct/createshop/smart/Signupclient';
import Signupvendor from'./createacct/createshop/smart/Signupvendor';
import Loginclient from'./createacct/createshoping/smart/Loginclient';
import Loginvendor from'./createacct/createshop/smart/Signupvendor';
import Support from'./createacct/createshop/dummy/header/headerpages/Support';
import PlanmyEvent from'./createacct/createshop/dummy/header/headerpages/PlanmyEvent';
import Header from'./createacct/createshop/dummy/header/Header';
import Halls from './createacct/createshop/dummy/header/headerpages/headerservicespag/Halls';
import Decor from './createacct/createshop/dummy/header/headerpages/headerservicespag/Decor';
import Catering from './createacct/createshop/dummy/header/headerpages/headerservicespag/Catering';
import Makeup from './createacct/createshop/dummy/header/headerpages/headerservicespag/Makeup';
import Sounds from './createacct/createshop/dummy/header/headerpages/headerservicespag/Sounds';
import Anchor from './createacct/createshop/dummy/header/headerpages/headerservicespag/Anchor';
import Apparel from './createacct/createshop/dummy/header/headerpages/headerservicespag/Apparel';
import Birthday from './createacct/createshop/dummy/header/headerpages/headerpackages/Birthday';
import Wedding from './createacct/createshop/dummy/header/headerpages/headerpackages/Wedding';
import GetTogether from './createacct/createshop/dummy/header/headerpages/headerpackages/Gettogether';
import Hangout from './createacct/createshop/dummy/header/headerpages/headerpackages/Hangout';
import CorporateEvents from './createacct/createshop/dummy/header/headerpages/headerpackages/Corporateevents';
import Burial from './createacct/createshop/dummy/header/headerpages/headerpackages/Burial';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="Aboutus" element={<Aboutus/>} />
        <Route path="Signupclient" element={<Signupclient/>} />
        <Route path="Signupvendor" element={<Signupvendor/>} />
        <Route path="Loginclient" element={<Loginclient/>} />
        <Route path="Loginvendor" element={<Loginvendor/>} />
        <Route path="Support" element={<Support/>} />
        <Route path="PlanmyEvent" element={<PlanmyEvent/>} />
{/*------------ services page ------------------------------------*/}
       
        <Route path="Apparel" element={<Apparel/>} />
        <Route path="Halls" element={<Halls/>} />
        <Route path="Decor" element={<Decor/>} />
        <Route path="Catering" element={<Catering/>} />
        <Route path="Makeup" element={<Makeup/>} />
        <Route path="Sounds" element={<Sounds/>} />
        <Route path="Anchor" element={<Anchor/>} />
        

{/*------------ packages page ------------------------------------*/}

<Route path="Birthday" element={<Birthday/>} />
<Route path="Wedding" element={<Wedding/>} />
<Route path="GetTogether" element={<GetTogether/>} />
<Route path="Hangout" element={<Hangout/>} />
<Route path="CorporateEvents" element={<CorporateEvents/>} />
<Route path="Burial" element={<Burial/>} />






        {/* <Route path="Login" element={<Login/>} />
        <Route path="Cart" element={<Cart/>} /> */}
      </Routes >
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
