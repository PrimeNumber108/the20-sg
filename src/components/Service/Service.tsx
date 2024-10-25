"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import MarketMaking from "../MarketMaking/MarketMaking";
import OTC from "../OTC/OTC";
import Investment from "../Investment/Investment";


export default function Service() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
      <div>
        <div className="max-w-screen-xl mx-auto mt-10">
          <h1 className="lg:text-[64px] text-5xl leading-none mt-28 mb-10 lg:mb-20 text-center lg:text-left ">What we
            do</h1>

          <div className="">
            <h2 className="py-10 px-4 md:px-0 border-b text-[32px] leading-none">I. Market Maker</h2>
            <div className="grid grid:cols-1 md:grid-cols-3 gap-4 mt-10 mx-5 md:mx-0">
              <div className="p-5 border">
                <img src="/images/service/icon-dashboard.png" loading={"lazy"} alt="dashboard"/>
                <p className="mt-5">We provide market making service with focus on developing markets. We have connected
                  with most
                  high-volume exchanges, especially in the Cryptocurrency field.</p>
              </div>
              <div className="p-5 border">
                <img src="/images/service/icon-eye.png" alt="dashboard"/>
                <p className="mt-5">We look deep into order book and maintain close spread. Stem rom TradFi, our models
                  are tested on a very wide range of historical data and assets.</p>
              </div>
              <div className="p-5 border">
                <img src="/images/service/icon-pencil.png" alt="dashboard"/>
                <p className="mt-5">We maintain close communication with projects. We are always willing to listen to
                  your needs.</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="py-10 border-b text-[32px] leading-none px-4 md:px-0">II. OTC</h2>
            <p className="my-10 px-4 md:px-0">We utilize all channels to facilitate liquidity</p>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-10 mx-5 md:mx-0">
              <div className="">
                <div className="p-5 border h-52">
                  <h2 className="font-[roboto] text-5xl text-gray-400">01</h2>
                  <p className="mt-5">We support OTC service for high liquid markets in cryptocurrency & some major
                    currencies</p>
                </div>
              </div>
              <div className="">
                <div className="p-5 border md:mt-20 h-52">
                  <h2 className="font-[roboto]  text-5xl text-gray-400 ">02</h2>
                  <p className="mt-5">Trades are conducted electronically or via email/chat/phone requests</p>
                </div>
              </div>
              <div className="">
                <div className="p-5 border md:mt-40 h-52">
                  <h2 className="font-[roboto]  text-5xl text-gray-400">03</h2>
                  <p className="mt-5">For inquires, please fill the contact form or email us at tqh@the20.sg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="py-10 border-b text-[32px] leading-none px-4 md:px-0">III. Investment</h2>
            <div className="relative">
              <img src="/images/service/investment.png" alt="Your Image" className="w-full h-auto min-h-[300px]"/>
              <div className="absolute inset-0 bg-[#DBDBDB] opacity-50"></div>
              <div className="absolute inset-0 h-full">

                <div className="grid grid-cols-12 gap-4 h-full py-10">
                  <div className="col-span-0 md:col-span-1"></div>
                  <div className="col-span-6 flex items-end">
                    <div className="w-96 text-[#484848] text-sm lg:text-xl">
                      <p>If you are project owner and looking for equity/token funding, reach out to use
                        via the contact form or email to tqh@the20.sg</p>
                      <button type="button" className="text-black mt-5   bg-[#e5c493]  focus:ring-4 focus:outline-none
                                font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 ">Contact us
                      </button>
                    </div>
                  </div>
                  <div className="col-span-4 text-[#484848] text-xl lg:text-[32px] leading-tight">We maintain a wide
                    range of portfolio acorss asset groups and
                    venture investments
                  </div>
                  <div className="col-span-0 md:col-span-1"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

  );
}
// <div className="justify-center items-center bg-white flex flex-col">
      //   {tab === "investment" ? (
      //     <Investment />
      //   ) : tab === "otc" ? (
      //     <OTC />
      //   ) : (
      //     <MarketMaking />
      //
      //   )}
      // </div>
