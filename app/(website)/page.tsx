import HeroSection from "@/app/(website)/components/Hero";
import Services from "@/app/(website)/components/Services";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
    <HeroSection />
    <Services />
    </RootLayout>
    
  );
}
