import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden text-base leading-base text-gray-600 bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
