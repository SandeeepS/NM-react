import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    id:1,
    name: "Mekhana foods",
    cusine: "Biriyani , North Indian , Asian",
    rating: "4.4",
    time: "38 min",
    coudinaryId: "e0839ff574213e6f35b3899ebf1fc597",
  },
  {
    id:2,
    name: "Pizza Hut",
    cusine: "Pizzas Santi Nagar",
    rating: "4.1",
    time: "15 min",
    coudinaryId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  },
  {
    id:3,
    name: "Kannur Food Point",
    cusine: "Kerala , Chinease BTM",
    rating: "4.3",
    time: "20 min",
    coudinaryId: "bmwn4n4bn6n1tcpc8x2h",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={
            "https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png"
          }
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const RestorentCard = (props) => {
  console.log(props);
  const { data } = props;
  const { name, cusine, rating, time } = data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.coudinaryId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cusine}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

//component for body
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
const Applayout = () => {
  return ( 
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
