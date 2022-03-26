import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Loginvendor() {

  const [emailAddress, setEmailAddress] = useState("null")
  const [passWord, setPassWord] = useState("null")
  useEffect(()=> {
    console.log("component just mounted") 
   }, []);


const handleEmailAddress = (emailAddress) =>{
  console.log("emailAddress: ",emailAddress)
  setEmailAddress(emailAddress)
}

const handlePassWord = (passWord) =>{
    console.log("passWord: ",passWord)
    setPassWord(passWord)
  }

const handleSubmitEvent = (e) =>{
    e.preventDefault();
  const stateObject = Object.assign({},  {emailAddress,passWord,})
  console.log(stateObject)
}


    return (
        <>
       
            <div className="signup" id="login-box">
                <div className="left">
                    <div className="title" >
                
                        <h1>Access your business</h1>
                        
                        <p>Fill in your details to gain access to your account</p>
                    
                    </div>
                    <div  className="form-signup" onSubmit={ handleSubmitEvent}>
                        <input onChange={(e)=>handleEmailAddress(e.target.value)} type="text" placeholder="Enter Email" className="Email Address" required/>
                
                        <input onChange={(e)=>handlePassWord(e.target.value)} type="password" placeholder="Enter Password" className="Password" required/>
                        <div className="pagesubmit">
                            <input type="submit" class="submitbtn" value="Log in"/>
                                
                        </div>
                    
                        <div>
                            <table>
                                <tr>
                                    <td><p>New Member</p></td>
                                    <td><Link className="logLinks"to="/Signupvendort">Sign up</Link></td>
                                </tr>
                            </table>
                       
                        </div>
                     </div>
                    
                </div>
                <div className="right">
                    <span class="loginwith">Sign in with<br />social network</span>
                            
                    <button class="social-signin facebook"><a href="https://www.facebook.com/login" target="_blank" rel="noreferrer">Log in with Facebook</a></button>
                    <button class="social-signin twitter"><a href="https://www.twitter.com/login" target="_blank" rel="noreferrer">Log in with Twitter</a></button>
                    <button class="social-signin google"><a href="https://www.gmail.com/login" target="_blank" rel="noreferrer">Log in with Google+</a></button>
                   
                    
                    <div class="orlogin">OR</div> 
                </div>
                        
            </div>
   
        </>
    )
}       
   export default Loginvendor;
