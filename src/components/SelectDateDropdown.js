import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SelectDateDropdown = ({
  label,
  selectedDate,
  handleDateChange,
}) => {
  return (
    <>
      <p>{label}</p>
      <DatePicker
        selected={selectedDate ? new Date(selectedDate) : null}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        className="form-control"
      />
    </>
  );
};
