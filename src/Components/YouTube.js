import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

const YoutubePlayer = () => {
  const videoLinks = [
    "https://www.youtube.com/watch?v=0NrBN_84BqY&pp=ygUYaW5kaWFuIGVjb25vbXkgYW5hbGF5c2lz",
    "https://www.youtube.com/watch?v=5hN2Z1iyn_o&pp=ygUYaW5kaWFuIGVjb25vbXkgYW5hbGF5c2lz",
    "https://www.youtube.com/watch?v=2Jjq1O_2_pc&pp=ygUYaW5kaWFuIGVjb25vbXkgYW5hbGF5c2lz",
    "https://www.youtube.com/watch?v=XWS94K-eV1c&pp=ygUYaW5kaWFuIGVjb25vbXkgYW5hbGF5c2lz",
    "https://www.youtube.com/watch?v=8sPPPPfLfyY&pp=ygUYaW5kaWFuIGVjb25vbXkgYW5hbGF5c2lz",
    "https://www.youtube.com/watch?v=iw5AdKOM-IU&pp=ygUYaW5kaWFuIGVjb25vbXkgYW5hbGF5c2lz"
  ];

  return (
    <Container>
      <h2 className="text-center mb-5">Latest Videos</h2>
      <Row className="gx-5">
        {videoLinks.map((link, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="h-100">
              <ReactPlayer url={link} width="100%" height="auto" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default YoutubePlayer;
