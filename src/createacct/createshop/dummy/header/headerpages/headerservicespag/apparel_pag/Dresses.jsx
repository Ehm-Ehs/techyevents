import React, {useState} from "react";
const PRODUCTS = [
    {name: "Igbo trad", description: "red shiny",amount: 1500, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Oteniara-Igbo-Beauty-Look-BellaNaija-Weddings-5-1374x2048.jpg" },
    {name: "reception",  description: "dress by Sugarcane ", amount: 42000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2021/09/SugarbyKane-Reception-Dresses-BellaNaija-Weddings.11.jpg" },
    {name: "white wedding", description: "Dress by Truflair ", amount: 150000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2021/06/TruFlair-Bridal-Collection-BellaNaija-Weddings5-1639x2048.jpg" },
    {name: "Elegance", description: "Dress by Truflair", amount: 300000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2021/06/TruFlair-Bridal-Collection-BellaNaija-Weddings14-1638x2048.jpg"},
    {name: "minimal", description:"by Knanfe", amount: 20099, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2020/08/Knanfe-Bridal-BellaNaija-Weddings.4.jpg" },
    {name: "BlackGold",  description: "By Ruvero", amount: 330000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2020/08/Ruvero-Styled-Shoot-BellaNaija-Weddings.05.jpg" },
    {name: "conservative", description: "by Ruvero", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2020/08/Ruvero-Styled-Shoot-BellaNaija-Weddings.12.jpg" },
    {name: "Northern Stylish", description: "By Ruvero", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2020/08/Ruvero-Styled-Shoot-BellaNaija-Weddings.01.jpg" },
    {name: "Belle", description: "By Zuch", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2020/07/Zynell-Zuch-BridalCampaign-BellaNaija-Weddings.02.jpg" }
]
function Dresses(){
   
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
            <strong>Dresses</strong>
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
export default Dresses;