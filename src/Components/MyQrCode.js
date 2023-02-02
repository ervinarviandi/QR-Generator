import React from "react";
import { useState } from "react";
import InputColor from "./InputColor";
import { saveAs } from "file-saver";
import { QRCodeCanvas } from "qrcode.react";

// import { inputContext } from "../App";

const QrCode = () => {
  const [text, setText] = useState("");
  const [color, setcolor] = useState("");
  // const color = document.querySelector(".color");
  // const colorInput = document.querySelector(".color-input");

  // colorInput.addEventListener("input", () => {
  //   color.getElementsByClassName.backgroundColor = colorInput.value;
  // });

  const downloadImage = () => {
    // saveAs("qrCode.png");
    var canvas = document.getElementById("myQrCode");
    canvas.toBlob(function (blob) {
      saveAs(blob, "QrCode.png");
    });
  };

  // function GenerateQR() {
  //   setText();
  // }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap lg:max-w-4xl mx-auto px-4 mt-20">
      <div className="w-full flex flex-col items-center gap-4 lg:items-start">
        <div>
          {/* <QRCodeCanvas id="myQrCode" value={text} className="canvas border-8 border-white cursor-pointer " size={265} style={{ bgColor: "#a3e635", fgColor: " #FFFFFF", padding: "18 auto" }} /> */}
          <img src="https://www.qrcode-tiger.com/static/img/Api/qr_example_1.png" className="w-48" alt="qrCode" />
          <button onClick={downloadImage} className="mt-5 px-20 mx-auto py-3 bg-yellow-500 text-white rounded-lg font-poppins font-bold">
            Download QR
          </button>
        </div>
        <p class="w-60 break-words bg-white text-center text-darkpurple-300"></p>
        <div className="input"></div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 lg:items-end">
        <div id="qr-code-wrapper">
          <p class="w-60 break-words text-white font-poppins mb-4">input Url </p>
          <div className="input">
            <input
              className="font-poppins text-base py-3 px-2 w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500 "
              placeholder="Enter your text here"
              size={25}
              type="text"
              value={text}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <p class="w-60 break-words text-white font-poppins mb-4 mt-8">Input Color</p>
          <div className="input mt-4">
            <input
              value={color}
              onChange={(e) => setcolor(e.target.value)}
              className="font-poppins text-base py-3 px-2 w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500"
              placeholder="select color"
              type="text"
              size={25}
            />
          </div>
          <button onClick="changeColor()" className="text-white font-poppins px-4 py-2 bg-pink-400 mt-4 rounded-lg">
            Change Color
          </button>
          <div className="input mt-4">
            <InputColor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
