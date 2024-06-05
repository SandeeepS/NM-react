import { useEffect, useState } from "react";
import RestorentCard from "./RestorentCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [resList2, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurent,setFilteredRestaurent] = useState([]);

  
 //fetching the data
  useEffect(() => {
    fetchData();
  }, []);

  console.log("body rendered "); 


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("setlist is :" + resList2);
  };

  return resList2.length === 0 ? (
    <Shimmer />  
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter logic
              console.log("searched text is " , searchText);
              console.log("reslist",resList2);
              const filteredRest = resList2.filter(
                (item) => item.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurent (filteredRest);
            }}
          >
            Search
          </button>
        </div>

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
        {filteredRestaurent.map((restorent) => (
          <RestorentCard key={restorent.id} data={restorent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
