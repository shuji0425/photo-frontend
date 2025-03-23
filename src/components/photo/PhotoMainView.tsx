"use client";

import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import type { Photo } from "@/types/photo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  photoSlideVariants,
  photoSlideTransition,
} from "@/animations/photoSlide";
import PhotoFlipBack from "./PhotoFlipBack";
import PhotoCardFrame from "./PhotoCardFrame";

type Props = {
  photo: Photo;
  onPrev: () => void;
  onNext: () => void;
};

// 写真を表示しスライドさせられる
export default function PhotoMainView({ photo, onPrev, onNext }: Props) {
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [flipped, setFlipped] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection("left");
      setFlipped(false);
      onNext();
    },
    onSwipedRight: () => {
      setDirection("right");
      setFlipped(false);
      onPrev();
    },
    trackTouch: true,
    touchEventOptions: { passive: false },
  });

  const handleDoubleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      {...handlers}
      className="relative w-full aspect-[2/3] bg-gray-100 overflow-hidden select-none shadow-lg perspective"
      style={{
        touchAction: "pan-y",
      }}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={photo.id}
          variants={photoSlideVariants}
          custom={direction}
          initial={hasMounted ? "enter" : false}
          animate="center"
          exit="exit"
          transition={photoSlideTransition}
          className="absolute inset-0"
        >
          {/* フリップ用ラッパー */}
          <div
            onDoubleClick={handleDoubleClick}
            className="absolute inset-0 transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${flipped ? 180 : 0}deg)`,
            }}
          >
            {/* 表面: 写真 */}
            <div className="backface-hidden">
              <PhotoCardFrame>
                <Image
                  src={photo.url}
                  alt={photo.title ?? ""}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </PhotoCardFrame>
            </div>

            {/* 裏面: 説明 */}
            <PhotoFlipBack photo={photo} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
