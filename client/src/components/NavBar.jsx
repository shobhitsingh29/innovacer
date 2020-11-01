import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container",
})``;

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
    <Container>
      <Header>
        <Link to="/" className="navbar-brand">
          Patient App
        </Link>
      </Header>
      <Nav>
        <Links />
      </Nav>
    </Container>
  );
};

export default NavBar;
