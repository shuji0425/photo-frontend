import Image from "next/image";
import type { Photo } from "@/types/photo";

type Props = {
  photo: Photo;
  onPrev: () => void;
  onNext: () => void;
};

// 写真を表示しスライドさせられる
export default function PhotoMainView({ photo, onPrev, onNext }: Props) {
  return (
    <div className="relative w-full aspect-[2/3] bg-gray-100 rounded-xl overflow-hidden">
      <Image
        src={photo.url}
        alt={photo.title ?? ""}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 400px"
      />

      {/* 左右の矢印 */}
      <button
        onClick={onPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-lg"
      >
        ◀︎
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-lg"
      >
        ▶︎
      </button>
    </div>
  );
}
