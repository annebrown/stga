"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <footer className="relative z-10 w-full b-0 m-0">

                <div className="flex flex-row m-0 p-0 pt-0">
                   
                    <div className="shrink p-0 m-0">

                        <Link href="/" className="inline-block m-0 p-0 pl-2w-40 h-5 align-top">
                            <Image
                                src="/images/logo/logo-rect.svg"
                                alt="Logo - Trees and water inside a circle, with text: Save the Grove Again"
                                className="m-0 p-0"
                                width="230" height="68"
                            />
                        </Link>

                        <p className="m-0 p-0 pt-2 pl-1 text-xs text-black text-center align-top">
                            Arnprior, ON
                        </p>

                    </div>




                    <div className="inline-block mx-auto text-black items-center m-0 p-0">
                        <p className="text-center text-sm m-0 p-0"><strong>
                            Contacts
                        </strong></p>

                        <p className="text-center m-0 -mt-1 p-0 text-wrap">
                            <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34] hover:text-primary text-xs">
                                    savethegroveagain@gmail.com
                            </a>
                        </p>

                        <p className="flex w-full mx-auto text-center mb-0pb-0 h-3">
                            <span className="flex mx-auto">

                                <a
                                    href="https://www.youtube.com/embed/tEgtT1LX-Sk"
                                    aria-label="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="duration-300 hover:text-primary text-[#38AF34]"
                                >
                                    <svg
                                        width="18"
                                        height="14"
                                        viewBox="0 0 18 14"
                                        className="fill-current inline-block mt-0 pt-1 align-top"
                                        >
                                        <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                                    </svg>
                                </a>
                                &nbsp;&nbsp;
                                <a
                                    href="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/"
                                    aria-label="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="duration-300 hover:text-primary text-[#38AF34] align-middle"
                                >
                                    <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                                        fill="currentColor"
                                    />
                                    </svg>
                                </a>
                            </span>
                        </p>

                    </div>



                    <div className="flex-none text-black w-fit h-auto">
                        <div className="container mb-0  text-right">
                            <h2 className="text-sm font-bold text-black mb-0 pb-0">
                            Menu
                            </h2>
                            <ul>
                                <li className="mb-0 pb-0 text-xs">
                                <Link
                                    href="/blog"
                                    className="text-xs text-center duration-300 hover:text-primary text-[#38AF34]">
                                    Blog
                                </Link>
                                </li>
                                <li className="pb-0 text-xs">
                                <Link
                                    href="/action"
                                    className="text-xs duration-300 hover:text-primary text-[#38AF34]">
                                    Get Involved!
                                </Link>
                                </li>
                                <li className="pl-0 text-xs pb-0">
                                <Link
                                    href="/about"
                                    className="text-xs duration-300 hover:text-primary text-[#38AF34]">
                                    About
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="ml-12 pb-5 pt-0  w-full rounded-b-lg">
                    <p className="text-center text-xs text-black">
                        Copyright @ 2024 Save the Grove Again
                    </p>
                </div>

        </footer>
    </>
  );
};

export default Footer;
