import { useEffect, useState } from "react";
import RestorentCard from "./RestorentCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [resList2,setList] = useState([]);

  // useEffect(()=> {
  //    fetchData();
  // },[])

  //fetching data using live api
  const fetchData = async ()=> {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
    );
    const json = await data.json();
    setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("setlist is :" + resList2)
  }


 

  return resList2.length === 0 ? <Shimmer/> : ( 
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            updatedResList = resList2.filter((list) => list.rating > 4);
            setList(updatedResList);
           }}
          className="filter-btn"
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
       
        {resList2.map((restorent) => (
          <RestorentCard key={restorent.id} data={restorent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
