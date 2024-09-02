"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="z-10 ml-2 mb-5 w-full">
        <div className="w-full pb-0 mb-0">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full pt-7 pb-0 mb-0 rounded-t-lg">
            <div className="">
              <div className="mb-12">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo-rect.svg"
                    alt="logo"
                    className="w-full"
                    width={462}
                    height={138}
                  />
                </Link>
              </div>
            </div>
            <div className="text-black">
              <h2 className="text-xl font-bold text-black mb-5 text-center">
                Contact
              </h2>
              <h3 className="text-base bold text-center">EMAIL</h3>
              <p className="text-center pb-5"><strong>savethegroveagain@gmail.com</strong></p>
              <h3 className="text-base bold text-center">WEBSITE</h3>
              <p className="text-center font-bold pb-7 ">www.savethegroveagain.com</p>
            </div>
            <div className="mr-10 pr-10 text-black">
              <div className="mb-0">
                  <h2 className="text-xl font-bold text-black mb-5 text-center">
                    Links
                  </h2>
                  <ul>
                    <li className="pb-5 text-base text-center">
                      <Link
                        href="/blog"
                        className="text-base text-center duration-300 hover:text-primary">
                        News
                      </Link>
                    </li>
                    <li className="pb-5 text-base text-center">
                      <Link
                        href="/donations"
                        className="text-base duration-300 hover:text-primary">
                        Donations
                      </Link>
                    </li>
                    <li className="pb-5 text-base text-center">
                      <Link
                        href="/about"
                        className="text-base duration-300 hover:text-primary">
                        About
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="float-left pb-5 pt-o mt-0 w-full rounded-b-lg">
            <p className="text-center text-base text-body-color">
              Copyright @ 2024 Save the Grove, Again
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
