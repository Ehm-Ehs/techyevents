import React, {useState} from "react";
const PRODUCTS = [
    {name: "Ladies heels", description: "heels with studs",amount: 1500, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Ijeoma-Kachi-Wedding-BellaNaija-Weddings-2-1463x2048.jpg" },
    {name: "shoes perf and clutch",  description: "accesories", amount: 42000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-286-1536x1024.jpg" },
    {name: "Simple heel", description: "Simple with studs", amount: 150000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Loretta-Gbolahan-Wedding-BellaNaija-Weddings-2-scaled.jpg" },
    {name: "Fairy Shoes", description: "feather like design", amount: 300000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Dami-Gbenga-GDvibes-Wedding-BellaNaija-Weddings.034.jpg"},
    {name: "Blue", description:"Heels and acessories", amount: 20099, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/01/Kemi-Chibuzor-Wedding-BellaNaija-Weddings-2.jpg" },
    {name: "Gold",  description: "Heels and accesories", amount: 330000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/01/Kemi-Chibuzor-Wedding-BellaNaija-Weddings-5.jpg" },
    {name: "Gold bling", description: "Heeelsand accesories", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/01/Nenye-Obi-Trad-BellaNaija-Weddings-22-1638x2048.jpg" },
    {name: "trad set", description: "Beads as accessories", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Sophia-David-Trad-BellaNaija-Weddings-1-1638x2048.jpg" },
    {name: "Jewlery set", description: "Bling", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Sophia-David-Trad-BellaNaija-Weddings-22-1536x2048.jpg" }
]
function Female(){
   
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
            <strong>Female</strong>
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
export default Female;