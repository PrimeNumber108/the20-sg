"use client";
import React, { useState, useRef, useEffect } from "react";

const Contents = [
  `We provide market making service with focus on developing markets. We
have connected with most high-volume exchanges, especially in the
Cryptocurrency field.`,
  `We look deep into order book and maintain close spread. Stem rom TradFi, our models are tested on a very wide range of historical data and assets.`,
  `We maintain close communication with projects. We are always willing to listen to your needs.`,
];

export default function MarketMaking() {
  const [index, setIndex] = useState(0);
  const interval = useRef<NodeJS.Timeout>();

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
    resetAutoSwitch();
  };
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Contents.length);
    resetAutoSwitch();
  };

  // Auto-switching logic
  const resetAutoSwitch = () => {
    clearInterval(interval.current);
    startAutoSwitch();
  };

  const startAutoSwitch = () => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Contents.length);
    }, 5000); // Change interval time as needed (in milliseconds)
    interval.current = intervalId;
  };

  useEffect(() => {
    startAutoSwitch(); // Start auto-switching when the component mounts

    return () => {
      clearInterval(interval.current); // Clear interval when the component unmounts
    };
  }, []);

  return (
    <div className='w-[100vw] flex justify-center'>
    <div className="relative min-h-[500px] mt-20 translate-x-60 max-md:translate-x-0">
      <div
        className="absolute bottom-[75px] right-[150px] min-w-[635px] h-[500px] w-full max-md:hidden"
        style={{ backgroundImage: "url(/marketmaking.png)", zIndex: 0 }}
      ></div>
      <div className=" relative items-stretch shadow-sm bg-white flex max-w-[470px]  flex-col px-8 py-6 box-shadow">
        <div className="text-black text-2xl font-medium leading-8 tracking-[2.4px] uppercase">
          Market Making
        </div>
        <div className="text-neutral-600 text-xl leading-8 mt-3 min-h-[160px] max-[600px]:text-sm">
          {Contents[index]}
        </div>
        <div className="justify-between items-center flex w-full gap-5 mt-12">
          <div className="items-stretch flex gap-2 my-auto">
            <span
              className="cursor-pointer"
              onClick={() => handleIndexChange(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="5.5" stroke="#505050" />
                <circle
                  cx="6"
                  cy="6"
                  r="3"
                  fill={index === 0 ? "#505050" : "none"}
                />
              </svg>
            </span>

            <span
              className="cursor-pointer"
              onClick={() => handleIndexChange(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="5.5" stroke="#505050" />
                <circle
                  cx="6"
                  cy="6"
                  r="3"
                  fill={index === 1 ? "#505050" : "none"}
                />
              </svg>
            </span>

            <span
              className="cursor-pointer"
              onClick={() => handleIndexChange(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="5.5" stroke="#505050" />
                <circle
                  cx="6"
                  cy="6"
                  r="3"
                  fill={index === 2 ? "#505050" : "none"}
                />
              </svg>
            </span>

            <div className="stroke-[1px] flex w-3 shrink-0 h-3 flex-col rounded-[50%]" />
          </div>
          <div
            className="justify-center items-center rounded bg-stone-200 self-stretch flex aspect-[2.6153846153846154] flex-col px-6 py-1.5 cursor-pointer"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M19.6218 6.25636L13.2143 0.30721C12.7731 -0.102403 12.0588 -0.102403 11.6387 0.30721C11.1975 0.716823 11.1975 1.38001 11.6387 1.77012L16.1555 5.96378H1.11345C0.504202 5.96378 0 6.4319 0 6.99756C0 7.56322 0.504202 8.03135 1.11345 8.03135H16.1345L11.6387 12.225C11.1975 12.6346 11.1975 13.2978 11.6387 13.6879C11.8487 13.883 12.1429 14 12.437 14C12.7311 14 13.0042 13.9025 13.2353 13.6879L19.6639 7.71926C19.8739 7.52421 20 7.25113 20 6.97806C19.958 6.72449 19.8319 6.45141 19.6218 6.25636Z"
                fill="#272727"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
