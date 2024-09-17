"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import Link from "next/link";

const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    if (name.trim() !== "") {
      dispatch(addUser(name));
      setName(""); // Clear the input box after dispatching the action
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 border border-white/30 rounded-xl shadow-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 max-w-md mx-auto m-4">
      <Link href="/apiusers">
        <span className="text-yellow-600 font-bold text-xl">Api Users</span>
      </Link>
      <h3 className="text-xl font-bold mb-6 text-white drop-shadow-lg">
        Add New User
      </h3>
      <input
        type="text"
        placeholder="Enter new user's name"
        className="p-2 text-white placeholder-white/70 bg-white/20 border border-white/30 rounded-lg mb-6 w-80 focus:outline-none focus:ring-4 focus:ring-white/40"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex">
        <button
          className="m-4 p-2 bg-green-600 rounded-lg hover:bg-green-700"
          onClick={userDispatch}
        >
          Add User
        </button>
        <Link
          className="m-4 p-2 bg-red-600 rounded-lg hover:bg-red-700"
          href="/removeuser"
        >
          Remove User
        </Link>
      </div>
    </div>
  );
};

export default AddUsers;
