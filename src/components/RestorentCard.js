import { CDN_URL } from "../utils/constants";

const RestorentCard = (props) => {
  console.log(props);
  const { data } = props;
  const { name, cusine, rating, time } = data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + data.coudinaryId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cusine}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default RestorentCard;
