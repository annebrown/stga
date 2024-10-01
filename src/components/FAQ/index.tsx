// /src/components/FAQ/index.tsx
import Link from "next/link";

const FAQ = () => {
  return (
    <>
      <section id="FAQ" className="realtive z-30 mt-0 p-0 w-full text-black">
          
            <h2 className="text-3xl pb-3 font-bold text-center">
                Frequently Asked Questions
            </h2>
            <div className="flex my-5">

                <div className="text-center px-20">
                    <p className="text-left py-2 font-bold">
                        What is your favorite color?
                    </p>
                    <p className="text-left py-2">
                        Red.  No, Green.  Ahhhhh....! 
                    </p>
                </div>
                <div className="text-center px-20">
                    <p className="text-left py-2 font-bold">
                        What is your quest? 
                    </p>
                    <p className="text-left py-2">
                        Icecream.
                    </p>
                </div>
            </div>
          <p className="text-center pb-10 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

      </section>
    </>
  );
};

export default FAQ;
