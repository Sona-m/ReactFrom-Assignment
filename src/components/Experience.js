import React, { useState } from "react";
import Input from "./Input";
import { SelectDateDropdown } from "./SelectDateDropdown";
import TextField from "@mui/material/TextField";
import ButtonComponent from "./ButtonComponent";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addExp } from "../redux/store";

import { validatePrvOrgDate } from "../utils/validation";
import { Link } from "react-router-dom";

const Experience = () => {
  const [exp, setExp] = useState({
    currentOrganization: {
      name: "",
      fromDate: null,
    },
    previousOrganization: {
      name: "",
      fromDate: null,
      toDate: null,
    },
    role: "",
    resume: null,
  });

  const dispatch = useDispatch();

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setExp((prevData) => ({ ...prevData, role: role }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0].name;
    setExp((prevData) => ({ ...prevData, resume: file }));
  };

  const handlePreview = () => {
    console.log("clicked");
    dispatch(addExp(exp));
  };

  const handleOrgNameChange = (event, organizationType) => {
    const orgName = event.target.value;
    setExp((prevData) => ({
      ...prevData,
      [organizationType]: {
        ...prevData[organizationType],
        name: orgName,
      },
    }));
  };

  const handleFromDateChange = (date, organizationType) => {
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setExp((prevData) => ({
      ...prevData,
      [organizationType]: {
        ...prevData[organizationType],
        fromDate: formattedDate,
      },
    }));
  };

  const handleToDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setExp((prevData) => ({
      ...prevData,
      previousOrganization: {
        ...prevData.previousOrganization,
        toDate: formattedDate,
      },
    }));
  };

  const isFormFilled = () => {
    const { currentOrganization, previousOrganization, role, resume } = exp;
    return (
      currentOrganization.name &&
      currentOrganization.fromDate &&
      previousOrganization.name &&
      previousOrganization.fromDate &&
      previousOrganization.toDate &&
      role &&
      resume
    );
  };

  return (
    <div className="form">
      <h1 className="form-heading">Work Experience</h1>
      <Input
        type="text"
        label="Current Organization"
        onChange={(event) => handleOrgNameChange(event, "currentOrganization")}
      />
      <SelectDateDropdown
        label="From date:"
        selectedDate={exp.currentOrganization.fromDate}
        handleDateChange={(date) =>
          handleFromDateChange(date, "currentOrganization")
        }
      />
      <br /> <br />
      <Input
        type="text"
        label="Previous Organization"
        onChange={(event) => handleOrgNameChange(event, "previousOrganization")}
      />
      <SelectDateDropdown
        label={
          validatePrvOrgDate(
            exp.currentOrganization.fromDate,
            exp.previousOrganization.fromDate
          )
            ? "From Date : your current org date and prv org date is same"
            : "From Date "
        }
        selectedDate={exp.previousOrganization.fromDate}
        handleDateChange={(date) =>
          handleFromDateChange(date, "previousOrganization")
        }
      />
      <br /> <br />
      <SelectDateDropdown
        label={
          validatePrvOrgDate(
            exp.previousOrganization.fromDate,
            exp.previousOrganization.toDate
          )
            ? "To Date : your From and To date are same"
            : "To Date"
        }
        selectedDate={exp.previousOrganization.toDate}
        handleDateChange={handleToDateChange}
      />
      <br /> <br />
      <TextField
        label="Role & Responsibilities"
        fullWidth
        color="success"
        focused
        onChange={handleRoleChange}
      />
      <div className="file">
        <Form.Label>Upload your resume</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </div>
      <Link to="/prev">
        <ButtonComponent
          text="Preview"
          onClick={handlePreview}
          disabled={!isFormFilled()}
        />
      </Link>
    </div>
  );
};

export default Experience;
