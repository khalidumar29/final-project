import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import ContactForm from "./ContactForm/ContactForm";
import DentalCare from "./DentalCare/DentalCare";
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
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonilas></Testimonilas>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
