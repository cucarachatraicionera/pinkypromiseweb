import type { NextPage } from "next";
import Image from "next/image";
import Why from "../components/why";
import Tokenomics from "../components/tokenomics";
import FrameComponent1 from "../components/frame-component1";
import PresaleContent from "../components/presale-content";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-[#a2025c] via-[#1b8bad] to-[#363637] overflow-hidden opacity-[0.99] leading-normal tracking-normal text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat">
      {/* Secciones principales */}
      <Why />
      <Tokenomics />
      <FrameComponent1 />

      {/* Imagen decorativa */}
      <div className="flex justify-center py-10">
        <Image
          className="rounded-3xl object-cover"
          loading="lazy"
          width={536}
          height={648}
          alt="swap module"
          src="/swap-module1@2x.png"
        />
      </div>

      {/* Contenido de preventa y razones */}
      <section className="w-full flex flex-col items-center justify-start px-4 py-12 box-border">
        <div className="w-full max-w-[1373px] flex flex-col gap-20">
          <PresaleContent />
          <FrameComponent />
        </div>
      </section>

      {/* Info de precio y conversión */}
      <div className="w-full flex flex-col items-center gap-4 text-white px-4">
        <div className="text-xl font-medium">
          <span className="opacity-80">Actual Price:</span>
          <b> $0,0</b>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="font-medium">Pay with ETH</span>
          <span className="font-medium">→</span>
          <span className="font-medium">Receive $PINKYP</span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Desktop;