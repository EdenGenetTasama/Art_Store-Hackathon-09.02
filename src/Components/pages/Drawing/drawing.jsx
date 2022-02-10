import DrawingProvider from "../../../Context/drawing-context";
import DrawingCards from "../../parts/DrawingCards/drawingCards";



const Drawing = () => {
  return (
    <div>
      <DrawingProvider>
      <h1>Drawing</h1>
      <DrawingCards/>
      </DrawingProvider>
    </div>
  );
};

export default Drawing;
