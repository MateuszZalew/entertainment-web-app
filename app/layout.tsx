import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import SearchInput from "./components/SearchInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-blue min-h-screen`}>
        <div className="flex flex-col lg:flex-row lg:gap-9">
          <Nav />
          <div className="grow">
            <SearchInput />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
