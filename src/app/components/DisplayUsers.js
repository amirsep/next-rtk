"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";

const DisplayUsers = () => {
  const usersList = useSelector((store) => store?.user?.users);
  // console.log(usersList);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3; // Number of users to display per page

  // Calculate total pages
  const totalPages = Math.ceil(usersList.length / usersPerPage);

  // Get current users based on page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-center items-center p-8 border border-white/30 rounded-xl shadow-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 max-w-md mx-auto  hover:shadow-2xl">
      <h3 className="text-xl font-bold mb-6 text-white drop-shadow-lg">
        Display User List
      </h3>
      {currentUsers.length > 0 ? (
        currentUsers.map((item) => (
          <div
            className="flex items-center justify-between p-4 mb-4 bg-gray-800 rounded-lg shadow-md w-full hover:bg-gray-700 transition-colors duration-200"
            key={item.id}
          >
            <span className="text-lg font-semibold text-yellow-500">
              {item.name}
            </span>
            <div>
              <button
                className="px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-200"
                onClick={() => {
                  dispatch(removeUser(item.id));
                }}
              >
                Remove User
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-white text-center mt-4">
          No users available. Please add some users.
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-lg  ${
              currentPage === index + 1
                ? "bg-yellow-500 text-gray-900"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayUsers;
