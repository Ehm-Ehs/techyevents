import { FaUser } from "react-icons/fa"; 
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
function Haveaccount(){
    return(
        <IconContext.Provider value={{ className: "icons" }}>
        <>
            <div className="acct">
                <div className="subacct">
                    <FaUser/>
                    <h1><Link className="Links" id="accttext" to="/Asclient" >Client</Link></h1>
                </div>
                <div className="subacct">
                    <FaUser/>
                    <Link className="Links" id="accttext" to="/Asvendor">Vendor</Link>
                </div>
            </div>
        </>
        </IconContext.Provider>
         

    );
}
export default Haveaccount;