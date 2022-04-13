import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Signupclient() {
  const [fullName, setFullName] = useState("null")
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
      <div className="signup" id="signup-boxclient">
        <div className="left">
          <div className="title" >
            <h1 >Have an account with us to keep tabs</h1>
          </div>
          <div className="form-signup" onSubmit={ handleSubmitEvent}>
            <input onChange={(e)=>handleFullName(e.target.value)} type="text" placeholder="Full Name" className="Fullname" required/>
              
            <input onChange={(e)=>handleEmailAddress(e.target.value)} type="text" placeholder="Enter Email" className="Email Address" required/>
              
            <input onChange={(e)=>handlePassWord(e.target.value)} type="password" placeholder="Enter Password" className="Password" required/>
              
            <input onChange={(e)=>handleConfirmPassWord(e.target.value)} type="password" placeholder="Confirm Password" className="Confirm Password" required/>

            <div class="field_radio">
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
            </div>
              <div className="pagesubmit">
                <input type="submit" class="submitbtn" value="Create an Account"/>
                
              </div>
              <div>
                <table>
                  <tr>
                    <td><p>Already a Member ?</p></td>
                    <td><Link className="logLinks"to="/Loginclient">Log In</Link></td>
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

export default Signupclient; 