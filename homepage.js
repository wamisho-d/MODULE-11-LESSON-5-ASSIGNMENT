// src/components/Homepage.js
import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import './HomePage.css'; // Custom CSS for additional styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Container for spacing */}
      <Container className="text-center py-5">
        {/* Responsive Image */}
        <Row className="justify-content mb-4">
          <Col md={8}>
            <Image
             src={required('../assets/welcome-image.jpg')} // Adjust the path to your image
             alt="Welcome"
             fluid
             className="welcome-image"
            />
          </Col>
        </Row>


        {/* Card component to display additional content */}
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="text-center shadow-sm border-primary mb-4">
              <Card.Body>
                <Card.Title>Featured Product</Card.Title>
                <Card.Text>
                  Check out our featured product of the week! Don't miss out on our exclusive offer.
                </Card.Text>
            </Card.Body>
           </Card>
          </Col>
        </Row>

        {/* Primary Button with shadow */}
        <Row className="justify-content-center">
          <Col md={6}>
            <Button variant="primary" size="lg" className="shop-now-btn shadow-lg">
              Shop Now 
            </Button>
          </Col>
        </Row>
       </Container>
    </div>

 );
};

export default HomePage;
    
