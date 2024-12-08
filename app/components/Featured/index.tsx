"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    heading: "Servicing",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Repairs",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Registration",
    imgSrc: "/images/featured/feat3.jpg",
  },
];

// CAROUSEL SETTINGS
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      // centerMode: true,
      slidesToScroll: 1,
      speed: 500,
      cssEase: "linear",
      pauseOnHover: false,
      autoplay: true,
      arrows: true,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),

      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    return (
      <div id="services-section" className=" marginFeature">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center pb-10 ">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
              Our Services
            </h3>
            <div className="max-w-3xl mx-auto py-5 text-subtitle text-base ">
              <p>
                For your car we will do everything – advice, repairs and
                maintenance. We are the preferred choice by many car owners
                because our experience and knowledge is self-evident.
              </p>
            </div>
          </div>
          <div className="relative">
            <Slider {...settings}>
              {postData.map((items, i) => (
                <div
                  key={i}
                  className="max-w-lg bg-white rounded-lg overflow-hidden mx-auto"
                >
                  <img
                    src={items?.imgSrc}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-black-300 text-center">
                      {items?.heading}
                    </h2>
                    <p className="text-grey font-medium text-center mt-4">
                      Total Care Auto is your go-to destination for all your car
                      repair needs. From engine repairs to brakes and clutch
                      repair, we offer it all. Our proficient mechanics fix any
                      issue with your vehicle. And they will go the extra mile
                      with safety and service checks giving you total peace of
                      mind.
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
