import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addInfo } from "../redux/store";
import {
  validateName,
  validateEmail,
  validatePhoneNo,
} from "../utils/validation";

function PersonalInfo() {
  const [isFormValid, setFormValid] = useState(false);

  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
  });

  const [errors, setErrors] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    phoneNoError: "",
  });

  const handleClick = () => {
    if (validateForm()) {
      dispatch(addInfo(info));
    }
  };

  const handleFNameChange = (event) => {
    const fname = event.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, fname: fname }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      fnameError: validateName({ name: fname }) ? "" : "Invalid First Name",
    }));
  };

  const handleLNameChange = (event) => {
    const lname = event.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, lname: lname }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      lnameError: validateName({ name: lname }) ? "" : "Invalid Last Name",
    }));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, email: email }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      emailError: validateEmail({ email }) ? "" : "Invalid Email",
    }));
  };

  const handleNumberChange = (event) => {
    const number = event.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, phoneNo: number }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneNoError: validatePhoneNo({ phoneNo: number })
        ? ""
        : "Invalid Phone no",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    if (!validateName({ name: info.fname })) {
      setErrors((prevInfo) => ({
        ...prevInfo,
        fnameError: "Invalid First Name",
      }));
      isValid = false;
    }
    if (!validateName({ name: info.lname })) {
      setErrors((prevInfo) => ({
        ...prevInfo,
        lnameError: "Invalid Last Name",
      }));
      isValid = false;
    }
    if (!validateEmail({ email: info.email })) {
      setErrors((prevInfo) => ({ ...prevInfo, emailError: "Invalid Email" }));
      isValid = false;
    }
    if (!validatePhoneNo({ phoneNo: info.phoneNo })) {
      setErrors((prevInfo) => ({
        ...prevInfo,
        phoneNoError: "Invalid Phone no",
      }));
      isValid = false;
    }
    {
      isValid && setFormValid(true);
    }
    return isValid;
  };

  return (
    <Container className="form">
      <p className="form-heading">Enter your details below.</p>
      <Row>
        <Col>
          <Input
            type="text"
            label="Your First Name*"
            value={info.fname}
            onChange={handleFNameChange}
          />
          {errors.fnameError && <p>{errors.fnameError}</p>}
        </Col>
        <Col>
          <Input
            type="text"
            label="Your Last Name*"
            value={info.lname}
            onChange={handleLNameChange}
          />
          {errors.lnameError && <p>{errors.lnameError}</p>}
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            type="email"
            label="Your Email*"
            value={info.email}
            onChange={handleEmailChange}
          />
          {errors.emailError && <p>{errors.emailError}</p>}
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            type="tel"
            label="Your Phone Number*"
            value={info.phoneNo}
            onChange={handleNumberChange}
          />
          {errors.phoneNoError && <p>{errors.phoneNoError}</p>}
        </Col>
      </Row>

      <Link to={isFormValid ? "/edu" : "/info"}>
        <ButtonComponent text="Next" onClick={handleClick} />
      </Link>
    </Container>
  );
}

export default PersonalInfo;
