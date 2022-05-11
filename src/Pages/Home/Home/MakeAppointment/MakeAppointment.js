import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appoinmenntBg from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../Shared/Navbar/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appoinmenntBg})` }}
      className='flex justify-center items-center'
    >
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-150px]' src={doctor} alt='' />
      </div>
      <div className='flex-1 text-left'>
        <h3 className='text-xl text-primary font-bold lg:mb-2'>Appointment</h3>
        <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
        <p className='text-white lg:py-5 lg:pr-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore
          assumenda, alias reiciendis adipisci autem veritatis in aliquam
          voluptas nobis officia numquam, aperiam dicta. Ipsum quo quasi rem, ut
          minima corporis eveniet illo placeat dolor nulla adipisci repellendus
          sunt fugit.
        </p>
        <PrimaryButton className='lg:py-3'>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
