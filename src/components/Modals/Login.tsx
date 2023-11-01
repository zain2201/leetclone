import { authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

const Login = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign in to LeetCode</h3>
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
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-white-500 placeholder-gray-400 text-white"
          placeholder="Email address"
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
        Login
      </button>
      <button
        onClick={() => {
          handleClick("forgotPassword");
        }}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:undeline"
          onClick={() => handleClick("register")}
        >
          Create Account
        </a>
      </div>
    </form>
  );
};

export default Login;
