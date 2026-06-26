import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollOverlaySections from "./components/ScrollOverlaySections";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-white">
      <Navbar />

      <main className="relative">
        <div className="sticky top-0 z-0 min-h-screen overflow-hidden">
          <Hero />
        </div>
        <ScrollOverlaySections />
      </main>
    </div>
  );
}
