import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:3100/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className='flex items-center py-[15px] justify-between'>
        <h2 className='lg:text-[24px]  font-bold capitalize text-accent'>
          All User
        </h2>
      </div>
      <div class='overflow-x-auto w-full'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div class='flex items-center space-x-3'>
                    <div class='avatar'>
                      <div class='mask mask-squircle w-12 h-12'>
                        <img
                          src='https://i.ibb.co/KXsDP3Q/tailwind-css-component-profile-2-56w.png'
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div class='font-bold'>Hart Hagerty</div>
                      <div class='text-sm opacity-50'>United States</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>Purple</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
