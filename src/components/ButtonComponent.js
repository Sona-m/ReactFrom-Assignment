import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ text, onClick, disabled }) => {
  return (
    <Button
      className="next-btn"
      variant="success"
      size="lg"
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
