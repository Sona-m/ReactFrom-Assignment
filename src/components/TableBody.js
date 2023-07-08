import React from "react";
import YearDropdown from "./YearDropdown";
import { Form } from "react-bootstrap";

const TableBody = ({ about, data, setData, examKey }) => {
  const handleBoardChange = (event) => {
    const board = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [examKey]: {
        ...prevData[examKey],
        board: board,
      },
    }));
  };

  const handleMarksChange = (event) => {
    const marks = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [examKey]: {
        ...prevData[examKey],
        marks: marks,
      },
    }));
  };

  const handleSelectChange = (event) => {
    const year = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [examKey]: {
        ...prevData[examKey],
        year: year,
      },
    }));
  };

  return (
    <tr>
      <td>{about}</td>
      <td>
        <YearDropdown onChange={handleSelectChange} />
      </td>
      <td>
        <Form.Control
          type="text"
          placeholder="Board/University"
          value={data.board || ""}
          onChange={handleBoardChange}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          placeholder="Percentage of Marks"
          value={data?.marks || ""}
          onChange={handleMarksChange}
        />
      </td>
    </tr>
  );
};

export default TableBody;
