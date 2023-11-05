import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import { log } from "console";

type Props = {};

const Signup = (props: Props) => {
  const router = useRouter();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const [inputs, setInputs] = useState({
    email: " ",
    displayName: " ",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return alert("Please fill all the fields");
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      console.log("this is error", error);
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);
  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleRegister}>
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
          onChange={handleChange}
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-black"
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
          id="displayName"
          name="displayName"
          onChange={handleChange}
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-black"
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
          onChange={handleChange}
          className="border-2 outline-none sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-600 border-gray-500 placeholder-gray-400 text-black"
          placeholder="Enter Password"
        ></input>
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:undeline"
          onClick={() => handleClick("login")}
        >
          Sign In
        </a>
      </div>
    </form>
  );
};

export default Signup;
