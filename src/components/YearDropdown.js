import React from "react";
import Form from "react-bootstrap/Form";

const YearDropdown = ({ onChange }) => {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) => index + year - 49);
  // 0 - 0+2023-49 = 1974
  // 49 - 49+2023-49 = 2023
  //1974-2023

  return (
    <Form.Select onChange={onChange}>
      <option>--select--</option>
      {years.map((val, index) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </Form.Select>
  );
};

export default YearDropdown;
