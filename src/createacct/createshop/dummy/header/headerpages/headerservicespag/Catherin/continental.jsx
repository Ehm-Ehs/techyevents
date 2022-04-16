import React, {useState} from "react";
const PRODUCTS = [
    {name: "prawn pakoda", description: "prawn",amount: 3000, currency: "Naira", currencySymbol: "#", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlmBL-eJeW_VXhVmkwItRUDUhDOrT7ItAoQ&usqp=CAU" },
    {name: "lopster thermidor",  description: "lopster", amount: 3500, currency: "Naira", currencySymbol: "#", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzHNogEK1QAD9MpLZgoSS_mmzkyVuUk494Q&usqp=CAU" },
    {name: "panne", description: "panne", amount: 2500, currency: "Nigeria", currencySymbol: "#", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWe1JfqVOlTQGw6XBHHoDiE5_S6dgqYroYXA&usqp=CAU" },
    {name: "hashbrown", description: "hashbrown", amount: 2000, currency: "Nigeria", currencySymbol: "#", img:"https://static.toiimg.com/thumb/msid-84287895/84287895.jpg?width=500&resizemode=4"},
    {name: "chicken marsala", description:"chicken marsala", amount: 3500, currency: "Naira", currencySymbol: "#", img:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chicken-Continental-for-Four_exps43085_TH1789930B04_07_1bC_RMS.jpg" },
]
function Continental(){
   
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
            <strong>THEME</strong>
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
export default Continental;