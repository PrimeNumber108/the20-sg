import * as React from "react";
import { Navigation } from "../Navigation/Navigation";
import Link from "next/link";
import Image from "next/image";
import img1Section from "../../../public/images/background/img-1-section-1.png";
import img2Section from "../../../public/images/background/img-2-section-2.png";
import imgMouse from "../../../public/images/background/mouse.svg";

function Home() {
  return (
    <div>
      <div className="bg-black flex flex-col justify-center pt-20">
        <div className="">
          <div className="relative flex items-end justify-center h-screen  overflow-hidden md:w-full ">
            <div className="relative z-30 p-5 mb-24 text-2xl text-white  bg-opacity-50 rounded-xl">
              <h1 className="text-gradient text-[64px] font-bold leading-tight text-center">The20</h1>

              <p className="mt-5 text-[32px] leading-tight font-weight-[400] text-center ">Quantitative Trading</p>
            </div>
            <video autoPlay loop muted className="absolute z-10 w-auto min-w-full object-cover max-h-full max-w-none">
              <source src={"/videos/home.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <section className=" p-10 ">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid  gap-4 grid-cols-12">
            <div className="col-span-0 lg:col-span-1"></div>
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start justify-center">
              <p className="text-center lg:text-left">
                We aim towards Maximizing Profit for Customers through the application of Machine Data Mining &
                Analysis, combined with our wide expertise in different investment fields.
              </p>

              <a className="text-[#e5c493] mt-16 inline-flex  items-center" href="/about">
                More about us
                <span className="inline-flex items-center ml-2">
                  <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30.8839 10.3839C31.372 9.89573 31.372 9.10427 30.8839 8.61611L22.9289 0.661163C22.4408 0.173008 21.6493 0.173008 21.1612 0.661163C20.673 1.14932 20.673 1.94078 21.1612 2.42893L28.2322 9.5L21.1612 16.5711C20.673 17.0592 20.673 17.8507 21.1612 18.3388C21.6493 18.827 22.4408 18.827 22.9289 18.3388L30.8839 10.3839ZM1.09278e-07 10.75L30 10.75L30 8.25L-1.09278e-07 8.25L1.09278e-07 10.75Z"
                      fill="#876D4D"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5 gap-4 md:gap-10 flex justify-center">
              <img className="w-44 h-56" src="/images/background/img-1-section-1.png" alt="" />
              <img className="mt-24 w-40 md:w-44 h-56" src="/images/background/img-2-section-2.png" alt="" />
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-4 md:grid-cols-1">
            <div className="col-span-0 md:col-span-0 lg:col-span-1"></div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-5 py-20">
              <h2 className="text-gradient text-[46px] leading-tight text-center lg:text-left">LOCATE US</h2>
              <div className="bg-[#141414] rounded px-10 py-5 my-5 text-white">
                <h6 className="uppercase">Singapore</h6>
              </div>

              <div className="bg-[#141414] rounded px-10 py-5 text-white">
                <h6>VIETNAM</h6>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <video autoPlay loop muted className="w-full h-full max-h-[528px] object-cover  max-w-none">
                <source src="/videos/earth.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <div className=" md:block hidden fixed asolute bottom-0 right-28 z-50">
        <Image src={imgMouse} alt="" />
      </div>
    </div>
  );
}

export default Home;
