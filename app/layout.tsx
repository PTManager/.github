import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PTManager — 소규모 매장 근무 관리",
  description: "대타, 근태, 스케줄, 인수인계를 직원과 사장이 하나의 흐름으로 관리합니다."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
