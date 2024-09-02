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

                    <div className="p-7 content-center h-full">
                        <p className="ml-5 text-[#165D8F] text-justify text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl 1xl:text-4xl">
                        The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
                        </p>
                        <div className="flex w-full mt-5 items-center justify-center justify-items-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 1xl:text-1xl">
                            <form action="https://forms.gle/Dbw6qFcWi66gW7CA8">
                                <button className="p-2 m-2 bg-sky-200 rounded-lg hover:bg-white text-black shadow-md">Mailing List</button>
                            </form>
                            <div className="p-2 m-2  bg-sky-200 rounded-lg hover:bg-white text-black shadow-md">
                                <Link href="/donations"><button>Donations</button></Link>    
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg p-5 m-5 mr-20 pr-20 w-full h-auto">
                        <Image src="/images/map.svg" alt="map" loading="eager" priority width={1301} height={1148} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Answer;
