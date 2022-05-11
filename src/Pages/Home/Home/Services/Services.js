import React from "react";
import Service from "./Service";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
const Services = () => {
  const services = [
    {
      _id: "1",
      icon: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: "2",
      icon: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: "3",
      icon: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className='my-28'>
      <div className='text-center'>
        <h3 className='text-primary text-xl font-bold'>Our Services</h3>
        <h2 className='capitalize text-4xl'>services we provide</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service) => (
          <Service key={service._id} services={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
