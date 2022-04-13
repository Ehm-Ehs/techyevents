import { FaUser } from "react-icons/fa"; 
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
function Asvendor(){
    return(
        <IconContext.Provider value={{ className: "icons" }}>
        <>
            <div className="acct">
                <div className="subacct">
                    <FaUser/>
                    <Link className="Link" id="accttext" to="/Signupvendor" > Signup</Link>
                </div>
                <div className="subacct">
                    <FaUser/>
                    <Link className="Link" id="accttext" to="/Loginvendor">Login</Link>
                </div>
            </div>
        </>
        </IconContext.Provider>
         

    );
}
export default Asvendor;