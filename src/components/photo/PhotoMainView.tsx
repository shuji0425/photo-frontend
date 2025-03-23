"use client";

import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import type { Photo } from "@/types/photo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      setDirection("right");
      onNext();
    },
    onSwipedRight: () => {
      setDirection("left");
      onPrev();
    },
    trackTouch: true,
    touchEventOptions: { passive: false },
  });

  const variants = {
    enter: (dir: string) => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === "left" ? -300 : 300,
      opacity: 0,
    }),
  };

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
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
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
