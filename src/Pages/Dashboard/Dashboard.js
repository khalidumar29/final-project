import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input
        id='drawer-side-bar-left'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content bg-dasboardBg'>
        <div className='flex items-center py-[15px] justify-between'>
          <h2 className='lg:text-[24px]  font-bold capitalize text-accent'>
            My Appointment
          </h2>
          <button className='btn btn-outline btn-accent'>MAY 10, 2022</button>
        </div>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label for='drawer-side-bar-left' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className='text-accent ' to={"/dashboard"}>
              My Appointments
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
