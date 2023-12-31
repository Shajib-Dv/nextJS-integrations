/** @format */

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import ThemeContext from "@/context/theme/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First next.js app",
  description: "Generated by Shajib Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext>
          <Navbar />
          <div className="min-h-[calc(100vh-150px)]">{children}</div>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
