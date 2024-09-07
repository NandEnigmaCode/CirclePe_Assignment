import React from "react";
import "./globals.css";
import {League_Spartan} from "next/font/google";

export const LeagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "Assignment by Nand Kishore Singh(21SCSE1010507)",
  description: "Assignment_Complex_UI DESIGN",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${LeagueSpartan.className}`}
      >
        {children}
      </body>
    </html>
  );
}
