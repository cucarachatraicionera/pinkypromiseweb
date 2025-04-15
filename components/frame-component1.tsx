"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import SwapButton from "../components/SwapButton"; // Asegúrate de ajustar la ruta según tu estructura

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const [fromAmount, setFromAmount] = useState("2,194");
  const [toAmount, setToAmount] = useState("12,466");

  return (
    <section
      className={`absolute top-[4282px] left-[92px] w-[1301px] h-[894px] flex flex-row items-start justify-start pt-0 px-0 pb-[172px] box-border max-w-full text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="self-stretch w-[1224px] flex flex-row items-end justify-start gap-[71px] max-w-full mq1025:flex-wrap">
        <div className="self-stretch flex-1 rounded-21xl flex flex-col items-start justify-start py-10 px-[39px] box-border gap-10 bg-[url('/swap-module@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mq450:min-w-full mq1025:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-5">
            {/* FROM */}
            <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5 z-[0]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                <div className="relative leading-[16px] font-medium">from</div>
              </div>
              <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-xl gap-0 text-21xl mq450:flex-wrap">
                <input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-transparent text-4xl font-bold outline-none text-white"
                />
                <button className="cursor-pointer border-deepskyblue border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl overflow-x-auto flex flex-row items-center justify-end">
                  <Image src="/protocol-icon.svg" width={36} height={36} alt="SOL" />
                  <div className="py-2.5 px-4">
                    <span className="text-base text-deepskyblue font-montserrat">SOL</span>
                  </div>
                </button>
              </div>
            </div>

            {/* TO */}
            <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5 z-[1] font-overpass">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                <div className="relative leading-[16px] font-medium">to</div>
              </div>
              <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-xl gap-0 text-21xl font-montserrat mq750:flex-wrap">
                <input
                  type="text"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="bg-transparent text-4xl font-bold outline-none text-white"
                />
                <button className="cursor-pointer border-deepskyblue border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl flex flex-row items-center justify-end">
                  <Image
                    src="/chihuahua-1@2x.png"
                    alt="Pinky"
                    width={37}
                    height={38}
                    className="rounded-full"
                  />
                  <div className="py-2.5 px-4">
                    <span className="text-base text-deepskyblue font-montserrat">Pinky Promise</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_21.5px)] rounded-17xl bg-deepskyblue border-black border-solid border-[4px] flex flex-row items-start justify-start p-1.5 z-[2]">
              <Image src="/autorenew.svg" width={24} height={24} alt="swap" />
            </div>
          </div>

          {/* Info */}
          <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start p-xl gap-5">
            <div className="flex flex-row items-center justify-start gap-2.5 text-xl mq750:flex-wrap">
              <span className="font-bold text-white">{fromAmount}</span>
              <span className="text-white/60">SOL</span>
              <span>→</span>
              <span className="font-bold text-white">{toAmount}</span>
              <span className="text-white/60">PINKY PROMISE</span>
            </div>
            <div className="flex justify-between w-full text-white/60">
              <span>Minimum Received</span>
              <span>10 PINKY PROMISE</span>
            </div>
            <div className="flex justify-between w-full text-white/60">
              <span>Price Impact</span>
              <span>-</span>
            </div>
          </div>

          {/* SWAP BUTTON FUNCIONAL */}
          <SwapButton recipient="B281iQS8fnYczAyQR5U9j3hNyMYaiNbGkwM3z9AwG8Pk" amount={0.01} />
        </div>

        {/* Lado derecho del swap (info visual, lotería, etc.) permanece igual */}
        <div className="h-[606px] w-[570px] flex flex-col items-start justify-start max-w-full text-6xl mq750:min-w-full mq1025:flex-1">
          {/* ... tu estructura actual aquí */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
