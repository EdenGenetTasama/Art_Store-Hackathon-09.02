import React, { useEffect } from "react";
import { useState } from "react";
import { getAllDrawing } from "../Services/Drawing/drawing-services";

export let drawingContext = React.createContext();

export default function drawingProvider ({children}) {
    let [drawingData , setDrawingData ] = useState([]);
    useEffect(() => {
        getAllDrawing()
        .then(res => setDrawingData(res));
    } , [])
    return (
        <drawingContext.Provider value={{drawingData , setDrawingData}}>
          {children}
        </drawingContext.Provider>
    )
}