import React from 'react'
import {Container, Row, Col, Image, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom; // Using NavLink from react-router-dom

const NotFound = () => {
  return (
    <Container className="text-center" style={{ paddingTop: '50px'}}>
      {/* Grid Layout */}
      <Row>
        <Col md={6}>
          <h1 style={{ color: "#ff4757 "}}>404</h1>
          <h2 style={{ color: '2f3542'}}>Page Not Found</h2>
          <p classNmae="text-muted">
            Sorry, the page you are looking for does not exist.
          </p>
          {/* Styled NavLink as Button */}
          <NavLink to="/">
            <Button variant="primary">Go Back to Home</Button>
          </NavLink>
        </Col>

        <Col  md={6}>
          {/* Engaging Image */}
          <Image
          src="https://via.placeholder.com/400" //Repalce with a suitable image URL
          alt="Page not found"
          fluid

          />
        </Col>
      </Row>
    </Container>

 );
};

export default NotFound;
