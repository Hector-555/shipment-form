import React, { useState } from "react";
import "./App.css";
import SendingForm from "./components/SendingForm/SendingForm";
import PackagesList from "./components/PackagesList/PackagesList";

function App() {
  const [packList, setPackList] = useState([]);

  const addUserHandler = (
    senderName,
    senderPhone,
    senderAddress,

    addresseeName,
    addresseePhone,
    addresseeAddress,

    length,
    width,
    height,
    weight,

    insurance,
    typeOfSend
  ) => {
    setPackList((prevPackList) => [
      ...prevPackList,
      {
        senderName,
        senderPhone,
        senderAddress,

        addresseeName,
        addresseePhone,
        addresseeAddress,

        length,
        width,
        height,
        weight,
        insurance,
        typeOfSend,

        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <>
      <SendingForm onSendingForm={addUserHandler} />
      <PackagesList packList={packList} />
    </>
  );
}

export default App;
