import React, {useState} from "react";
const PRODUCTS = [
    {name: "Oval ring", description: "Multiple small diamonds",amount: 1500, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Ijeoma-Kachi-Wedding-BellaNaija-Weddings-3-1463x2048.jpg" },
    {name: "Gold band",  description: "simple but worthy ", amount: 42000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-207-1536x1024.jpg" },
    {name: "simple", description: "Simple oval", amount: 150000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Loretta-Gbolahan-Wedding-BellaNaija-Weddings-4-1536x1024.jpg" },
    {name: "Round cute", description: "Silver band and diamond top by Jean", amount: 300000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2019/09/Round-Brilliant-Jean-Pierre.jpg"},
    {name: "star inspo", description:"silver by Stella", amount: 20099, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2019/09/Round-Briliant-Ring-Designs-3.jpg" },
    {name: "Stylish simple",  description: "By Parade", amount: 330000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2019/09/Round-Brilliant-Parade-Jewellers.jpeg" },
    {name: "Mervis", description: "Nice Collection ", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2019/09/Round-Briliant-Ring-Designs-1.jpg" },
    {name: "Oval Bling", description: "Oval Cut Karat Gold", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Debrah-Segun-Wedding-BellaNaija-Weddings-101-scaled.jpeg" },
    {name: "Flowers and fall lights", description: "Different Kinds of LIght and holdings Combined Together", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Dami-Gbenga-GDvibes-Wedding-BellaNaija-Weddings.165.jpg" }
]
function Ring(){
   
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
            <strong>ring</strong>
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
export default Ring;