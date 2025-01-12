// /src/components/About/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Flyer = () => {
  return (
    <>
      <section id="Flyer" className="realtive z-30 mt-0 p-0 w-full text-black">
          
            <h2 className="text-3xl pb-3 font-bold text-center">January 16, 2025 Event Flyer</h2>
            <div className="text-center px-0">
            <iframe src="/images/flyers/2025-01-16Event.pdf" width="100%" height="700px"></iframe>
            </div>
          <p className="text-center pb-10 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

      </section>
    </>
  );
};

export default Flyer;
