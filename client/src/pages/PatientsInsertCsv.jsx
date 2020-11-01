import React  from "react";
import { uploadCsv } from "../api";

import { Wrapper, Title} from "./styles.js";


const PatientInsert = (props) => {
    const handleSubmit = (event) => {
        uploadCsv(event.target.files[0]);
    };
    return (
        <Wrapper>
            <Title>Upload patient dataset here</Title>
                <label htmlFor="csvfile">CSV File Upload</label>
                <br />
                <input type="file" name="csvfile" id="csvfile" onChange={handleSubmit}/>
                <br />
        </Wrapper>
    );
};

export default PatientInsert;
