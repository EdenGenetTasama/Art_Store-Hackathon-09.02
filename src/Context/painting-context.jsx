import React, { useEffect } from "react";
import { useState } from "react";
import { getAllPaintings } from "../Services/Painting/painting-services";

export let paintingContext = React.createContext();

export default function paintingsProvider ({children}) {
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