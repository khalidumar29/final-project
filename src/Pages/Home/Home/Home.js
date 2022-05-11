import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
