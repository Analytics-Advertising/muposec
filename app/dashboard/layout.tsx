import type { Metadata } from "next";
import "../globals.css";
import NavBar from "../(website)/components/NavBar";
import Footer from "../(website)/components/Footer";


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
      <p>From Dashboard</p>

          <main className="relative overflow-hidden">
            {children}  
          </main>
        </body>
    </html>
  );
}
