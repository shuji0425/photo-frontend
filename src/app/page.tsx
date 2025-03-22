"use client";

import { useState } from "react";
import CategoryTagList from "@/components/category/CategoryTagList";
import { mockPhotos } from "@/data/photo";
import { Photo } from "@/types/photo";
import PhotoList from "@/components/photo/PhotoList";

const availableTags = [
  "Portrait",
  "Street",
  "Nature",
  "Architecture",
  "Portrait2",
  "Street2",
  "Nature2",
  "Architecture2",
];

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState("Portrait");
  const filteredPhotos: Photo[] = mockPhotos.filter((photo) =>
    photo.tags.includes(selectedTag)
  );

  return (
    <div className="p-4 w-full max-w-md">
      {/* カテゴリータグ */}
      <CategoryTagList
        tags={availableTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />

      {/* 今後のパーツ */}
      <div className="mt-4">
        <h1 className="text-xl font-bold">#{selectedTag}</h1>
        <PhotoList photos={filteredPhotos} />
      </div>
    </div>
  );
}
