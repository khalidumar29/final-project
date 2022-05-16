import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../../hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  return (
    <div className='drawer drawer-mobile'>
      <input
        id='drawer-side-bar-left'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content bg-dasboardBg'>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='drawer-side-bar-left'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className='text-accent' to={"/dashboard"}>
              My Appointments
            </Link>
          </li>
          <li>
            <Link className='text-accent' to={"/dashboard/myreview"}>
              My Review
            </Link>
          </li>
          <li>
            <Link className='text-accent' to={"/dashboard/history"}>
              My History
            </Link>
          </li>
          {admin && (
            <li>
              <Link className='text-accent' to={"/dashboard/alluser"}>
                All Users
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
