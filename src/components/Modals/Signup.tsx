import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Register to LeetCode</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-white"
        >
          {" "}
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="Email address"
        ></input>
      </div>
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium block mb-2 text-white"
        >
          {" "}
          Display Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="John Doe"
        ></input>
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm text-white font-medium block mb-2"
        >
          {" "}
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="Enter Password"
        ></input>
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
      >
        Register
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already Registered?{" "}
        <a href="#" className="text-blue-700 hover:undeline">
          Sign In
        </a>
      </div>
    </form>
  );
};

export default Signup;
