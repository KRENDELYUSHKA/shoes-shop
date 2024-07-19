import React from "react";
import { Carousel } from "antd";
import { ReactComponent as SliderIcon1 } from "../../img/slider1.svg";
import { ReactComponent as SliderIcon2 } from "../../img/slider2.svg";

const contentStyle: React.CSSProperties = {
  width: "100%",
  height: "460px",
};

const Slider: React.FC = () => {
  return (
    <Carousel
      autoplay
      style={{margin: "10px" }}
    >
      <div>
      <SliderIcon1 style={contentStyle} />
      </div>
      <div>
        <SliderIcon2 style={contentStyle} />
      </div>
    </Carousel>
  );
};
export default Slider;
