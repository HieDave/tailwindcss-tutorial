import HeroSection from "./components/HeroSection";
import ShopList from "./components/ShopList";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <div> 
      <HeroSection />
      <div className="flex">
        <Sidebar />
        <ShopList />
      </div>
    </div>
  );
}

export default App;
