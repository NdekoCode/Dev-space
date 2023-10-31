import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import LayoutContainer from "./components/LayoutContainer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev World App",
  description: "Everything a dev wants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LayoutContainer>
        <body className={`${inter.className}`}>
          <Header />
          <main className="container  max-w-7xl w-full mx-auto mt-10 px-4 lg:px-0">
            {children}
          </main>
        </body>
      </LayoutContainer>
    </html>
  );
}
