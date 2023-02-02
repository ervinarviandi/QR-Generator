import React, { useState } from "react";
import { ChromePicker } from "react-color";
// import { inputContext } from "../App";

const InputColor = () => {
  const [color, setColor] = useState("#34d399");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = (color) => setColor(color.hex);

  return (
    <div>
      <label className="font-semibold text-white font-poppins">Color</label>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          className="w-10 h-8 cursor-pointer border-4
        "
          style={{ background: color }}
        ></div>
        <span>{color}</span>
      </div>
      {displayColorPicker && (
        <div className="absolute mt-2">
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
