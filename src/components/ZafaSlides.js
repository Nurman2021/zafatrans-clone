import React from "react";
import { Carousel } from "antd";

const slideUrl = [
  "https://fms.zafatrans.co.id/media-uploads/banner-2-1695555356.png",
  "https://fms.zafatrans.co.id/media-uploads/banner-4-1695555533.png",
  "https://fms.zafatrans.co.id/media-uploads/banner-1696320837.jpg",
  "https://fms.zafatrans.co.id/media-uploads/banner-1696321959.jpg",
];

const ZafaSlides = () => (
  <Carousel autoplay>
    {slideUrl.map((image, index) => (
      <div key={index}>
        <div
          className="rounded-xl h-52 mt-3"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    ))}
  </Carousel>
);
export default ZafaSlides;
