import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calorie Photo Batch Tracker – Bulk Analyze Meal Photos",
  description: "Upload multiple meal photos at once. AI identifies foods and portions, then automatically logs calories to MyFitnessPal or Cronometer."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="12e3b2f6-3aaa-4631-b0e8-b330c6f425fe"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
