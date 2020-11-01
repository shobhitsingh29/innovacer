import styled from "styled-components";

export const Title = styled.h1.attrs({
    className: "h1",
})``;


export const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;


export const UL = styled.ul`
   maring:0;
  padding:0px;
  list-style:none;
`;



export const LI = styled.li`
  padding:20px;
  margin-top:20px;
  background-color:rgba(255,255,255,0.9);
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
  -webkit-box-shadow: 0px 0px 2px #888888;
  -moz-box-shadow: 0px 0px 2px #888888;
  box-shadow: 0px 0px 2px #888888;
`;



export const Label = styled.label`
  margin: 5px;
`;

export const InputText = styled.input.attrs({
    className: "form-control",
})`
  margin: 5px;
`;

export const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

export const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;



export const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

export const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;
