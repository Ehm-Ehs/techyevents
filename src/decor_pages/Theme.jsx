import React, {useState} from "react";
const PRODUCTS = [
    {name: "initimate", description: "private with just family and friends",amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Bukola-Doyin-Wedding-BellaNaija-Weddings-177-1536x1024.jpg" },
    {name: "Forest Theme",  description: "Nature feel ", amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Dara-TY-Wedding-BellaNaija-Weddings-54-1536x1026.jpg" },
    {name: "Fairy tale", description: "showers of fairy",amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/21/ae/f2/21aef2d06608361beeb3d04279725e09.jpg" },
    {name: "Beach not on Beach", description: "Beach vibes",amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Melody-Egie-Trad-BellaNaija-Weddings-187-1536x1024.jpg"},
    {name: "Outdoor ", description: " out in the open",amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-31-1536x1024.jpg" },
    {name: "Garden Theme",  description: "garden vibe",amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Louisa-Okechukwu-Weddings-BellaNaija-Weddings-231-1536x1017.jpg" },
    {name: "Dark ", description: "dark with fall of light",amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Dami-Gbenga-GDvibes-Wedding-BellaNaija-Weddings.169.jpg" },
    {name: "Simple ", description: "Simple but chic",amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Nicole-Ifeanyi-Wedding-BellaNaija-Weddings-332-1536x1024.jpg" },
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