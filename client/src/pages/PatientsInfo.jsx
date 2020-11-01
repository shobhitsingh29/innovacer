import React, {useEffect, useState} from "react";
import api from "../api";

import {Title, Wrapper, UL, LI} from './styles.js'

import "react-table/react-table.css";

const PatientsInfo = (props) => {
    const [id, setId] = useState(props.match.params.id);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const getPatient = async () => {
        const {
            data: {data},
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
            <Title>
                Patient Info
            </Title>
            <UL>
                <LI>Name: {name}</LI>
                <LI>Age: {age}</LI>
                <LI>Gender: {gender}</LI>
            </UL>

        </Wrapper>
    );
};

export default PatientsInfo;
