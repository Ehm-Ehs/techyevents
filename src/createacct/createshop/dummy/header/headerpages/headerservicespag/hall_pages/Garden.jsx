import React, {useState} from "react";
const PRODUCTS = [
    {name: "Open Fame", description: "biggest size",Location: "Lagos", amount: 28.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor6.png?itok=igXMvpRm" },
    {name: "Posh Vibes",  description: "comfy and open ",Location: "Abuja", amount: 42.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor4.png?itok=lg2XBWBc" },
    {name: "Garden of Love", description: "Garden",Location: "Kaduna", amount: 15.99, currency: "Euro", currencySymbol: "€", img:"https://blog.sugar.ng/files/styles/width-640/public/decor3.png?itok=mRCt8N34" },
    {name: "Evergreen", description: "picture worthy",Location: "portharcort", amount: 35.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/c7/81/d4/c781d4fce75584a4c996554ba8f2ceb7.jpg"},
    {name: "Garden fairy", description: "Fairy tale vibes",Location: "Ilorin", amount: 20.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/a0/f7/20/a0f720758f8a43db526c4eabc020cb99.jpg" },
    {name: "Nature",  description: "Garden + water",Location: "Lagos", amount: 33.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/80/ec/b5/80ecb58942365d93e86bb1a321b6c34f.jpg" },
    {name: "Flowers bloom", description: "flowery scene",Location: "Jos", amount: 25.99, currency: "Euro", currencySymbol: "€", img:"https://i.pinimg.com/564x/a6/02/12/a60212823b713f68ee39dc22182483f2.jpg" },
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
            <strong>GARDEN </strong>
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
export default Garden;