import SculpturesProvider from "../../../Context/sculptures-context";
import SculptureCards from "../../parts/SculpturesCards/sculpturesCards";

const Sculpture = () => {
  return (
    <div>
      <SculpturesProvider>
      <h1>Sculpture</h1>
     <SculptureCards />
      </SculpturesProvider>
    </div>
  );
};

export default Sculpture;
