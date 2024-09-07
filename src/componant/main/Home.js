import React from "react";
import MyNavbar from "../Navbar/Navbar";
import Slider from "react-slick"; // Fix the import statement
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <MyNavbar />
      <div className="center-card">
        <Slider {...settings}>
          <div>
            <img
              src={require("../../assets/pg1.png")}
              style={{ width: "600px", height: "300px" }}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src={require("../../assets/pg2.png")}
              style={{ width: "600px", height: "300px" }}
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src={require("../../assets/pg3.png")}
              style={{ width: "600px", height: "300px" }}
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src={require("../../assets/pg4.png")}
              style={{ width: "600px", height: "300px" }}
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src={require("../../assets/pg5.png")}
              style={{ width: "600px", height: "300px" }}
              alt="Slide 5"
            />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
      <div style={{ textAlign: 'center' }}>
  <br></br><br></br><br></br><br></br>
  <h1>Examples of metal objects</h1>
</div>
    </div>
    
  );
};

export default Home;
