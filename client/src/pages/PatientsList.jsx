import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import api from "../api";
import { Link } from "react-router-dom";

import styled from "styled-components";

import "react-table/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

const UpdatePatient = (props) => {
  const updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/patients/update/${props.id}`;
  };

  return <Update onClick={updateUser}>Update</Update>;
};

const PatientInfo = (props) => {
  return <Link to={`/patients/info/${props.id}`}>{props.name}</Link>;
};

const DeletePatient = (props) => {
  const deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the patient ${props.id} permanently?`
      )
    ) {
      api.deletePatientById(props.id);
      window.location.reload();
    }
  };

  return <Delete onClick={deleteUser}>Delete</Delete>;
};

const PatientsList = (props) => {
  const [patients, setPatients] = useState([]);

  const getPatient = async () => {
    const patients = await api.getAllPatients();
    setPatients(patients.data.data);
  };
  useEffect(() => {
    getPatient();
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "_id",
      filterable: true,
    },
    {
      Header: "Name",
      accessor: "name",
      filterable: true,
      Cell: function (props) {
        return (
          <span>
            <PatientInfo id={props.original._id} name={props.original.name} />
          </span>
        );
      },
    },
    {
      Header: "Age",
      accessor: "age",
      filterable: true,
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "",
      accessor: "",
      Cell: function (props) {
        return (
          <span>
            <DeletePatient id={props.original._id} />
          </span>
        );
      },
    },
    {
      Header: "",
      accessor: "",
      Cell: function (props) {
        return (
          <span>
            <UpdatePatient id={props.original._id} />
          </span>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <ReactTable
        data={patients}
        columns={columns}
        defaultPageSize={10}
        showPageSizeOptions={true}
        minRows={0}
      />
    </Wrapper>
  );
};

export default PatientsList;
