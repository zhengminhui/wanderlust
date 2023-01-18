import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import dynamic from "next/dynamic";
import SearchBar from "../components/SearchBar";

const AMapComponent = dynamic(() => import("../components/AMap"), {
  ssr: false,
});
const InfoPanel = dynamic(() => import("../components/InfoPanel"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Have a good dinner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main items-center flex flex-col w-[50%] m-auto">
        <div className="banner h-[5vh] mx-4 flex items-center text-xl">
          今晚去哪吃
        </div>
        <div className="map-wrapper w-[390px] h-full">
          <SearchBar />
          <div className="h-[70vh]">
            <AMapComponent />
          </div>
          <InfoPanel restaurantInfo={{}} addressArr={[]} />
        </div>
      </main>
    </>
  );
}
