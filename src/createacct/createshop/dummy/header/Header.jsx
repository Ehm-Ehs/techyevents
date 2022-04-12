import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return(
    <>

      <div className="header-menu">
        <div>
          <img src="https://i.pinimg.com/564x/72/2a/ef/722aef3a4d9aac133545c485429a4b34.jpg" alt="logo"/>
        </div>
        <ul className="header-links">
          <li> 
            <Link className="Link"to="/"> Home </Link>
          </li>
          <li>
            <Link className="Link"to="/About">AboutUs</Link>
          </li> 
          <li>
            <div className="dropdowns">
              <button className="dropbtn"> Services</button>
              <div className="dropdowncontent">
                <Link className="dropdownlinks" to="/Halls">Hall</Link>
                <Link className="dropdownlinks" to="/Decor">Decor</Link>
                <Link className="dropdownlinks" to="/Sounds">Sounds</Link>
                <Link className="dropdownlinks" to="/Makeup">Makeup</Link>
                <Link className="dropdownlinks" to="/Catering">Catering</Link>
                <Link className="dropdownlinks" to="/Anchor">Anchor</Link>
                <Link className="dropdownlinks" to="/Apparel">Apparel</Link>
              </div>
            </div> 
          </li>
          <li>
            <div className="dropdowns">
              <button className="dropbtn"> Packages</button>
              <div className="dropdowncontent">
                <Link className="dropdownlinks" to="/Birthday">Birthday</Link>
                <Link className="dropdownlinks" to="/Wedding">Wedding</Link>
                <Link className="dropdownlinks" to="/GetTogether">Get Together</Link>
                <Link className="dropdownlinks" to="/Hangout">Makeup</Link>
                <Link className="dropdownlinks" to="/CoporateEvent">Corporate Events</Link>
                <Link className="dropdownlinks" to="/Burial">Burial</Link>
              </div>
            </div> 
          </li>
          <li>
            <Link className="Link"to="/PlanmyEvent">Plan my event</Link>
          </li>
          <li>
            <Link className="Link"to="/Support">Support</Link>
          </li>
          <li>
            <div className="dropdowns">
              <Link className="Link" to="/Haveaccount">Have an Account</Link>
              {/* <div className="dropdowncontent">
                <button>Sign Up</button>
                <div className="dropdowncontent">
                  <Link Link className="dropdownlinks" to="/Signupvendor"> Sign up as a Vendor</Link>
                  <Link Link className="dropdownlinks" to="/Signupclient"> Sign up as a Client</Link>
                </div>

                <button>Log In</button>
                <div className="dropdowncontent">
                  <Link Link className="dropdownlinks" to="/Loginvendor"> Login as a Vendor</Link>
                  <Link Link className="dropdownlinks" to="/Loginclient"> Login as a Client</Link>
                </div> */}

                
              </div>
            </div>
          </li>
          <li>
            <input className="search" type="text" placeholder="search"/>
           
          </li>
        </ul>
        <div className="contact">
        <a href="https://www.instagram.com/nigerianweddings" target="_blank" rel="noreferrer" className=" header-contact-link"><strong>Contact us</strong></a>
        </div>
      </div>

    </>
  
  );
}
  
  export default Header;