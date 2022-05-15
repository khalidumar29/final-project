import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const foramtteDate = format(date, "PP");
  useEffect(() => {
    fetch(`http://localhost:3100/avaiableServices?date=${foramtteDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4 className='text-xl  text-secondary text-center'>
        {date ? (
          <>Available Appointments on {format(date, "PP")}</>
        ) : (
          <>Available Appointments on</>
        )}
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
