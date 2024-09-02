"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 max-w-80% p-0 pl-20 m-0 mx-auto">
        <div className="container m-0 p-0 object-center">
           
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <iframe width="897" height="506" src="https://www.youtube.com/embed/tEgtT1LX-Sk" title="Save the Grove Again"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>


    </section>
  );
};

export default Video;
