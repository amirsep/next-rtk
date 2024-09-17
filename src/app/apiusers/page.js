"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import Link from "next/link";

const Page = () => {
  const dispatch = useDispatch();

  const { data: userListApi, isLoading } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col justify-center items-center p-8 border border-white/30 rounded-xl shadow-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 max-w-md mx-auto hover:shadow-2xl m-4">
      <Link href={"/"}>
        <span className="text-lg font-bold text-green-600 hover:text-green-700 ">
          ← Back
        </span>
      </Link>
      <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
        User List
      </h1>

      <button
        onClick={() => dispatch(fetchUsers())}
        className="mb-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        Fetch Users
      </button>

      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <b className="text-yellow-500 text-lg">Loading...</b>
        </div>
      ) : (
        <ul className="w-full space-y-4">
          {userListApi?.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200"
            >
              <span className="text-lg font-semibold text-yellow-500">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
