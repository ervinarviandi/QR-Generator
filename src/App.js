import React, { createContext, useState } from "react";
import "../src/App.css";
import Header from "./Components/Header";
import QRCode from "./Components/QRCode";
import Footer from "./Components/Footer";
// import MyQrCode from "./Components/MyQrCode";

// Create Context
export const inputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <section className="mx-auto w-full  lg:h-screen   bg-gradient-to-r from-blue-500 to-green-500 ">
      <inputContext.Provider value={value}>
        <Header />
        <QRCode />
        {/* <MyQrCode /> */}
        <Footer />
      </inputContext.Provider>
    </section>
  );
}

export default App;
