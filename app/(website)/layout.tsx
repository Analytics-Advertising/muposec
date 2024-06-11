import type { Metadata } from "next";
import "../globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CTASection from "./components/CTA";


export const metadata: Metadata = {
  title: "Mupo Security & Training",
  description: "Where Your Safety Matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
          <main className="relative overflow-hidden">
            {children}  
          </main>
          <CTASection/>
        <Footer/>
        </body>
    </html>
  );
}
