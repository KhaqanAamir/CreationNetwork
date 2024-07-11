import React, { useState, useContext } from "react";
import GetCopyWritingContext from "./GetCopyWritingContext";
import axios from 'axios'
import { AuthContext } from "../../AuthContext";

const GetCopyWritingState = (props) => {
  const {token}=useContext(AuthContext)
  const [saveddata, setsaveddata] = useState([]);
  const [clickedmessage, setclickedmessage] = useState([]);

  //get student data
  const getsaveddata=async()=>{
    await axios
    .get(
      "https://web-production-73c6.up.railway.app/copywriting/get_saved_data",
      {
        headers: {
          Authorization:
          `${token}`,
        },
      }
    )
    .then((response) => {
      setsaveddata(response.data.saved_data);
    });
  }

  return (
    <GetCopyWritingContext.Provider
      value={{ getsaveddata, saveddata, clickedmessage, setclickedmessage}}
    >
      {props.children}
    </GetCopyWritingContext.Provider>
  );
};

export default GetCopyWritingState;
