import DrawingProvider from "../../../Context/drawing-context";
import DrawingCards from "../../parts/DrawingCards/drawingCards";



const Drawing = () => {
  return (
    <div>
      <DrawingProvider>
      <h1 className="headerCards">Drawing</h1>
      <DrawingCards/>
      </DrawingProvider>
    </div>
  );
};

export default Drawing;
