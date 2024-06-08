import { Slider } from "@mui/material";
import React from "react";
import { Button } from "reactstrap";

function valuetext(value) {
  return `${value}đ`;
}

const SlideMoney = () => {
  const [value, setValue] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOk = () => {
    console.log(value);
  };
  return (
    <div>
      <Slider
        aria-label="Temperature"
        defaultValue={10}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
        onChange={handleChange}
      />
      <Button onClick={handleOk}>OK</Button>
    </div>
  );
};

export default SlideMoney;
