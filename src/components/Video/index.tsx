"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 w-full p-0 pl-20 m-0 mx-auto">
        <div className="w-full container m-0 p-0 object-center ">
            <h2 className="text-4xl p-5 text-center">
                What&apos;s at Stake
            </h2>

            <div className="rounded-md w-full">
                <iframe width="897" height="506" src="https://www.youtube.com/embed/tEgtT1LX-Sk"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="size-full aspect-video" allowFullScreen></iframe>
            </div>
            </div>

    </section>
  );
};

export default Video;
