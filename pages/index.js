import FoodSection from "../components/home/FoodSection";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <FoodSection />
    </div>
  );
}
