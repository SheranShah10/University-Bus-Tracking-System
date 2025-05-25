import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBus, FaRoute, FaUsers, FaMapMarkedAlt, FaClock } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="hero-section">
        <Container>
          <h1>Welcome to Bus Tracking System</h1>
          <p className="lead">Real-time tracking and monitoring of university buses</p>
        </Container>
      </div>

      <Container className="mt-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm stats-card">
              <Card.Body>
                <FaBus className="display-4 mb-3 text-primary icon" />
                <h3>Active Buses</h3>
                <h2 className="text-primary">12</h2>
                <p className="text-muted">Currently in service</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm stats-card">
              <Card.Body>
                <FaRoute className="display-4 mb-3 text-success icon" />
                <h3>Total Routes</h3>
                <h2 className="text-success">3</h2>
                <p className="text-muted">Covering all areas</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm stats-card">
              <Card.Body>
                <FaUsers className="display-4 mb-3 text-info icon" />
                <h3>Active Passengers</h3>
                <h2 className="text-info">150+</h2>
                <p className="text-muted">Daily commuters</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="mb-0">Live Map</h3>
                  <FaMapMarkedAlt className="text-primary" size={24} />
                </div>
                <div className="map-placeholder">
                  <p className="text-center py-5">Map will be displayed here</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="mb-0">Recent Updates</h3>
                  <FaClock className="text-primary" size={24} />
                </div>
                <div className="updates-list">
                  <div className="update-item mb-3 p-3 bg-light rounded">
                    <div className="d-flex align-items-center">
                      <FaBus className="text-success me-3" />
                      <div>
                        <strong>Bus #1</strong>
                        <p className="mb-0 text-muted">Arriving at Askari 14 in 5 minutes</p>
                      </div>
                    </div>
                  </div>
                  <div className="update-item mb-3 p-3 bg-light rounded">
                    <div className="d-flex align-items-center">
                      <FaBus className="text-primary me-3" />
                      <div>
                        <strong>Bus #2</strong>
                        <p className="mb-0 text-muted">Departed from Scheme 3</p>
                      </div>
                    </div>
                  </div>
                  <div className="update-item mb-3 p-3 bg-light rounded">
                    <div className="d-flex align-items-center">
                      <FaBus className="text-info me-3" />
                      <div>
                        <strong>Bus #3</strong>
                        <p className="mb-0 text-muted">On route to DHA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard; 