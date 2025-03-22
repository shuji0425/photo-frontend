"use client";

import { useState } from "react";
import CategoryTagList from "@/components/category/CategoryTagList";

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
        <h1 className="text-xl font-bold mb-2">現在のタグ: #{selectedTag}</h1>
        <p className="text-sm text-gray-600">
          ここに「{selectedTag}」の写真一覧が表示される予定です。
        </p>
      </div>
    </div>
  );
}
