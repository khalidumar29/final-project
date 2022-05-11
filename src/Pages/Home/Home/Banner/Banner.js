import React from "react";
import chair from "../../../../assets/images/chair.png";
import PrimaryButton from "../../../Shared/Navbar/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero  min-h-screen lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="text-left">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
