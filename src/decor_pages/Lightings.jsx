import React, {useState} from "react";
const PRODUCTS = [
    {name: "Hang Lights", description: "Multiple strings of mini bulds up the celling or drop downs of the hall",amount: 1500, currency: "Euro", currencySymbol: "€", img:"https://www.theknot.com/tk-media/images/f159ac8f-891d-4922-bee7-fba9c97bef64~rs_768.h" },
    {name: "Center Piece Lights",  description: "Center piece of the table are the lights ", amount: 42000, currency: "Euro", currencySymbol: "€", img:"https://www.theknot.com/tk-media/images/fae5dee5-c166-4513-ad05-73be669189db~rs_768.h" },
    {name: "Drape and Lights", description: "Combining Drapes and Lights", amount: 150000, currency: "Euro", currencySymbol: "€", img:"https://www.theknot.com/tk-media/images/a50df106-8240-4ac5-8b02-3cab17b2a048~rs_768.h" },
    {name: "Fairy Lights", description: "Drop down chandalier lights", amount: 300000, currency: "Euro", currencySymbol: "€", img:"https://www.weddingideasmag.com/wp-content/uploads/2020/08/jonathan-borba-B_R3rmJPeSE-unsplash-533x800.jpg"},
    {name: "Tree Lights", description:"Light up trees", amount: 20099, currency: "Euro", currencySymbol: "€", img:"https://www.weddingideasmag.com/wp-content/uploads/2017/09/wedding-decorations-blossom-tree.jpg" },
    {name: "Stylish Celling",  description: "Master piece cellings", amount: 330000, currency: "Euro", currencySymbol: "€", img:"https://www.weddingideasmag.com/wp-content/uploads/2017/09/wedding-decorations-drapes.jpg" },
    {name: "Flower Walls", description: "Nice Collection Flowers and Lights", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.weddingideasmag.com/wp-content/uploads/2017/09/wedding-decorations-flower-wall.jpg" },
    {name: "Mix All", description: "Different Kinds of LIght and holdings Combined Together", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-64-1536x1024.jpg" },
    {name: "Flowers and fall lights", description: "Different Kinds of LIght and holdings Combined Together", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Dami-Gbenga-GDvibes-Wedding-BellaNaija-Weddings.165.jpg" }
]
function Lightings(){
   
    const [cart, setCart] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);

    const handleCartItems = (item) => {
        console.log({item})
        cart.push(item);
        setCart(cart);
        const initVal =0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total+ item.amount, initVal);
        setcartTotal(pTotal)
       
    }

    
    return(
        <>
       
        <div className="headline">
            <h1>Welcome to our Shopping page/route</h1>
            <h2> You can now start adding items to your cart </h2>
        </div>
       
        <div>
            <div className="hey">
                {PRODUCTS && PRODUCTS.map((item, i) => {
                    return (
                        <div className="key" key={i} >
                            <h3> {item.name} </h3>
                            <p ><img src={item.img} alt=" " className="productpic" id="productpic"/></p>
                            <p className="item.description"> {item.description} </p>
                            {/* <span>{"Product quantity: "} {item.quantity} </span>  */}
                            <div className="item.amount">{"product price:"} {item.currencySymbol} {item.amount} </div>
                            <div className="Add to cart">
                                <button onClick={() => handleCartItems(item)} className="Add to cart"> Add to cart </button>
                                <span className="remove"><button onClick={() => handleCartItems(item)}> Remove </button></span>
                            </div>
                        </div>
                        
                    )
                })}
           </div>

            <div className="cart cart-section">
                <div>
                    {cart && cart.map((cartItem, i) => {
                        return (
                            <div key={i}>
                                <span> {cartItem.name} </span> | {" "}
                                <span> {cartItem.amount} </span>
                            </div>

                        )
                    })}
                </div>
                <span className="cartTotal"> {"€"} {cartTotal} </span>
            </div>
        </div>
        </>
    )
}
export default Lightings;