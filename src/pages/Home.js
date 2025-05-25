import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <div className="text-center">
            <h1 className="display-4">Welcome to University Bus Tracking System</h1>
            <p className="lead">Track your university buses in real-time and plan your journey efficiently</p>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Real-Time Tracking</Card.Title>
              <Card.Text>
                Track your bus location in real-time and get accurate arrival times.
              </Card.Text>
              <Button as={Link} to="/tracking" variant="primary">Track Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Bus Schedule</Card.Title>
              <Card.Text>
                View complete bus schedules and plan your journey in advance.
              </Card.Text>
              <Button as={Link} to="/schedule" variant="primary">View Schedule</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Get Notifications</Card.Title>
              <Card.Text>
                Receive alerts about delays, schedule changes, and important updates.
              </Card.Text>
              <Button as={Link} to="/register" variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="text-center">
            <h2>Why Choose Our System?</h2>
            <p className="lead">
              • Real-time bus tracking<br />
              • Accurate arrival predictions<br />
              • Easy-to-use interface<br />
              • Mobile-friendly design<br />
              • Instant notifications
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home; 