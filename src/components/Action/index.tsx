// /src/components/Action/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Action = () => {
  return (
    <>
      <section id="Action" className="realtive z-30 mt-0 p-0 w-full text-black">
          
              
        <div className="pb-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          
            <div className="w-full">
                <h2 className="text-[#165D8F] text-lg font-extrabold">SPREAD THE WORD</h2>
                <p className="text-left py-2">
                We have had a lot of media attention. Let&apos;s keep the ball rolling! Keep telling others, wear your button, hand out flyers, and follow, like and share our Facebook page .
                </p>
            </div>

            <div className="w-full">
                <h2 className="text-[#165D8F] text-lg font-extrabold">STAY INFORMED</h2>
                <p className="text-left py-2">
                    To receive the latest updates, announcements, events, and media coverage, subscribe to our <a className="text-[#38AF34] font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</a>.
                </p>
            </div>
        
            <div className="w-full">
                <h2 className="text-[#165D8F] text-lg font-extrabold">ADD YOUR VOICE</h2>
                <p className="text-left py-2">
                We are working on the contact list for those wishing to email, call or mail other parties involved. We will let everyone know by email when that becomes available through our website.
                </p>
            </div>

            <div className="w-full">
                <h2 className="text-[#165D8F] text-lg font-extrabold">SIGN THE PETITION</h2>
                <p className="text-left py-2">
                Take a moment to sign the <a className="text-[#38AF34] font-extrabold"  href="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120">online petition</a> 
                </p>
                <div className="p-2 bg-[#fbbf24] text-black text-xs m-1">
                    WARNING: <br/><br/>Donations to change.org DO NOT go towards our cause.  For donations to STGA, please use Interac E-Transfer to <span className="text-[#165D8F] font-extrabold">savethegroveagain@gmail.com</span>.
                </div>
               
            </div>

            <div className="w-full">
                <h2 className="text-[#165D8F] text-lg font-extrabold">VOLUNTEER</h2>
                <p className="text-left py-2">
                We have set up a volunteer form. If you would like to offer your help please take a few minutes to fill in the <a  className="text-[#38AF34] font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link">form</a>.
                </p>
            </div>

            <div className="w-full">
                <h2 className="text-[#165D8F] text-lg font-extrabold">MAKE A DONATION</h2>
                <p>
                For those who are wanting to make a donation the best way to get money directly to us is via an e-transfer to this email address <span className="text-[#165D8F] font-extrabold">savethegroveagain@gmail.com</span>. Please share that information with others who may want to contribute.
                               
                </p>
            </div>

        </div>

        <p className="text-center pb-10 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

      </section>
    </>
  );
};

export default Action;
