import React, {useState} from "react";
const PRODUCTS = [
    {name: "Small size", description: "100 people hall",Location: "Lagos", amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/ef/62/aa/ef62aa5d48fa70da4a28427b549b4040.jpg" },
    {name: "Big size",  description: "accomodate a 1000 and more people",Location: "Abuja", amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/ca/41/28/ca41283c6f62664509062b1aeeaabd4e.jpg" },
    {name: "Confrence Hall", description: "comfort for 50 people",Location: "Kaduna", amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/ec/d3/b2/ecd3b2cd1cc706ebf3c78cb9d43abb1b.jpg" },
    {name: "Banquet Hall", description: "500 people space",Location: "portharcort", amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/82/9a/78/829a78b979c34f0880dec1b75f9dc35e.jpg"},
    {name: "Corporate", description: "20 man seats",Location: " Imo stat", amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/a8/8c/c2/a88cc23e896d5a5e53119205aaf005fa.jpg" },
    {name: "Medium",  description: "for 400 people",Location: "Ilorin", amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/7c/5f/66/7c5f66b9c94eee8bfba935164d483905.jpg" },
    {name: "Biggest size", description: "3500 people",Location: "Lagos", amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/08/e9/c2/08e9c2c1cd2887eb29cb12b1aee66142.jpg" },
]
function Hallbysize(){
   
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
            <strong>HALLS BY SIZE</strong>
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
                                <span><button className="remove" onClick={() => handleCartItems(item)}> Remove </button></span>
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
export default Hallbysize;