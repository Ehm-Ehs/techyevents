import React, {useState} from "react";
const PRODUCTS = [
    {name: "Bridal makeup", description: "bridal makeup",amount: 30000, currency: "Naira", currencySymbol: "#", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkv3Zx-8W00Xihb-fKinU4MCCkoQy3YmqRQ&usqp=CAU" },
    {name: "Traditional makeup",  description: "Traditional makeup", amount: 20000, currency: "Naira", currencySymbol: "#", img:"https://i.ytimg.com/vi/j0YBz_S_AGQ/maxresdefault.jpg" },

]
function Makeup(){
   
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
            <strong>Chops</strong>
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
                <span className="cartTotal"> {"???"} {cartTotal} </span>
            </div>
        </div>
        </>
    )
}
export default Makeup;