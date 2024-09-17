"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import Link from "next/link";

const page = () => {
  const usersList = useSelector((store) => store.user.users);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <h1 className="text-3xl font-bold text-white mb-8">Manage Users</h1>

        <Link href="/">
          <span className="text-lg font-bold text-green-600 hover:text-green-700">
            ← Back
          </span>
        </Link>

        {/* User List */}
        {usersList.length > 0 ? (
          <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
            {usersList.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-900 p-4 rounded-lg mb-4 transition-colors hover:bg-gray-700"
              >
                <span className="text-lg font-semibold text-yellow-400">
                  {item.name}
                </span>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => dispatch(removeUser(item.id))}
                >
                  Remove User
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white mt-6">
            No users available. Please add some users.
          </div>
        )}
      </div>
    </>
  );
};

export default page;
