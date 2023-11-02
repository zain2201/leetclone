import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

type Props = {};

const index = (props: Props) => {
  const [user, loading, error] = useAuthState(auth); // [user,loading,error
  const authModal = useRecoilValue(authModalState);
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router]);
  if (pageLoading) return null;
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black  h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
          <img src="/hero.png" alt="hero image"></img>
        </div>

        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default index;
