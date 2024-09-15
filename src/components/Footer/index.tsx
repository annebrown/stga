"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <footer className="relative z-10 w-full b-0 m-0">


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full m-0 p-0 pt-7">
                   
                    <div className="p-0 m-0">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo/logo-rect.svg"
                                alt="Logo - Trees and water inside a circle, with text: Save the Grove Again"
                                className="w-full m-0 p-0"
                                width={462} height={138}
                            />
                        </Link>
                        <p className="m-0 p-0 text-base text-black text-center">
                            Arnprior, ON
                        </p>
                    </div>

                    <div className="container mx-auto text-black items-center">
                        <p className="text-center text-xl pb-5"><strong>Contacts</strong></p>
                        <p className="text-center pb-5">
                            <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34] hover:text-primary">
                                    savethegroveagain@gmail.com
                            </a>
                        </p>
                        <p className="flex w-full mx-auto self-center text-center">
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
                                        className="fill-current"
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
                                    className="duration-300 hover:text-primary text-[#38AF34]"
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

                    <div className="text-black">
                        <div className="container mb-0  text-right">
                            <h2 className="text-xl font-bold text-black mb-5">
                            Menu
                            </h2>
                            <ul>
                                <li className="pb-3 text-base">
                                <Link
                                    href="/blog"
                                    className="text-base text-center duration-300 hover:text-primary text-[#38AF34]">
                                    Blog
                                </Link>
                                </li>
                                <li className="pb-3 text-base">
                                <Link
                                    href="/action"
                                    className="text-base duration-300 hover:text-primary text-[#38AF34]">
                                    Get Involved!
                                </Link>
                                </li>
                                <li className="pb-5 pl-50text-base">
                                <Link
                                    href="/about"
                                    className="text-base duration-300 hover:text-primary text-[#38AF34]">
                                    About
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="float-left pb-5 pt-o mt-0 w-full rounded-b-lg">
                    <p className="text-center text-base text-black">
                        Copyright @ 2024 Save the Grove Again
                    </p>
                </div>

        </footer>
    </>
  );
};

export default Footer;
