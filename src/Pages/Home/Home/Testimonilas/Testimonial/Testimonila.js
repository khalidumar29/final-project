import React from "react";

const Testimonilas = ({ testimonial }) => {
  const { name, address, img, description } = testimonial;
  return (
    <div className='card lg:max-w-lg bg-base-100 shadow-xl text-left'>
      <div className='card-body'>
        <p>{description}</p>
        <div className='flex items-center text-left'>
          <div className=' relative inline-flex'>
            <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5'>
              <img src={img} alt='avatar images' />
            </div>
            <div>
              <h4 className='text-xl'>{name}</h4>
              <p>{address}</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Testimonilas;
