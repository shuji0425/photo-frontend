import { ReactNode } from "react";

export default function PhotoCardFrame({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 p-1">
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
        {children}
      </div>
    </div>
  );
}
