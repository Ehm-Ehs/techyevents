import { FaUser } from "react-icons/fa"; 
import { IconContext } from "react-icons";
function Haveaccount(){
    return(
        <IconContext.Provider value={{ className: "icons" }}>
        <>
            <div>
                <h1><FaUser/> Loging as a Client</h1>
            </div>
            <div>
                <h1><FaUser/> Loging as a Vendor</h1>
            </div>
        </>
        </IconContext.Provider>

    );
}
export default Haveaccount;