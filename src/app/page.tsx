import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Project from "./components/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
}
