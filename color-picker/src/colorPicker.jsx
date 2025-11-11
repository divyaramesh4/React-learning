import { useState } from "react";

export default function ColourPicker() {
  const [colour, setColour] = useState("#FFFFFF");

  function handleColourChange(event) {
    setColour(event.target.value);
  }

  return (
    <>
      <div className="colour-picker-container">
        <h1>Colour Picker</h1>
        <div
          className="colour-display"
        >
          <p style={{ color: "#2e36a9ff" }}>Selected Colour: {colour}</p>
        </div>
        <label htmlFor="colorInput">Select a colour: </label>
        <input
        className="color-picker"
          type="color"
          value={colour}
          onChange={handleColourChange}          
        />
        <p>colour:{colour}</p>
      </div>
    </>
  );
}
