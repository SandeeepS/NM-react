import RestorentCard from "./RestorentCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restorent) => (
          <RestorentCard key={restorent.id} data={restorent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
