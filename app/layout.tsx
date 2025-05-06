import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Topic Search",
  description: "A simple topic search UI built by Mohammad Hashim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen px-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4 text-xs mt-10">
          © 2025 Mohammad Hashim - Basic Topic Search
        </footer>
      </body>
    </html>
  );
}
