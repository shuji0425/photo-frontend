import type { Photo } from "@/types/photo";

type Props = {
  photo: Photo;
};

// 説明表示
export default function PhotoDetails({ photo }: Props) {
  return (
    <div className="px-1 space-y-1 text-sm text-gray-800">
      {photo.title && (
        <h2 className="text-base font-semibold">{photo.title}</h2>
      )}
      <p className="text-gray-600">写真の説明はここに入ります。</p>
      {/* 撮影位置追加できる */}
    </div>
  );
}
