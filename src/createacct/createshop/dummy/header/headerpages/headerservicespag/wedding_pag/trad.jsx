import React, {useState} from "react";
const PRODUCTS = [
    {name: "mixed", description: "two tribes as one",amount: 1500, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-171-scaled.jpg" },
    {name: "Yoruba trad",  description: "tribe trad ", amount: 42000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Sanmi-Tobi-Trad-Wedding-BellaNaija-Weddings-291-scaled.jpg" },
    {name: "Igbo trad", description: "Drop down chandalier lights", amount: 300000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Kelechi-Martins-Trad-BellaNaija-Weddings-14-scaled.jpg"},
    {name: "Kamu", description:"Hausa trad", amount: 20099, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2021/12/Safinat-Ben-Kamu-BellaNaija-Weddings.032.jpg" },
  ]
function Trad(){
   
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
            <strong>Trad</strong>
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
export default Trad;