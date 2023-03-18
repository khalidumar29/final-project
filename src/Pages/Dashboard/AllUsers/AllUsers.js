import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://doc-portal-server.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const makeAdmin = (email) => {
    fetch(`https://doc-portal-server.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed To Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  return (
    <div>
      <div className='flex items-center py-[15px] justify-between'>
        <h2 className='lg:text-[24px]  font-bold capitalize text-accent'>
          All User
        </h2>
      </div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
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
              <tr refetch={refetch} key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className='flex items-center space-x-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          src='https://i.ibb.co/KXsDP3Q/tailwind-css-component-profile-2-56w.png'
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>{user.email} </div>
                  </div>
                </td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className='btn btn-xs uppercase'
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className='btn btn-xs uppercase'>remove user</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
