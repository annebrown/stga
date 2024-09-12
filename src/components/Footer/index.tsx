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
                                alt="Logo - Trees and water inside a circle, with text: Save the Grove Again"
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

                                <a
                                    href="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/"
                                    aria-label="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-6 text-black duration-300 hover:text-primary"
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
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
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
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
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
                                    href="/action"
                                    className="text-base duration-300 hover:text-primary">
                                    Get Involved!
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
