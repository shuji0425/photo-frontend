"use client";

import { useState } from "react";
import type { Photo } from "@/types/photo";
import PhotoMainView from "./PhotoMainView";
import PhotoDetails from "./PhotoDetails";
import PhotoThumbnailList from "./PhotoThumbnailList";

type Props = {
  photos: Photo[];
};

export default function PhotoViewer({ photos }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPhoto = photos[currentIndex];

  return (
    <div className="space-y-4">
      {/* メイン画像スライド表示 */}
      <PhotoMainView
        photo={currentPhoto}
        onPrev={() =>
          setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
        }
        onNext={() => setCurrentIndex((prev) => (prev + 1) % photos.length)}
      />

      {/* 詳細情報 */}
      <PhotoDetails photo={currentPhoto} />

      {/* サムネイル一覧 */}
      <PhotoThumbnailList
        photos={photos}
        currentIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}
