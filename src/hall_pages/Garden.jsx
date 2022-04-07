import React, {useState} from "react";
const PRODUCTS = [
    {name: "Open Fame", description: "biggest size",Location: "Lagos", amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor6.png?itok=igXMvpRm" },
    {name: "Posh Vibes",  description: "comfy and open ",Location: "Abuja", amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor4.png?itok=lg2XBWBc" },
    {name: "Garden of Love", description: "Garden",Location: "Kaduna", amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor3.png?itok=mRCt8N34" },
    {name: "Destination Vibes", description: "picture worthy",Location: "portharcort", amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor5.png?itok=0orxxOkQ"},
    {name: "Reuseable bamboo towels", description: "All-purpose Washable Kitchen Roll",Location: "white", amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://m.media-amazon.com/images/I/71j0vTEWnGL._AC_SL1500_.jpg" },
    {name: "Prestige eco stirfry wok",  description: "100% Plant based & palm-oil free nonstick pan",Location: "green", amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://m.media-amazon.com/images/I/71j0vTEWnGL._AC_SL1500_.jpg" },
    {name: "compostable sponges", description: "100% Plant based Sponge made from cellulose",Location: "ginger brown", amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://m.media-amazon.com/images/I/71j0vTEWnGL._AC_SL1500_.jpg" },
]
function Garden(){
   
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
export default Garden;