import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import Testimonial from "./Testimonial/Testimonila";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
const Testimonilas = () => {
  const testimonials = [
    {
      _id: "12351",
      name: "Winson Herry",
      address: "California",
      img: people1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: "124641",
      name: "Winson Herry",
      address: "California",
      img: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: "1241",
      name: "Winson Herry",
      address: "California",
      img: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className='my-28'>
      <div className='flex justify-between'>
        <div className='text-left'>
          <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
          <h2 className='text-3xl capitalize '>what our patients say</h2>
        </div>
        <div>
          <img className='lg:w-48 w-24' src={quote} alt='' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial._id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonilas;
