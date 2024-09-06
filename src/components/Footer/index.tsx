"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <footer className="relative z-10 w-full">
            <div className="container w-full b-0 m-0">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full pt-7">

                   
                    <div className="p-0 m-0">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo-rect.svg"
                                alt="logo"
                                className="w-full m-0 p-0"
                                width={462}
                                height={138}
                            />
                        </Link>
                        <p className="m-0 p-0 text-base text-black text-center">
                            Arnprior, ON
                        </p>
                    </div>

                    <div className="container mx-auto text-black items-center">
                        <p className="text-center text-xl pb-5"><strong>Email</strong></p>
                        <p className="text-center pb-5"><strong>savethegroveagain@gmail.com</strong></p>
                        <p className="flex w-full mx-auto self-center text-center">
                            <span className="flex mx-auto">

                                <a
                                    href="https://www.youtube.com/embed/tEgtT1LX-Sk"
                                    aria-label="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-6 duration-300 hover:text-primary"
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
                            </span>
                        </p>
                    </div>

                    <div className="float-right mr-10 pr-10 text-black">
                        <div className="mb-0">
                            <h2 className="text-xl font-bold text-black mb-5 text-center">
                                Links
                            </h2>
                            <ul>
                                <li className="pb-5 text-base text-center">
                                <Link
                                    href="/blog"
                                    className="text-base text-center duration-300 hover:text-primary">
                                    Blog
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
                    <p className="text-center text-base text-black">
                        Copyright @ 2024 Save the Grove Again
                    </p>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
