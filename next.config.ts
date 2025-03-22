import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // 外部URLから画像を取得する場合は追加必須（minioも）
    domains: ["fakeimg.pl"],
  },
};

export default nextConfig;
