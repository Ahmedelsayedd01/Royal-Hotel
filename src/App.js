import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Rooms from "./Components/Rooms";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer";
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
