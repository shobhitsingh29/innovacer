import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Links from "./Links";


const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  margin-bottom: 20 px;
`;

const Header = styled.header`
  display: flex;
  background: #212529;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <Header>
        <Link to="/patients/list" className="navbar-brand">
          Patients App
        </Link>
      </Header>
      <Nav>
        <Links />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
