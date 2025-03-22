"use client";

import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import type { Photo } from "@/types/photo";

type Props = {
  photo: Photo;
  onPrev: () => void;
  onNext: () => void;
};

// 写真を表示しスライドさせられる
export default function PhotoMainView({ photo, onPrev, onNext }: Props) {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
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
      <Image
        src={photo.url}
        alt={photo.title ?? ""}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
}
