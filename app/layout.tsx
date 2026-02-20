import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imane Oujja | EPFL Computer Science Student",
  description: "Master's student in Computer Science specialized in AI & Data Science at EPFL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
