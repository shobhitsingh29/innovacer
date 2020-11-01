import React, { useState } from "react";
import api from "../api";
import { CsvDropzone } from "react-csv-uploader";

import styled from "styled-components";
import ReactTable from "react-table";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

const PatientInsert = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleChangeInputName = async (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleChangeInputAge = async (event) => {
    const age = event.target.value;
    setAge(age);
  };

  const handleChangeInputGender = async (event) => {
    const gender = event.target.value;
    setGender(gender);
  };

  const handleInclude = async () => {
    const payload = { name, age, gender };

    await api.insertPatient(payload).then((res) => {
      setGender("");
      setAge("");
      setGender("");
    });
  };

  return (
    <Wrapper>
      <Label>Name: </Label>
      <InputText type="text" value={name} onChange={handleChangeInputName} />
      <Label>Age: </Label>
      <InputText type="text" value={age} onChange={handleChangeInputAge} />

      <Label>Gender: </Label>
      <InputText
        type="text"
        value={gender}
        onChange={handleChangeInputGender}
      />

      <Button onClick={handleInclude}>Add Patient</Button>
      <CancelButton href={"/patient/list"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default PatientInsert;
