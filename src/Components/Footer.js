import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    // Footer component
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={12}>
            {/* Footer text */}
            <p className="text-center">
              Created by Saksham Raina
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
