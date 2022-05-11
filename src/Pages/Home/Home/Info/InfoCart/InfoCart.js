import React from "react";

const InfoCart = ({ cartDetails }) => {
  const { icon, title, description, css } = cartDetails;
  return (
    <div
      style={{ background: `${css}` }}
      className='card lg:card-side shadow-xl '
    >
      <figure className='lg:pl-7 pt-5'>
        <img src={icon} alt='Album' />
      </figure>
      <div className='card-body text-white'>
        <h2 className='card-title'>{title}</h2>
        <p className='text-left'>{description}</p>
      </div>
    </div>
  );
};

export default InfoCart;
