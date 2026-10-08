import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imane Oujja | AI & Data Science @ EPFL",
  description:
    "Imane Oujja: MSc Computer Science (AI & Data Science) student at EPFL, former Software Engineer Intern at JPMorgan Chase building multi-agent LLM systems.",
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
