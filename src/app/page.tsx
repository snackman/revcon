import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Topics from "@/components/topics";
import Speakers from "@/components/speakers";
import Venue from "@/components/venue";
import Signup from "@/components/signup";
import Sponsors from "@/components/sponsors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Topics />
      <Speakers />
      <Venue />
      <Signup />
      <Sponsors />
      <Footer />
    </>
  );
}
