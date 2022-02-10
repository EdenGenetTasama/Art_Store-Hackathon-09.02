import React, { useEffect , useState } from "react";
import { getAllSculptures } from "../Services/Sculptures/sculptures-services";

export let sculpturesContext = React.createContext();

export default function SculpturesProvider ({children}) {
    let [sculpturesData , setSculpturesData] = useState([]);
    useEffect(() => {
        getAllSculptures()
        .then(res => setSculpturesData(res));
    } , [])
    return (
        <sculpturesContext.Provider value={{sculpturesData , setSculpturesData}}>
          {children}
        </sculpturesContext.Provider>
    )
}