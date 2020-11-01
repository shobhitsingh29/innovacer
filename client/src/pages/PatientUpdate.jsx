import React, { useEffect, useState } from "react";
import api from "../api";

import styled from "styled-components";

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

const PatientUpdate = (props) => {
  const [id, setId] = useState(props.match.params.id);
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

  const handleUpdatePatient = async () => {
    const payload = { name, age, gender };

    await api.updatePatientById(id, payload).then((res) => {
      window.alert(`Patient updated successfully`);
      setName("");
      setAge("");
      setGender("");
    });
  };

  const handleUpdate = async () => {
    const {
      data: { data },
    } = await api.getPatientById(id);
    setName(data.name);
    setAge(data.age);
    setGender(data.gender);
  };

  useEffect(() => {
    handleUpdate();
  }, []);
  return (
    <Wrapper>
      <Title>Create Patient</Title>

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

      <Button onClick={handleUpdatePatient}>Update Patient</Button>
      <CancelButton href={"/patients/list"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default PatientUpdate;
