// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Planmyevent(){
  const [fullName, setFullName] = useState("null")
  const [emailAddress, setEmailAddress] = useState("null")
  const [occasion, setOccasion] = useState("null")
  const [venue, setVenue] = useState("null")
  const [location, setLocation] = useState("null")
  const [date, setDate] = useState("null")
  const [theme, setTheme] = useState("null")
  const [number, setNumber] = useState("null")
  const [budget, setBudget] = useState("null")
  const [telephone, setTelephone] = useState("null")
  // const [submit, setSubmit] = useState("null")
  useEffect(()=> {
    console.log("component just mounted") 
   }, []);

  const handleSubmitEvent = (e) =>{
      e.preventDefault();
    const stateObject = Object.assign({},  {fullName,emailAddress,telephone,venue,budget,occasion,theme,number,location,date})
    console.log(stateObject)
  }



  return(
    <> 
    	<div className="planform" >
            <div className="plan">
                <div className="authform-title" >
                    <h1 >Plan my Event</h1>
                    <p>Let us plan that memorable event.</p>
                </div>
            </div>
            <div className="planfield" onSubmit={ handleSubmitEvent}>
                <input onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Full Name" className="field" required/>
        
                <input onChange={(e)=>setEmailAddress(e.target.value)} type="text" placeholder="Enter Email" className="field" required/>
        
                <input type="text" onChange={(e)=>setTelephone(e.target.value)} className="field" placeholder="Phone Number"/>
            
                <input type="text" onChange={(e)=>setOccasion(e.target.value)} className="field" placeholder="Event/Occasion"/>

                <input type="text" onChange={(e)=>setLocation(e.target.value)} className="field" placeholder="Event Location"/>

                <input type="text" onChange={(e)=>setDate(e.target.value)} className="field" placeholder="Date of Event"/>

                <input type="text" onChange={(e)=>setVenue(e.target.value)} className="field" placeholder="Venue"/>

                <input type="text" onChange={(e)=>setTheme(e.target.value)} className="field" placeholder="Theme of Decor(If Any)"/>

                <input type="text" onChange={(e)=>setNumber(e.target.value)} className="field" placeholder="Number of Expected Guests"/>

                <input type="text" onChange={(e)=>setBudget(e.target.value)} className="field" placeholder="Budget(If Any)"/>

            </div>
            <div>
                <h1>List of Vendors/Services</h1>
                <p>Please tick box/service you require</p>
                <hr />
          </div>
          <div className="menu">
                <strong className="head">Food</strong>
                <div className="list-food">
                    <input type="checkbox" id="food1" name="food1" value="Nigeria Dishes" />

                        <label for="food1">Nigeria Dishes</label> 

                    <input type="checkbox" id="food2" name="food2" value="Oriental Dishes" />

                        <label for="food2">Oreintal Dishes</label> 

                    <input type="checkbox" id="food3" name="food1" value="Continental Dishes" />
                        
                        <label for="food3">Continental Dishes</label>

                    <input type="checkbox" id="food4" name="food4" value="Desserts" /> 

                        <label for="food1">Desserts</label>  

                    <input type="checkbox" id="food5" name="food5" value="Foods" /> 

                        <label for="food5">Finger Foods</label> 

                    <input type="checkbox" id="food6" name="food6" value="Other Dishes" /> 

                        <label for="food6">Other Dishes</label> 

                </div>
                
                <hr/>
                <strong className="head">Drinks</strong>
                <div className="list-drinks">

                    <input type="checkbox" id="drink1" name="drinks1" value="Alcoholic Cocktails"  /> 
                        
                        <label for="drinks1">Alcoholic Cocktails</label> 
                    
                    <input type="checkbox" id="drinks2" name="drinks2" value="Non-Alcoholic Cocktails"  /> 
                        
                        <label for="drinks2">Non-Alcoholic Cocktails</label>
                        
                    <input type="checkbox" id="drinks3" name="drinks3" value="Red Wine"  /> 
                        
                        <label for="drinks3">Red Wine</label> 

                    <input type="checkbox" id="drinks4" name="drinks4" value="Champaign"  /> 
                        
                        <label for="drinks4">Champaign</label> 

                    <input type="checkbox" id="drinks5" name="drinks5" value="Other Drinks"  /> 
                        
                        <label for="drinks4">Other Drinks</label> 

                </div>

                <hr/>

                <strong className="head">Beverages</strong>
                <div className="list-beverages">
                <input type="checkbox" id="beverages1" name="beverages1" value="Tea" /> 
                    
                    <label for="beverages1">Tea</label> 

                <input type="checkbox" id="beverages2" name="beverages2" value="Coffee" /> 
                    
                    <label for="beverages2"> Coffee</label> 

                <input type="checkbox" id="beverages3" name="beverages3" value="Cappuccino" /> 
                    
                    <label for="beverages3"> Cappuccino</label> 

                <input type="checkbox" id="beverages4" name="beverages4" value="Hot Chocolates Drinks" /> 
                    
                    <label for="beverages4"> Hot Chocolates Drinks</label> 

                <input type="checkbox" id="beverages5" name="beverages5" value="Other Drinks" /> 
                    
                    <label for="beverages5"> Other Drinks</label> 

                </div>
            </div>

                <hr/>

            <div className="Services">
        
                <strong className="head">Other Services</strong>

                <div className="list-services">
                    <input type="checkbox" id="services1" name="services1" value="Events Coordination" /> 
                        
                        <label for="services1"> Events Coordination</label> 

                    <input type="checkbox" id="services2" name="services2" value="Marquee Rental/Hire" /> 
                        
                        <label for="services2"> Marquee Rental/Hire</label> 

                    <input type="checkbox" id="services3" name="services3" value="Photography" /> 
                            
                        <label for="services3"> Photography</label> 

                    <input type="checkbox" id="services4" name="services4" value="Videography" /> 
                        
                        <label for="services4"> Videography</label> 

                    <input type="checkbox" id="services5" name="services5" value="VLive Band" /> 
                            
                        <label for="services5"> Live Band</label> 
                </div>
                <div>
                    <input type="text"  className="field" placeholder="Message(If Any)" />
                    <button type="button" onClick={(e)=>setBudget(e.target.value)}>Submit</button>
                </div>
            </div>
      </div>
    </>
   )
}

  export default Planmyevent;