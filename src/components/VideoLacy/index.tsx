"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 w-full p-0 m-0 mx-auto">
        <div className="w-full container m-0 p-0 object-center  mx-auto">

            <div className="rounded-md mx-auto">

                <iframe width="897" height="506" src="https://www.youtube.com/embed/CY2YkJNFaf0" title="A Call to the Community: Save the Grove Again Chair Lacey Smith speaks from the heart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                {/* <iframe 
                    width="897" height="506" 
                    src="https://www.youtube.com/embed/tEgtT1LX-Sk"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="size-full aspect-video" 
                    allowFullScreen>
                </iframe> */}
            </div>
        </div>

    </section>
  );
};

export default Video;
