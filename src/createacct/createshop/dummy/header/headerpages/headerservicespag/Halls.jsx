import Canopies from "./hall_pages/Canopyhall";
import Garden from "./hall_pages/Garden";
import Hallbysize from "./hall_pages/Hallbylocation";
function Hall(){
   
   return(
        <>
       <Hallbysize/>
       <Garden/>
       <Canopies/>
       
        </>
    )
}
export default Hall;