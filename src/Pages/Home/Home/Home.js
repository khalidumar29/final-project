import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonilas from "./Testimonilas/Testimonilas";

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonilas></Testimonilas>
    </div>
  );
};

export default Home;
