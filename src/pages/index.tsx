import Image from "next/image";
import { Inter } from "next/font/google";
import TopBar from "@/components/Topbar/TopBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <TopBar />
        <h1 className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
          leetcode problems
        </h1>
      </main>
    </>
  );
}
