import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomNavbar from '../Components/Navbar';
import WeatherComponent from '../Components/WeatherComponent';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <CustomNavbar />
      <WeatherComponent />
      <div style={{ marginTop: '0.75rem', marginBottom: '10rem' }}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Card>
                <Card.Body>
                  <Card.Title>About Us</Card.Title>
                  <Card.Text>
                    Welcome to DailyPulse, your daily dose of news. We are dedicated to providing you with the latest updates on various topics including politics, technology, business, entertainment, and more.
                  </Card.Text>
                  <Card.Text>
                    Our website is designed to keep you informed and engaged. We strive to deliver accurate and unbiased news, ensuring that you have access to reliable information that matters to you.
                  </Card.Text>
                  <Card.Text>
                    At DailyPulse, we believe in the power of technology to connect people and empower them with knowledge. That's why we have created a platform that combines cutting-edge technology with a seamless user experience, making it easy for you to stay informed and navigate through the news that interests you the most.
                  </Card.Text>
                  <Card.Text>
                    Connect with us on social media to stay updated and join the conversation:
                  </Card.Text>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} className="icon" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
