// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// function Planmyevent(){
//   const [fullName, setFullName] = useState("null")
//   const [emailAddress, setEmailAddress] = useState("null")
//   const [passWord, setPassWord] = useState("null")
//   const [confirmPassWord, setConfirmPassWord] = useState("null")
//   const [telephone, setTelephone] = useState("null")
//   // const [submit, setSubmit] = useState("null")
//   useEffect(()=> {
//     console.log("component just mounted") 
//    }, []);

//   const handleFullName = (fullName) =>{
//       console.log("fullName: ",fullName)
//       setFullName(fullName)
//   }

//   const handleEmailAddress = (emailAddress) =>{
//     console.log("emailAddress: ",emailAddress)
//     setEmailAddress(emailAddress)
//   }

//   const handlePassWord = (passWord) =>{
//     console.log("passWord: ",passWord)
//     setPassWord(passWord)
//   }

//   const handleConfirmPassWord = (confirmPassWord) =>{
//     console.log("confirmPassWord: ",confirmPassWord)
//     setConfirmPassWord(confirmPassWord)
//   }

//   const handleTelephone = (telephone) =>{
//     console.log("telephone: ",telephone)
//     setTelephone(telephone)
//   }

//   const handleSubmitEvent = (e) =>{
//       e.preventDefault();
//     const stateObject = Object.assign({},  {fullName,emailAddress,passWord,confirmPassWord})
//     console.log(stateObject)
//   }



//   return(
//     <> 
//       <div className="app-authform-signup" >
//         <div className="plan">
//           <div className="authform-title" >
//             <h1 >Plan my Event</h1>
//             <p>Let us plan that memorable event.</p>
//           </div>
//           <div className="authform-signup" onSubmit={ handleSubmitEvent}>
//             <input onChange={(e)=>handleFullName(e.target.value)} type="text" placeholder="Full Name" className="Fullname" required/>
    
//             <input onChange={(e)=>handleEmailAddress(e.target.value)} type="text" placeholder="Enter Email" className="Email Address" required/>
    
//             <input onChange={(e)=>handlePassWord(e.target.value)} type="password" placeholder="Enter Password" className="Password" required/>
    
//             <input onChange={(e)=>handleConfirmPassWord(e.target.value)} type="password" placeholder="Confirm Password" className="Confirm Password" required/>

//             <input type="text" className="app-login-input phone" name="Phone Number" placeholder="Phone Number"/>
         
//             <input type="text" className="app-login-input event" name="Event" placeholder="Event/Occasion"/>

//             <input type="text" className="app-login-input location" name="Location" placeholder="Event Location"/>

//             <input type="text" className="app-login-input date" name="Date" placeholder="Date of Event"/>

//             <input type="text" className="app-login-input venue" name="Venue" placeholder="Venue"/>

//             <input type="text" className="app-login-input location" name="Location" placeholder="Event Location"/>

//             <input type="text" className="app-login-input theme" name="Theme" placeholder="Theme of Decor(If Any)"/>

//             <input type="text" className="app-login-input number" name="Number" placeholder="Number of Expected Guests"/>

//             <input type="text" className="app-login-input budget" name="Budget" placeholder="Budget(If Any)"/>

//           </div>
//           <div>
//             <h1>List of Vendors/Services</h1>
//             <p>Please tick box/service you require</p>
//             <hr />
//           </div>
//           <div className="menu">
//               <h3>Food</h3>
//             <div className="list-food">
//               <input type="checkbox" id="food1" name="food1" value="Nigeria Dishes"  />

//                 <label for="food1">Nigeria Dishes</label> 

//               <input type="checkbox" id="food2" name="food2" value="Oriental Dishes"  />

//                 <label for="food2">Oreintal Dishes</label> 

//               <input type="checkbox" id="food3" name="food1" value="Continental Dishes"  />
                 
//                 <label for="food3">Continental Dishes</label>

//               <input type="checkbox" id="food4" name="food4" value="Desserts"  /> 

//                 <label for="food1">Desserts</label>  

//               <input type="checkbox" id="food5" name="food5" value="Foods"  /> 

//                 <label for="food5">Finger Foods</label> 

//               <input type="checkbox" id="food6" name="food6" value="Other Dishes"  /> 

//                 <label for="food6">Other Dishes</label> 

//             </div>
            
//               <h3>Drinks</h3>
//             <div className="list-drinks">

//               <input type="checkbox" id="drink1" name="drinks1" value="Alcoholic Cocktails"  /> 
                 
//                 <label for="drinks1">Alcoholic Cocktails</label> 
               
//               <input type="checkbox" id="drinks2" name="drinks2" value="Non-Alcoholic Cocktails"  /> 
                  
//                 <label for="drinks2">Non-Alcoholic Cocktails</label>
                
//               <input type="checkbox" id="drinks3" name="drinks3" value="Red Wine"  /> 
                  
//                 <label for="drinks3">Red Wine</label> 

//               <input type="checkbox" id="drinks4" name="drinks4" value="Champaign"  /> 
                  
//                 <label for="drinks4">Champaign</label> 

//               <input type="checkbox" id="drinks5" name="drinks5" value="Other Drinks"  /> 
                  
//                 <label for="drinks4">Other Drinks</label> 

//             </div>

//             <h3>Beverages</h3>
//             <div className="list-beverages">
//               <input type="checkbox" id="beverages1" name="beverages1" value="Tea" /> 
                
//                 <label for="beverages1">Tea</label> 

//               <input type="checkbox" id="beverages2" name="beverages2" value="Coffee" /> 
                  
//                   <label for="beverages2"> Coffee</label> 

//               <input type="checkbox" id="beverages3" name="beverages3" value="Cappuccino" /> 
                  
//                   <label for="beverages3"> Cappuccino</label> 

//               <input type="checkbox" id="beverages4" name="beverages4" value="Hot Chocolates Drinks" /> 
                  
//                   <label for="beverages4"> Hot Chocolates Drinks</label> 

//               <input type="checkbox" id="beverages5" name="beverages5" value="Other Drinks" /> 
                
//                 <label for="beverages5"> Other Drinks</label> 

//             </div>

//           </div>
//           <div className="Services">
    
//             <h3>Other Services</h3>

//             <div className="list-services">
//               <input type="checkbox" id="services1" name="services1" value="Events Coordination" /> 
              
//                 <label for="services1"> Events Coordination</label> 

//               <input type="checkbox" id="services2" name="services2" value="Marquee Rental/Hire" /> 
              
//                 <label for="services2"> Marquee Rental/Hire</label> 

//               <input type="checkbox" id="services3" name="services3" value="Photography" /> 
                
//                 <label for="services3"> Photography</label> 

//               <input type="checkbox" id="services4" name="services4" value="Videography" /> 
              
//                 <label for="services4"> Videography</label> 

//               <input type="checkbox" id="services5" name="services5" value="VLive Band" /> 
                
//                 <label for="services5"> Live Band</label> 
//             </div>
//           </div>
//           <div>
//             <input type="text"  className="message" name="Message(If Any)" placeholder="Message(If Any)" />
//             <button type="button" onclick="Submit">Submit</button>
//           </div>
//       </div> 
//     </>
//    )
// }

//   export default Planmyevent;