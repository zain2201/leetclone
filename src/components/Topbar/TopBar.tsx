import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { BsList } from "react-icons/bs";

type Props = {
  problemsPage?: boolean;
};

const TopBar = ({ problemsPage }: Props) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <div>
      <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
        <div
          className={`flex w-full items-center justify-between ${
            !problemsPage ? "max-w-7xl" : ""
          }`}
        >
          <Link href="/" className="h-[22px] flex-1">
            {/* <img src="/logo-full.png" alt="Logo" className="h-full" /> */}
            <Image src="/logo-full.png" alt="logo" height={100} width={100} />
          </Link>

          {problemsPage && (
            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 w-8 h-8 cursor-pointer">
                <FaChevronLeft />
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 font-medium max-2 [170px] text-dark-gray-8 cursor-pointer"
              >
                <div>
                  <BsList />
                </div>
                <p>ProblemsList</p>
              </Link>
              <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 w-8 h-8 cursor-pointer">
                <FaChevronRight />
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div>
              <a
                href="https://www.buymeacoffee.com/burakorkmezz"
                target="_blank"
                rel="noreferrer"
                className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
              >
                Premium
              </a>
            </div>
            {!user && (
              <Link href="/auth">
                <button
                  onClick={() =>
                    setAuthModalState((prev) => ({
                      ...prev,
                      isOpen: true,
                      type: "login",
                    }))
                  }
                  className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded "
                >
                  Sign In
                </button>
              </Link>
            )}
            {user && (
              <div className="cursor-pointer group relative ">
                <img
                  src="avatar.png"
                  alt="userprofile"
                  className="h-8 w-8 rounded-full"
                ></img>
                <div
                  className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
		transition-all duration-300 ease-in-out"
                >
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>
            )}
            {user && <Logout />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
