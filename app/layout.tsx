import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "엄찬우 | CV",
  description: "엄찬우의 경력, 기술, 연락처를 담은 웹 이력서입니다."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
