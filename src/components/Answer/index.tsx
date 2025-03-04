// /src/components/Answer/index.tsx
import React from "react";
import {Tooltip} from "@nextui-org/tooltip";
import Link from "next/link";
import Image from 'next/image';
import "../../styles/global.css";
import styles from "@/styles/home.module.css";

const Answer = () => {
    return (
        <>
            <section id="answer" className="realtive z-30 mt-5 p-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-center">

                    <div className="ml-3 content-center h-full">
                        <p className="text-[#165D8F] text-justify text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl 1xl:text-4xl">
                        The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
                        </p>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full mt-10 justify-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 1xl:text-1xl self-center text-center">

                            <div className="w-full h-full p-5 bg-[#38AF34] rounded-lg hover:bg-sky-200 hover:text-black text-white shadow-md">
                                <form action="https://forms.gle/Dbw6qFcWi66gW7CA8" className=" h-full">
                                    <button className=" h-full">Subscribe</button>
                                </form>
                            </div>
            
                            <div className="w-full h-full p-5 bg-[#38AF34] rounded-lg hover:bg-sky-200 hover:text-black text-white shadow-md">
                                <div className="h-full">
                                    <Link href="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120" className="h-full">
                                        <button className=" h-full">Sign the Petition</button>
                                    </Link>    
                                </div>
                            </div>
                            <div className="width-full h-full p-5 bg-[#38AF34] rounded-lg hover:bg-sky-200 hover:text-black text-white shadow-md">
                                <Link href="/donations"  className="h-full">
                                    <button  className="h-full">Donate Today!</button>
                                </Link>    
                            </div>
                        </div>
                      

                    </div>
                    <div className="h-full rounded-lg p-5 m-5 w-full">
                        <Image src="/images/answer/map.svg" alt="map" loading="eager" priority width={1301} height={1148} />
                    </div>

                </div>
            </section>
        </>
    );
};

export default Answer;
