import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
//local state variable -->> super powerful variable

const [listOfRestraunts,setlistOfRestraunts] = useState(resList);




   return (<div className="body">
        <div className="filter">
           <button className="filter-btn" 
            onClick={() => {
            
            const filteredList = listOfRestraunts.filter((res) => res.rating > 4)
            setlistOfRestraunts(filteredList);
           }}>
            Top Rated Restraunts
            </button>
        </div>
        <div className="restro-container">
            
            
            {listOfRestraunts.map((card) => 
                (
                <RestrauntCard key = {card.id} resData = {card}/>
                ))}
           
            
          
        </div>
    </div>
   )
}


export default Body;