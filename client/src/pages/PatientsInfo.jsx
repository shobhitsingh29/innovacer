import React, { useEffect, useState } from "react";
import api from "../api";

import styled from "styled-components";

import "react-table/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const PatientsInfo = (props) => {
  const [id, setId] = useState(props.match.params.id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const getPatient = async () => {
    const {
      data: { data },
    } = await api.getPatientById(id);

    setName(data.name);
    setAge(data.age);
    setGender(data.gender);
  };
  useEffect(() => {
    getPatient();
  }, []);

  return (
    <Wrapper>
      <div>{name}</div>
      <div>{age}</div>
      <div>{gender}</div>
    </Wrapper>
  );
};

export default PatientsInfo;
