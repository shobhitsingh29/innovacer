import React, { useState } from "react";
//import { uploadCsv } from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
    className: "h1",
})``;

const Wrapper = styled.div.attrs({
    className: "form-group container",
})``;

const PatientInsert = (props) => {
    const handleSubmit = (event) => {
        //uploadCsv();
    };
    return (
        <Wrapper>
            <Title>Upload patient dataset here</Title>
            <form method="post" encType="multipart/form-data" action="/upload">
                <label htmlFor="csvfile">CSV File Upload</label>
                <br />
                <input type="file" name="csvfile" id="csvfile" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </Wrapper>
    );
};

export default PatientInsert;
