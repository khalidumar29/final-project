import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "../BookingModal/BookingModal";
import Service from "./Service";
import Loading from "../../Shared/Loading/Loading";
const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const foramtteDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", foramtteDate], () =>
    fetch(
      `https://doc-portal-server.onrender.com/avaiableServices?date=${foramtteDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

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
        {services?.map((service) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
