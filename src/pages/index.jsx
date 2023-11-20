import Chooseus from "@/components/Chooseus";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import Market from "@/components/Market";

export default function Home() {
  return (
    <main>
      <Hero />
      <Market />
      <Chooseus />
      <Join />
      <Footer />
    </main>
  );
}
