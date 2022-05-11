import React from "react";
import InfoCart from "./InfoCart/InfoCart";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
const Info = () => {
  const cartDetails = [
    {
      icon: clock,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      css: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
    },
    {
      icon: marker,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      css: "#3A4256",
    },
    {
      icon: phone,
      title: "Contact us now",
      description: "+000 123 456789",
      css: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
    },
  ];
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <InfoCart cartDetails={cartDetails[0]}></InfoCart>
      <InfoCart cartDetails={cartDetails[1]}></InfoCart>
      <InfoCart cartDetails={cartDetails[2]}></InfoCart>
    </div>
  );
};

export default Info;
