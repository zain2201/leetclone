import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!inputs.email || !inputs.password)
        return alert("Please fill all the fields");
      const user = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!user) return;
      router.push("/");
    } catch (error: any) {}
  };
  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
  });
  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-black"
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
        className="flex w-full justify-end"
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
