import { FaUser } from "react-icons/fa"; 
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
function Asclient(){
    return(
        <IconContext.Provider value={{ className: "icons" }}>
        <>
            <div className="acct">
                <div className="subacct">
                    <FaUser/>
                    <Link className="Link" id="accttext" to="/Signupclient" > Create account </Link>
                </div>
                <div className="subacct">
                    <FaUser/>
                    <Link className="Link" id="accttext" to="/Loginclient">Login </Link>
                </div>
            </div>
        </>
        </IconContext.Provider>
         

    );
}
export default Asclient;