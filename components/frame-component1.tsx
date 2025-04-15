"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import SwapButton from "../components/SwapButton";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const [fromAmount, setFromAmount] = useState("2,194");
  const [toAmount, setToAmount] = useState("12,466");

  return (
    <section
      className={`w-full flex flex-col items-center justify-start py-12 px-4 box-border max-w-full text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-start justify-start gap-10">
        {/* Swap Card */}
        <div className="flex-1 rounded-21xl flex flex-col items-start justify-start py-10 px-[39px] box-border gap-10 bg-[url('/swap-module@3x.png')] bg-cover bg-no-repeat bg-top z-[2]">
          <div className="w-full flex flex-col items-start justify-start relative gap-5">
            {/* FROM */}
            <div className="w-full rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5">
              <div className="px-5">
                <div className="leading-[16px] font-medium">from</div>
              </div>
              <div className="w-full rounded-xl bg-dark-grey flex flex-row items-center justify-between p-4 text-4xl font-bold text-white">
                <input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-transparent outline-none w-full max-w-[70%]"
                />
                <button className="border border-deepskyblue bg-dark-grey rounded-25xl flex flex-row items-center">
                  <Image src="/protocol-icon.svg" width={36} height={36} alt="SOL" />
                  <div className="py-2.5 px-4 text-base text-deepskyblue font-montserrat">SOL</div>
                </button>
              </div>
            </div>

            {/* TO */}
            <div className="w-full rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5 font-overpass">
              <div className="px-5">
                <div className="leading-[16px] font-medium">to</div>
              </div>
              <div className="w-full rounded-xl bg-dark-grey flex flex-row items-center justify-between p-4 text-4xl font-bold text-white">
                <input
                  type="text"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="bg-transparent outline-none w-full max-w-[70%]"
                />
                <button className="border border-deepskyblue bg-dark-grey rounded-25xl flex flex-row items-center">
                  <Image
                    src="/chihuahua-1@2x.png"
                    alt="Pinky"
                    width={37}
                    height={38}
                    className="rounded-full"
                  />
                  <div className="py-2.5 px-4 text-base text-deepskyblue font-montserrat">Pinky Promise</div>
                </button>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-17xl bg-deepskyblue border-black border-4 flex items-center justify-center p-1.5 z-[2]">
              <Image src="/autorenew.svg" width={24} height={24} alt="swap" />
            </div>
          </div>

          {/* Info */}
          <div className="w-full rounded-xl bg-black flex flex-col items-start justify-start p-4 gap-5 text-white">
            <div className="flex flex-row items-center gap-2.5 text-xl">
              <span className="font-bold">{fromAmount}</span>
              <span className="opacity-60">SOL</span>
              <span>→</span>
              <span className="font-bold">{toAmount}</span>
              <span className="opacity-60">PINKY PROMISE</span>
            </div>
            <div className="flex justify-between w-full opacity-60">
              <span>Minimum Received</span>
              <span>10 PINKY PROMISE</span>
            </div>
            <div className="flex justify-between w-full opacity-60">
              <span>Price Impact</span>
              <span>-</span>
            </div>
          </div>

          {/* SWAP BUTTON FUNCIONAL */}
          <SwapButton recipient="B281iQS8fnYczAyQR5U9j3hNyMYaiNbGkwM3z9AwG8Pk" amount={0.01} />
        </div>

        {/* Right Side Info Placeholder */}
        <div className="w-full md:w-[570px] h-[606px] flex flex-col items-start justify-start text-6xl">
          {/* Aquí va el contenido visual, lotería, etc. */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
