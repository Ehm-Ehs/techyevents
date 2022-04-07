import React, {useState} from "react";
const PRODUCTS = [
    {name: "Flowery", description: "biggest size", amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Dara-TY-Wedding-BellaNaija-Weddings-92-1536x900.jpg" },
    {name: "Exotic ", description: "Rich and Exotic",amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Kelechi-Martins-Trad-BellaNaija-Weddings-82-scaled.jpeg" },
    {name: "NameFlowers",  description: "Names plus Flower ",amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Aren-Raydon-Trad-BellaNaija-Weddings-141-1-1536x1024.jpg" },
    {name: "Flower Portal", description: "flowers in a big circlar arrangement",amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-29-1536x1024.jpg" },
    {name: "Light flowery window ", description: "picture worthy",amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-1-1536x1024.jpg"},
    {name: "Nature's", description: "depicting nature",amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-104-1536x1024.jpg" },
    {name: "Exquiste and letters",  description: "Lights, Flowers and Letters",amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Gbenga-Dami-GDvibes-Trad-BellaNaija-Weddings.102.jpg" },
    {name: "Flowers on bars",  description: "combination of flowers on bars",amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Dami-Gbenga-GDvibes-Wedding-BellaNaija-Weddings.171.jpg" },
    {name: "Flowers on bars",  description: "combination of flowers on bars",amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/2e/7e/da/2e7edae1d757dd4bd6d7255e8c18e952.jpg" },
    ]
function backdrop(){
   
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