import { CDN_URL } from "../utils/constants";

const RestorentCard = (props) => {
  console.log("restorent props ", props);
  const { data } = props;
  const { name, cloudinaryImageId, avgRating, time } = data.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default RestorentCard;
