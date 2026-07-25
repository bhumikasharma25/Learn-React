import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
const Body = () => {
   return (<div className="body">
        <div className="filter">
           <button className="filter-btn" onClick={() => {
            console.log("Button CLicked")
            resList.filter(cards => {cards.rating > 4.6})
           }}>Top Rated Restraunts</button>
        </div>
        <div className="restro-container">
            
            
            {resList.map((card) => 
                (
                <RestrauntCard key = {card.id} resData = {card}/>
                ))}
           
            
          
        </div>
    </div>
   )
}


export default Body;