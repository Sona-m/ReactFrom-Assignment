import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import TableBody from "./TableBody";
import { useDispatch } from "react-redux";
import { addEdu } from "../redux/store";

const Education = () => {
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({
    X: {},
    XII: {},
    UG: {},
  });

  const handleSave = () => {
    if (isFormFilled()) {
      console.log("saving edu details");
      dispatch(addEdu(edu));
    }
  };

  const isFormFilled = () => {
    return (
      edu.X.year &&
      edu.X.board &&
      edu.X.marks &&
      edu.XII.year &&
      edu.XII.board &&
      edu.XII.marks &&
      edu.UG.year &&
      edu.UG.board &&
      edu.UG.marks
    );
  };

  return (
    <div className="form">
      <h1 className="form-heading">Academic Qualification</h1>
      <Table responsive hover bordered>
        <thead>
          <tr>
            <th>Examination</th>
            <th>Year of Passing</th>
            <th>Board/University</th>
            <th>Percentage of Marks</th>
          </tr>
        </thead>
        <tbody>
          <TableBody
            about="10th Class"
            type="text"
            board="10th Board"
            marks="10th Marks"
            data={edu.X}
            setData={setEdu}
            examKey="X"
          />
          <TableBody
            about="Intermediate/10+2"
            type="text"
            board="12th Board"
            marks="12th Marks"
            data={edu.XII}
            setData={setEdu}
            examKey="XII"
          />
          <TableBody
            about="Undergraduate"
            type="text"
            board="University"
            marks="UG Marks"
            data={edu.UG}
            setData={setEdu}
            examKey="UG"
          />
        </tbody>
      </Table>
      <Link to={isFormFilled() ? "/exp" : "/edu"}>
        <ButtonComponent text="Next" onClick={handleSave} />
      </Link>
    </div>
  );
};

export default Education;
