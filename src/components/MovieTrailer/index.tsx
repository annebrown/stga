"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="z-10 w-full p-0 m-0 mx-auto">
        <div className="w-full container m-0 p-0 mx-auto">

            <div className="rounded-md w-full mx-auto">

            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/185080510?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Call of the Forest - Official Trailer"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </div>

    </section>
  );
};

export default Video;
