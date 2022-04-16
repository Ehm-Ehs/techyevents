import Dresses from "../headerservicespag/apparel_pag/Dresses";
import Female from "../headerservicespag/apparel_pag/Female_accesories";
import Male from "./../headerservicespag/apparel_pag/Male_accessories";
import Ring from "./../headerservicespag/apparel_pag/Ring";

function Apparel(){
    return(
        <>
        <h1>Apparels</h1>
        <Dresses/>
        <Female/>
        <Male/>
        <Ring/>

        </>
    );
}
export default Apparel;