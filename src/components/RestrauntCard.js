const RestrauntCard = (props) => {
    const {resData} = props
    return (
         <div className="res-card" style = {{backgroundColor: "gray"}}>
            
                <img className="food-img" src= {resData.image}></img>
                <h2>{resData.name}</h2>
                <h4>{resData.cuisine}</h4>
                <h4>⭐️{resData.rating}</h4>
                <h4>{resData.deliveryTime}</h4>
                <h4>{resData.priceForTwo}</h4>
           
         </div>
    )
}
export default RestrauntCard;