import React, {useState} from "react";
const PRODUCTS = [
    {name: "Exquiste", description: "Big and fancy",Location: "Lagos", amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/80/f0/68/80f068c590b75c511c3c6494fa7b7a3f.jpg" },
    {name: "Drapery",  description: "comfy and open ",Location: "Abuja", amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/0d/31/30/0d3130e013ae4bf6cdc3b94d9ee3a6f7.jpg" },
    {name: "Garden canopy", description: "Garden",Location: "Kaduna", amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/e6/42/3f/e6423f4eb89aa4376dad5ef27ddf4168.jpg" },
    {name: "Lights", description: "picture worthy",Location: "portharcort", amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/35/80/2d/35802d404179a8d6a66c4d50137687ff.jpg"},
    {name: "Light strip", description: "Canopy by light",Location: "Ogun", amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/15/7a/2a/157a2a263aa0abcd67b5fb1701895b78.jpg" },
    {name: "Theatre",  description: "round seating with drape cannopy",Location: "Rivers", amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/ae/a2/a1/aea2a190468df288f4af957d3b804966.jpg" },
    {name: "Faux", description: "plant mande canopy",Location: "Lagos", amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/e5/04/6f/e5046f1889f32a34e93c30f8ee732ca0.jpg" },
]
function Canopies(){
   
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
            <strong>CANNOPIES</strong>
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
export default Canopies;