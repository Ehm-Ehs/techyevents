import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Signupvendor() {
  const [fullName, setFullName] = useState("null")
  const [businessName, setBusinessName] = useState("null")
  const [location, setLocation] = useState("null")
  const [emailAddress, setEmailAddress] = useState("null")
  const [passWord, setPassWord] = useState("null")
  const [confirmPassWord, setConfirmPassWord] = useState("null")
  // const [submit, setSubmit] = useState("null")
  useEffect(()=> {
    console.log("component just mounted") 
   }, []);

  const handleFullName = (fullName) =>{
      console.log("fullName: ",fullName)
      setFullName(fullName)
  }

  const handleBusinessName = (businessName) =>{
    console.log("businessName: ",businessName)
    setBusinessName(businessName)
}

const handleLocation = (location) =>{
    console.log("location: ",location)
    setLocation(location)
}

  const handleEmailAddress = (emailAddress) =>{
    console.log("emailAddress: ",emailAddress)
    setEmailAddress(emailAddress)
  }

  const handlePassWord = (passWord) =>{
    console.log("passWord: ",passWord)
    setPassWord(passWord)
  }

  const handleConfirmPassWord = (confirmPassWord) =>{
    console.log("confirmPassWord: ",confirmPassWord)
    setConfirmPassWord(confirmPassWord)
  }

  
  const handleSubmitEvent = (e) =>{
      e.preventDefault();
    const stateObject = Object.assign({},  {fullName,emailAddress,passWord,confirmPassWord})
    console.log(stateObject)
  }



  return(
    <>     
      <div className="app-authform-signup" id="signup-boxvendor">
        <div className="left">
          <div className="authform-title" >
            <h1 >Have an account with us to keep tabs</h1>
          </div>
          <div className="authform-signup" onSubmit={ handleSubmitEvent}>
            <input onChange={(e)=>handleFullName(e.target.value)} type="text" placeholder="Full Name" className="Fullname" required/>

            <input onChange={(e)=>handleBusinessName(e.target.value)} type="text" placeholder="Business name" className="Businessname" required/>
              
            <input onChange={(e)=>handleEmailAddress(e.target.value)} type="text" placeholder="Enter Email" className="Email Address" required/>

            <div class="field_radio">
                <p>Service Type</p>
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Food</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Drinks</label>
              <input type="radio" name="radiogroup1" id="rd3"/>
              <label for="rd3">Halls</label>
              <input type="radio" name="radiogroup1" id="rd4"/>
              <label for="rd4">Decor</label>
              <input type="radio" name="radiogroup1" id="rd5"/>
              <label for="rd5">Apparel/Accessories</label>
              <input type="radio" name="radiogroup1" id="rd6"/>
              <label for="rd6">Anchor</label>
              <input type="radio" name="radiogroup1" id="rd7"/>
              <label for="rd7">Makeup</label>
              <input type="radio" name="radiogroup1" id="rd8"/>
              <label for="rd8">Sounds</label>
            </div>
            <input onChange={(e)=>handleLocation(e.target.value)} type="text" placeholder="City,country" className="Location" required/>

            <input onChange={(e)=>handlePassWord(e.target.value)} type="password" placeholder="Enter Password" className="Password" required/>
              
            <input onChange={(e)=>handleConfirmPassWord(e.target.value)} type="password" placeholder="Confirm Password" className="Confirm Password" required/>

            
              <div className="pagesubmit">
              <input type="submit" class="submitbtn" value="Create an Account"/>
                
              </div>
                
              <div>
                <table>
                  <tr>
                    <td><p>Already a Member</p></td>
                    <td><Link className="logLinks"to="/Loginvendor">Log In</Link></td>
                  </tr>
                </table>
                </div>
          </div>
        </div>
        <div className="right">
          <span class="loginwith">Sign in with<br />social network</span>
                
          <button class="social-signin facebook"><a href="https://www.facebook.com/login" target="_blank" rel="noreferrer">Sign up with facebook</a></button>
          <button class="social-signin twitter"><a href="https://www.twitter.com/login" target="_blank" rel="noreferrer">Sign up with Twitter</a></button>
          <button class="social-signin google"><a href="https://www.gmail.com/login" target="_blank" rel="noreferrer">Sign up with Google+</a></button>
        </div>
        
        <div class="orsignup">OR</div> 
      </div>
    </>
  );
}

export default Signupvendor; 