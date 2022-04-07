 import React, {useState } from "react";


const PRODUCTS =[
    {name:"Shoe", size:"36", description:"lorem", color:"pink", currency:"naira", currencySymbol:"#", amount:"3600", img:"https://i.pinimg.com/564x/f8/04/0b/f8040b80a4b21d2b423498bf4e3b04d5.jpg"},
    {name:"Skirt", size:"6", description:"lorem", color:"gold", currency:"naira", currencySymbol:"#", amount:"4500", img:"https://i.pinimg.com/564x/3d/30/6d/3d306d90324943e92399a64a7b500b50.jpg"},
    {name:"Shirt", size:"12", description:"lorem", color:"white", currency:"naira", currencySymbol:"#", amount:"3200", img:"https://i.pinimg.com/564x/b4/e4/29/b4e4294530ae5db435f82e5ca2319576.jpg"},
    {name:"HP", size:"corei3", description:"lorem", color:"grey", currency:"naira", currencySymbol:"#", amount:"1500", img:"https://i.pinimg.com/564x/62/1b/be/621bbe3e4131d20e3bbaeb7868578204.jpg"},
    {name:"Nokia 3310", size:"36", description:"lorem", color:"blue", currency:"naira", currencySymbol:"#", amount:"2000", img:"https://i.pinimg.com/564x/d7/d2/fc/d7d2fc93ce6cb249364555220ddcc8ff.jpg"},
]


function Cart(){

    const{cart, setCart} = useState([])
    const {cartTotal, setCartTotal} = useState(0)
    

    const handleCartItems = (item) => {
        console.log({item})
        cart.push(item);
        setCart(cart)
        const initVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, initVal);
        setCartTotal(pTotal);
        console.log(item);
    }
    // const removeCartItem = (item) => {
    //     console.log("Removing", item)
    //     cart.splice(item);
    //     setCart(cart);
    //     console.log(cart)
    //     const pTotal = altCart.reduce((total, item) => total + item.amount, initVal);
    //     setCartTotal(pTotal)
    // }

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
                            <span>{"Product quantity: "} {item.quantity} </span> 
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


export default Cart;