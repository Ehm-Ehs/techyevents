import React, {useState} from "react";
const PRODUCTS = [
    {name: "Hausa vibes", description: "Infusing tradition", amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2019/03/Fatima-Shamsudeen-Kamu-BellaNaija-Weddings-26.jpg" },
    {name: "Long Table",  description: "Dinner table ", amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Melody-Egie-White-Wedding-BellaNaija-Weddings-167-1536x1024.jpg" },
    {name: "Round Table", description: "Sitting in Groups",amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Dara-TY-Wedding-BellaNaija-Weddings-89-1536x1024.jpg" },
    {name: "Squared", description: "sitting in groups",amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/c8/4c/15/c84c15601cdc734c7a6210d87d5b87e6.jpg"},
    {name: "round + squared", description: "round tables in the middle and squared on the sides", amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Sanmi-Tobi-Wedding-BellaNaija-Weddings-138-1536x1026.jpg" },
    {name: "Arc",  description: "Half circle sitings", amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Dami-Gbenga-GDvibes-Wedding-BellaNaija-Weddings.172.jpg" },
    {name: "High table", description: "special guest table", amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Nicole-Ifeanyi-Wedding-BellaNaija-Weddings-341-1536x1024.jpg" },
]
function Tablesettings(){
   
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
            <strong>TABLES </strong>
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
                            <div className="cart">
                                <button onClick={() => handleCartItems(item)} className="Add"> Add to cart </button>
                                <span><button  className="remove"onClick={() => handleCartItems(item)}> Remove </button></span>
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
export default Tablesettings;