import Catalog from "./Catalog/Catalog";
import Slider from "./Slider/Slider";


const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Catalog />
    </div>
  );
}
 
export default Home;