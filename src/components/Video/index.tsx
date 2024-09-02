"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 w-full h-auto rounded-lg">
        <div className="container mx-auto  w-full 1xs:w-screen sm:w-screen md:w-screen h-auto">
            <iframe width="80vh" height="auto" src="https://www.youtube.com/embed/tEgtT1LX-Sk" title="Save the Grove Again"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </section>
  );
};

export default Video;
