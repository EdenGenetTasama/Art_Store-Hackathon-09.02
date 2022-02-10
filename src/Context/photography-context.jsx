import React, { useEffect , useState } from "react";
import { getAllPhotos } from "../Services/Photography/photography-services";

export let photosgContext = React.createContext();

export default function PhotosProvider ({children}) {
    let [photosData , setPhotosData] = useState([]);
    useEffect(() => {
        getAllPhotos()
        .then(res => setPhotosData(res));
    } , [])
    return (
        <photosgContext.Provider value={{photosData , setPhotosData}}>
          {children}
        </photosgContext.Provider>
    )
}