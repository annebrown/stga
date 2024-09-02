"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 pr-10 ml-1.5 w-full h-auto">
        <iframe 
            src="https://www.youtube.com/embed/tEgtT1LX-Sk" 
            title="Save the Grove Again" 
            frameborder="0" 
            allow="accelerometer"
            autoplay clipboard-write encrypted-media gyroscope 
            picture-in-picture web-share center
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            className="w-full h-auto aspect-video m-5 mr-10 rounded-lg" />

    </section>
  );
};

export default Video;
