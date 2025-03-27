import React from "react";

export default function OTC() {
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="text-black text-center text-2xl font-medium leading-8 tracking-[2.4px] uppercase max-md:max-w-full">
        OTC
      </div>
      <div className="text-stone-900 text-center text-lg leading-7 self-stretch mt-5 mx-7 max-md:max-w-full max-md:mr-2.5">
        We utilize all channels to facilitate liquidity
      </div>
      <div className="self-stretch w-full mt-5 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch rounded border shadow-sm flex grow flex-col w-full px-8 py-6 border-solid border-zinc-300 max-md:mt-5 max-md:px-5">
              <div className="text-zinc-300 text-6xl font-medium leading-[70.2px] max-md:text-4xl">01</div>
              <div className="text-neutral-600 text-xl leading-8 mt-2 max-[600px]:text-sm">
                We support OTC service for high liquid markets in cryptocurrency & some major currencies
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch rounded border shadow-sm bg-white flex grow flex-col w-full px-8 py-6 border-solid border-zinc-300 max-md:mt-5 max-md:px-5">
              <div className="text-zinc-300 text-6xl font-medium leading-[70.2px] max-md:text-4xl">02</div>
              <div className="text-neutral-600 text-xl leading-8 mt-2 max-[600px]:text-sm">
                Trades are conducted electronically or via email/chat/phone requests
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch rounded border flex grow flex-col w-full px-8 py-6 border-solid border-zinc-300 max-md:mt-5 max-md:px-5">
              <div className="text-zinc-300 text-6xl font-medium leading-[70.2px] max-md:text-4xl">03</div>
              <div className="text-neutral-600 text-xl leading-8 mt-2 max-[600px]:text-sm">
                For inquires, please fill the contact form or email us at admin@the20.sg
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
