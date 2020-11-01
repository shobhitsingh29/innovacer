import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const Links = () => {
  return (
    <React.Fragment>
      <Collapse>
        <List>
          <Item>
            <Link to="/patients/create" className="nav-link">
              Create Patient
            </Link>
          </Item>
          <Item>
            <Link to="/patients/list" className="nav-link">
              List Patient
            </Link>
          </Item>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default Links;
