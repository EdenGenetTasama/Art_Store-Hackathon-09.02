import React, { useEffect , useState } from "react";
import { getAllPaintings } from "../Services/Painting/painting-services";

export let paintingContext = React.createContext();

export default function PaintingsProvider ({children}) {
    let [paintingsData , setpaintingsData] = useState([]);
    useEffect(() => {
        getAllPaintings()
        .then(res => setpaintingsData(res));
    } , [])
    return (
        <paintingContext.Provider value={{paintingsData , setpaintingsData}}>
          {children}
        </paintingContext.Provider>
    )
}