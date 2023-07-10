import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { postApi } from "../redux/api/postApi";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";

const PreviewForm = () => {
  const { info, education, experience } = useSelector((state) => state.user);
  const {
    currentOrganization,
    previousOrganization: prvOrg,
    role,
  } = experience;
  const data = useSelector((state) => state.user);
  const handleSubmit = () => {
    postApi(data);
  };
  return (
    <>
      <div></div>
      <div className="form">
        <div className="form-heading">Your Details</div>
        <div className="profile-header">
          <h2 className="profile-name">
            {info.fname} {info.lname}
          </h2>
          <p className="profile-email">{info.email}</p>
          <p className="profile-phone">{info.phoneNo}</p>
        </div>
        <div className="education">
          <Table responsive bordered>
            <thead>
              <th>Level</th>
              <th>Board</th>
              <th>Year</th>
              <th>Marks</th>
            </thead>
            <tbody>
              {Object.entries(education).map((educlass, index) => {
                const [level, details] = educlass;
                return (
                  <tr className="edu-header" key={index}>
                    <td>{level}</td>
                    <td className="edu-details-heading">{details.board}</td>
                    <td className="edu-details-subheading">{details.year}</td>
                    <td className="edu-details-subheading">
                      {details.marks} %
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <div className="form-heading">Experience</div>
        <div>
          <h4>Role : {role}</h4>
          <p>
            Company details : {currentOrganization.name} started from {currentOrganization.fromDate}
          </p>
          <p>
            Prev Company details : {prvOrg.name} From date : {prvOrg.fromDate} To date : {prvOrg.toDate}
          </p>
        </div>
      </div>
      <Link to="/">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </Link>
    </>
  );
};

export default PreviewForm;
