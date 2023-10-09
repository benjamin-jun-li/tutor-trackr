import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ApolloProviders } from "@/components/ApolloProviders";
import ContextProvider from "@/components/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutor Management Platform",
  description: "A tutor management platform developed by UNSW IT students for COMP9900",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProviders>
          <ContextProvider>
            <Navbar />
            {children}
            <Footer />
          </ContextProvider>
        </ApolloProviders>
      </body>
    </html>
  );
}
