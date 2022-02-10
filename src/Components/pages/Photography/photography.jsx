import PhotosProvider from "../../../Context/photography-context";
import PhotographyCards from "../../parts/PhotographyCards/photographyCards";

const Photography = () => {
  return (
    <div>
      <PhotosProvider>
        <h1>Photography</h1>
        <PhotographyCards/>
      </PhotosProvider>
    </div>
  );
};

export default Photography;
