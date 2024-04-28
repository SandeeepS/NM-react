import { useState } from "react";
import RestorentCard from "./RestorentCard";
import resList from "../utils/mockData";

const Body = () => {
  const [resList2,setList] = useState(resList);

  return (
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
