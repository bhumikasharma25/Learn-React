import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoFsAFa91KNiN2hTitFR100JGgh4X5jFT_m6UjVKHDw&s=10"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestrauntCard = (props) => {
    return (
         <div className="res-card">
            
                <img className="food-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmRKRa7Eey9rLl2krJNJ24LVPrDV1RepV2LSM2PrAnJk34Rd6uvrqaKbp&s=10"></img>
                <h2>{props.resName}</h2>
                <p>{props.cuisine}</p>
                <p>⭐️4.3</p>
                <h4>38 minutes</h4>
           
         </div>
    )
}

const Body = () => {
   return (<div className="body">
        <div className="search-bar">
            <input type="text" placeholder="Search Restraunt"></input>
        </div>
        <div className="restro-container"> 
            <RestrauntCard resName="Meghna Foods" cuisine = "Biryani,North Indian,Asian" />
            <RestrauntCard resName = "KFC" cuisine = "Burger,Fast Food" />
          
        </div>
    </div>
   )
}
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>;
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);