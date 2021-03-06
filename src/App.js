import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return(
    <>
        
        <div className="general">
            <div className="first">
                <div className="subfirst">
                    <p> Bringing your dream event to life without you stressing is our job</p>
                    <p>Our experts are the best at your finger tip</p>
                </div>
            </div>
                <div className="second">
                    <strong>Get your special day, events and meetings planned with just a <Link className="logLinks1"to="/PlanmyEvent">click</Link> </strong>
                    <p>You give the instructions of your plan we bring it to reality </p>
                </div>
                <div className="third">
                    <div className= "subthird">
                        <img src="https://www.bellanaijaweddings.com/wp-content/uploads/2019/02/Tracy-John-White-BellaNaija-Weddings-39.jpg" alt="weddings"/>
                        <div className="thirdtext">
                            <p><strong>Wedding</strong></p>
                            <p>We plan bespoke weddings, our execution is top notch. we bring your dream wedding to reality</p>
                        </div>
                    </div>
                    <div className= "subthird">
                     <img src="https://www.bellanaijaweddings.com/wp-content/uploads/2022/04/Halima-Olaitan-Wedding-BellaNaija-Weddings-104-1536x1024.jpg" alt="decorations"/>
                      <div className="thirdtext"> 
                        <p><strong>Decorations</strong></p>
                        <p>We provide decor with glamour to your event.The “wow”factor is guaranteed</p>
                      </div>
                    </div>
                    <div className= "subthird">
                     <img src="https://onstagesystems.com/wp-content/uploads/bb-plugin/cache/corporate-event-production-1-landscape.jpg" alt="cor events"/>
                        <div className="thirdtext">
                            <p><strong>Corporate Event</strong></p>
                            <p> We create proffessional settings with nice an cool ambiance </p>
                        </div>
                    </div>
                </div>
                <div className="forth">
                    <img src="https://i.pinimg.com/564x/72/2a/ef/722aef3a4d9aac133545c485429a4b34.jpg" alt="about us"/>
                    <div className="subforth">    
                        <p><strong>About Us</strong></p>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore odit reprehenderit culpa quisquam. Doloribus qui suscipit repellat molestiae distinctio iusto atque temporibus expedita et! Magnam laborum et cupiditate dolore harum</p>
                        <button><Link className="Link"to="/Aboutus">Read More</Link></button> 
                    </div>
                </div>
                <div className="fifth">
                    <p><strong>Gallery</strong></p>
                    <div>
                        <img src="https://surpriseworld.ng/wp-content/uploads/2021/06/IMG_0210.jpg" alt="birthday"/>
                        <img src="https://i.pinimg.com/564x/d4/fb/ea/d4fbea754318611f8190403f68433e31.jpg" alt="hangout"/>
                        <img src="https://i.pinimg.com/564x/99/01/34/990134d297291d240cfd74d5043fbbe5.jpg" alt="hangout"/>
                    
                    </div>
                </div>
                <div className="sixth">
                    <p><strong>Client Reviews</strong></p>
                    <div> 
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <p>Dolore odit reprehenderit culpa quisquam. Doloribus qui suscipit repellat </p>
                        <p>molestiae distinctio iusto atque temporibus expedita et! Magnam laborum et cupiditate dolore harum</p>
                    </div>
                </div>
            </div>
    </>
  );
}

export default App;
