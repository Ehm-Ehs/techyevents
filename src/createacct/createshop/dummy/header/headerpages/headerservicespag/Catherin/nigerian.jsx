import React, {useState} from "react";
const PRODUCTS = [
    {name: "jollof rice", description: " Nigerian jollof",amount: 1500, currency: "Naira", currencySymbol: "#", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVdSs5qNfzhqVw3xy-9d0QfP0xOybm1VX3w&usqp=CAU" },
    {name: "Fried rice",  description: "Nigerian fried rice with sausage", amount: 2000, currency: "Naira", currencySymbol: "#", img:"https://sisijemimah.com/wp-content/uploads/2015/07/IMG_0011_20200824075644597-scaled.jpg" },
    {name: "swallow and soup", description: "semovita and egusi", amount: 2000, currency: "Nigeria", currencySymbol: "#", img:"https://sisijemimah.com/wp-content/uploads/2015/07/IMG_0011_20200824075644597-scaled.jpg" },
    {name: "moimoi", description: "Beans cake", amount: 500, currency: "Nigeria", currencySymbol: "#", img:"https://pulses.org/images/com_yoorecipe/422/cropped-moi-moi-rollup.jpg"},
    {name: "yam porridge", description:"yam porridge and fish", amount: 1200, currency: "Naira", currencySymbol: "#", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3Ki9ioHIPBnS9joHUdCzF3zf8CaJXPBAkg&usqp=CAU" },
]
function Nigerian(){
   
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
            <strong>Nigerian</strong>
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
                                <span ><button className="remove" onClick={() => handleCartItems(item)}> Remove </button></span>
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
export default Nigerian;