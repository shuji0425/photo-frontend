import type { Photo } from "@/types/photo";
import PhotoCardFrame from "./PhotoCardFrame";

export default function PhotoFlipBack({ photo }: { photo: Photo }) {
  const ratio = photo.width / photo.height;

  return (
    <div className="absolute inset-0 backface-hidden rotate-y-180">
      <PhotoCardFrame>
        {/* 同じサイズの上に重ねる */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: "100%", height: "100%" }}>
            {/* 画像が object-contain で描画されるサイズを再現 */}
            <div
              className="absolute left-0 top-0 right-0 bottom-0 m-auto p-1"
              style={{
                aspectRatio: ratio,
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
              }}
            >
              <div className="w-full h-full flex flex-col justify-center items-center text-xs text-center bg-amber-50/95 backdrop-blur-md shadow-inner text-gray-800 p-4">
                {photo.title && (
                  <h2 className="text-lg font-semibold tracking-wide mb-1">
                    {photo.title}
                  </h2>
                )}
                {/* {photo.location && (
                <p className="text-xs mb-1 text-gray-600">📍 {photo.location}</p>
              )}
              {photo.date && (
                <p className="text-xs mb-2 text-gray-600">📅 {photo.date}</p>
              )}
              {photo.description && (
                <p className="text-sm mb-3 leading-relaxed">{photo.description}</p>
              )} */}
                <a
                  href={`#/photo/${photo.id}`}
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  詳細を見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </PhotoCardFrame>
    </div>
  );
}
