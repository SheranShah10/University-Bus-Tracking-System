import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function BusTracking() {
  const [selectedRoute, setSelectedRoute] = useState('');

  const routes = [
    { id: 1, name: 'Route 1: Scheme 3 - E8 Campus (via F-8)' },
    { id: 2, name: 'Route 2: Askari 14 - E8 Campus (via I-8)' },
    { id: 3, name: 'Route 3: DHA - E8 Campus (via Blue Area)' },
    { id: 4, name: 'Route 4: Gulberg - E8 Campus (via F-7)' },
    { id: 5, name: 'Route 5: Bahria Town - E8 Campus (via Expressway)' }
  ];

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <h3>Select Route</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Select
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                  >
                    <option value="">Choose a route...</option>
                    {routes.map(route => (
                      <option key={route.id} value={route.id}>
                        {route.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" className="w-100">
                  Track Bus
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3>Bus Information</h3>
              <p>Select a route to view bus information</p>
              {/* Bus information will be displayed here */}
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card>
            <Card.Body>
              <h3>Live Map</h3>
              <div
                style={{
                  height: '500px',
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px'
                }}
              >
                <p className="text-muted">Map will be displayed here</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BusTracking; 