import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollOverlaySections from "./components/ScrollOverlaySections";

export default function App() {
  return (
    <main className="relative bg-[#001f1f] text-white">
      <Navbar />
      <Hero />
      <ScrollOverlaySections />
      
      
    </main>
  );
}