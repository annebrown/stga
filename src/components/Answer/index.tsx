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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">

                    <div className="ml-3 content-center h-full">
                        <p className="text-[#165D8F] text-justify text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl 1xl:text-4xl">
                        The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
                        </p>
                        <div className="p-5 mt-10 bg-[#38AF34] rounded-lg hover:bg-sky-200 hover:text-black text-white text-3xl font-extrabold w-fit shadow-md mx-auto">
                            <Link href="/action"  className="h-full">
                                <button  className="h-full">Get Involved!</button>
                            </Link>    
                        </div>
                      

                    </div>
                    <div className="h-full rounded-lg p-5 m-5 w-full">
                        <Image src="/images/map.svg" alt="map" loading="eager" priority width={1301} height={1148} />
                    </div>

                </div>
            </section>
        </>
    );
};

export default Answer;
