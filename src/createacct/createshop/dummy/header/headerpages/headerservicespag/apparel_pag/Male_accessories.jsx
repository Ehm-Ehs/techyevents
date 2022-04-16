import React, {useState} from "react";
const PRODUCTS = [
    {name: "Shoe and tie", description: "accessories",amount: 1500, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Ijeoma-Kachi-Wedding-BellaNaija-Weddings-134-1536x1025.jpg" },
    {name: "All out",  description: "Shoes perf and others ", amount: 42000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Nonye-Ayo-Wedding-BellaNaija-Weddings-300-1536x1024.jpg" },
    {name: "Flashy", description: "Aall bling", amount: 150000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/03/Sanmi-Tobi-Trad-Wedding-BellaNaija-Weddings-14-1536x1024.jpg" },
    {name: "Perf", description: "Brandst", amount: 300000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Bami-Bryant-Wedding-BellaNaija-Weddings-7-1656x2048.jpg"},
    {name: "accesories", description:"Gold", amount: 20099, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/02/Sophia-David-Trad-BellaNaija-Weddings-69-1639x2048.jpg" },
    {name: "black",  description: "blcks", amount: 330000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/01/Muinat-Bolaji-Trad-BellaNaija-Weddings-6-1536x1024.jpg" },
    {name: "red bottoms", description: "Nice blue design", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2022/01/Oseri-Oba-Wedding-BellaNaija-Weddings-90-1536x1024.jpg" },
    {name: "Mix All", description: "perf and accesories", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2021/12/Mabel-Chukwudi-BellaNaija-Weddings-4-1536x1024.jpg" },
    {name: "alll in one", description: "Different Kinds Combined Together", amount: 25000, currency: "Euro", currencySymbol: "€", img:"https://www.bellanaijaweddings.com/wp-content/uploads/2021/12/Yewande-Ibukun-Wedding-BellaNaija-Weddings.054.jpg" }
]
function Male(){
   
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
            <strong>Male</strong>
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
export default Male;