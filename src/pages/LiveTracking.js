import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBus, FaMapMarkerAlt } from 'react-icons/fa';

function LiveTracking() {
  return (
    <Container>
      <h2 className="mb-4">Live Bus Tracking</h2>
      
      <Row>
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3>Live Map</h3>
              <div className="map-placeholder" style={{ height: '500px', backgroundColor: '#f8f9fa' }}>
                <p className="text-center py-5">Map will be displayed here</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3>Active Buses</h3>
              <div className="bus-list">
                <div className="bus-item mb-3">
                  <div className="d-flex align-items-center">
                    <FaBus className="text-primary me-2" />
                    <div>
                      <strong>Bus #1</strong>
                      <p className="mb-0">Route: Askari 14 → University</p>
                    </div>
                  </div>
                </div>
                <div className="bus-item mb-3">
                  <div className="d-flex align-items-center">
                    <FaBus className="text-success me-2" />
                    <div>
                      <strong>Bus #2</strong>
                      <p className="mb-0">Route: Scheme 3 → University</p>
                    </div>
                  </div>
                </div>
                <div className="bus-item mb-3">
                  <div className="d-flex align-items-center">
                    <FaBus className="text-info me-2" />
                    <div>
                      <strong>Bus #3</strong>
                      <p className="mb-0">Route: DHA → University</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <h3>Bus Stops</h3>
              <div className="stop-list">
                <div className="stop-item mb-3">
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="text-danger me-2" />
                    <div>
                      <strong>Askari 14</strong>
                      <p className="mb-0">First stop - Route 1</p>
                    </div>
                  </div>
                </div>
                <div className="stop-item mb-3">
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="text-warning me-2" />
                    <div>
                      <strong>Scheme 3</strong>
                      <p className="mb-0">First stop - Route 2</p>
                    </div>
                  </div>
                </div>
                <div className="stop-item mb-3">
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="text-success me-2" />
                    <div>
                      <strong>DHA</strong>
                      <p className="mb-0">First stop - Route 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LiveTracking; 