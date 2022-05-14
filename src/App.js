import HeroSection from "./components/HeroSection";
import ShopList from "./components/ShopList";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <div className="App"> 
      <HeroSection />
      <div className="grid grid-cols-4">
        <Sidebar />
        <ShopList />
      </div>
    </div>
  );
}

export default App;
