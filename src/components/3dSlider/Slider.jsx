import React from "react";
import food_1 from "../../assets/food_1.jpg";
import food_2 from "../../assets/food_2.jpg";
import food_3 from "../../assets/food_3.jpg";
import food_4 from "../../assets/food_4.jpg";

import model from "../../assets/model.png";
import "./Slider.css";

const images = [
  food_1,
  food_2,
  food_3,
  food_4,
  food_1,
  food_2,
  food_3,
  food_4,
  food_1,
  food_2,
  food_3,
  food_4,
];

const Slider = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          {images.map((img, index) => (
            <div
              className="item"
              style={{ "--position": index + 1 }}
              key={index}
            >
              <img src={img} alt={`dragon ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="model">
          <img src={model} alt="" className="model-image" />
        </div>
      </div>
      <div className="text">
        <h1>3D Slider</h1>
        <p>
          This is a 3D slider component that showcases images in a 3D carousel
          effect. The images are displayed in a circular manner, creating a
          visually appealing slider.
        </p>
        <p>
          You can customize the number of images and their styles to fit your
          design needs.
        </p>
      </div>
      <div className="author">
        <p>
          Created by <b>weconetdata</b>
        </p>
        <a
          href="http://weconetdata.com"
          target="blank"
          rel="noopener noreferrer"
        >
          weconetdata.com
        </a>
      </div>
    </div>
  );
};

export default Slider;
