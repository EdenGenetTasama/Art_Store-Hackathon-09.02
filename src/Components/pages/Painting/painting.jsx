import PaintingsProvider from "../../../Context/painting-context";
import PaintingCards from "../../parts/PaintingCards/paintingCards";


const Painting = () => {
  return (
    <div>
      <PaintingsProvider>
        <h1>shimon</h1>
      <PaintingCards/>
      </PaintingsProvider>
    </div>
  );
};

export default Painting;
