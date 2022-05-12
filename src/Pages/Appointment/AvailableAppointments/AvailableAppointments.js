import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      <h4 className='text-xl text-secondary text-center'>
        {date ? (
          <>Available Appointments on {format(date, "PP")}</>
        ) : (
          <>Available Appointments on</>
        )}
      </h4>
    </div>
  );
};

export default AvailableAppointments;
