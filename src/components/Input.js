import { useState } from "react";
import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const Input = ({ type, label, onChange }) => {
  return (
    <FormGroup className="mb-4">
      <FormLabel>{label}</FormLabel>
      <FormControl type={type} onChange={onChange} />
    </FormGroup>
  );
};

export default Input;
