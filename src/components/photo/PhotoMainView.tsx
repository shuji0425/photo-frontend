"use client";

import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import type { Photo } from "@/types/photo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  photoSlideVariants,
  photoSlideTransition,
} from "@/animations/photoSlide";

type Props = {
  photo: Photo;
  onPrev: () => void;
  onNext: () => void;
};

// 写真を表示しスライドさせられる
export default function PhotoMainView({ photo, onPrev, onNext }: Props) {
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection("left");
      onNext();
    },
    onSwipedRight: () => {
      setDirection("right");
      onPrev();
    },
    trackTouch: true,
    touchEventOptions: { passive: false },
  });

  return (
    <div
      {...handlers}
      className="relative w-full aspect-[2/3] bg-gray-100 rounded-xl overflow-hidden select-none"
      style={{
        touchAction: "pan-y",
      }}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={photo.id}
          variants={photoSlideVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={photoSlideTransition}
          className="absolute inset-0"
        >
          <Image
            src={photo.url}
            alt={photo.title ?? ""}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
