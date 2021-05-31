import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Container,
} from "reactstrap";

const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link className="h1 mb-0 text-black d-none d-lg-inline-block" to="/">
            Artemis
          </Link>
          <Form
            className="navbar-search navbar-search-light form-inline mr-3 d-none d-md-flex ml-lg-auto"
            style={{ width: "800px" }}
          >
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Type to Search"
                  type="text"
                  style={{ width: "700px" }}
                />
              </InputGroup>
            </FormGroup>
          </Form>
          <i class="fas fa-cog fa-2x"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="far fa-bell fa-2x"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="far fa-comment-alt fa-2x"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="far fa-user fa-2x"></i>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
