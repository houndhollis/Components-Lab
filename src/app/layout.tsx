import type { Metadata } from "next";
import "./globals.scss";
import Gnb from "./gnb";

export const metadata: Metadata = {
  title: "UI 요소모음",
  description: "Vanilla / React",
};

export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Gnb/>
        <main>{children}</main>
      </body>
    </html>
  );
}
