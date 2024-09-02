"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 pr-10 pl-1.5 pb-0 mb-0 w-full object-center">
        <div className="container mx-auto rounded-lg">
            <iframe width="1193" height="671" src="https://www.youtube.com/embed/tEgtT1LX-Sk" title="Save the Grove Again"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
    </section>
  );
};

export default Video;
