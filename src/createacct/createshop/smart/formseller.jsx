import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Form() {
  const [fullName, setFullName] = useState("null")
  const [emailAddress, setEmailAddress] = useState("null")
  const [passWord, setPassWord] = useState("null")
  const [confirmPassWord, setConfirmPassWord] = useState("null")
  const [telephone, setTelephone] = useState("null")
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

  const handleTelephone = (telephone) =>{
    console.log("telephone: ",telephone)
    setTelephone(telephone)
  }

  const handleSubmitEvent = (e) =>{
      e.preventDefault();
    const stateObject = Object.assign({},  {fullName,emailAddress,passWord,confirmPassWord})
    console.log(stateObject)
  }



  return(
    <>     
      <div className="app-authform-signup" id="login-box">
        <div className="left">
          <div className="authform-title" >
            <h1 >Create an Account</h1>
            <p>Fill in details to gain an account.</p>
          </div>
          <div className="authform-signup" onSubmit={ handleSubmitEvent}>
            <input onChange={(e)=>handleFullName(e.target.value)} type="text" placeholder="Full Name" className="Fullname" required/>
              
            <input onChange={(e)=>handleEmailAddress(e.target.value)} type="text" placeholder="Enter Email" className="Email Address" required/>
              
            <input onChange={(e)=>handlePassWord(e.target.value)} type="password" placeholder="Enter Password" className="Password" required/>
              
            <input onChange={(e)=>handleConfirmPassWord(e.target.value)} type="password" placeholder="Confirm Password" className="Confirm Password" required/>

            <div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
            </div>
              <input onChange={(e)=>handleTelephone(e.target.value)} type="tel" placeholder="telphone" className="telphone" required/>
              <div className="pagesubmit">
                <button type="submit" class="submitbtn">Create an Account</button>
              </div>
          </div>
        </div>
        <div className="right">
          <span class="loginwith">Sign in with<br />social network</span>
                
          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
        <div>
          <Link className="logLinks"to="/Login">Log In</Link>
        </div>
        <div className="app-auth-seperator">
          <p><strong>or</strong></p>
        </div> 
      </div>
    </>
  );
}

export default Form; 