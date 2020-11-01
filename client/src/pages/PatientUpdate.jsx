import React, {useEffect, useState} from "react";
import api from "../api";
import {Label, InputText, Button, CancelButton, Wrapper, Title} from "./styles.js";

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
        const payload = {name, age, gender};

        await api.updatePatientById(id, payload).then((res) => {
            window.alert(`Patient updated successfully`);
            setName("");
            setAge("");
            setGender("");
        });
    };

    const handleUpdate = async () => {
        const {
            data: {data},
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
            <InputText type="text" value={name} onChange={handleChangeInputName}/>

            <Label>Age: </Label>
            <InputText type="text" value={age} onChange={handleChangeInputAge}/>

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
