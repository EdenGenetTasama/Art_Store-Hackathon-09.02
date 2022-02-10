import React, { useContext } from "react";
import { sculpturesContext } from "../Context/sculptures-context";


const GetAllData = () => {
    let {sculpturesData} = useContext(sculpturesContext);
    console.log(sculpturesData);
  return (
      <></>
  )
};

export default GetAllData;
