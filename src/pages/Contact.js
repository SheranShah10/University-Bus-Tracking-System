import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <Container>
      <h2 className="mb-4">Contact Us</h2>
      
      <Row>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3>Send us a Message</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="text-primary me-3" size={20} />
                  <div>
                    <h5 className="mb-0">Phone</h5>
                    <p className="mb-0">+92 51 1234567</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-primary me-3" size={20} />
                  <div>
                    <h5 className="mb-0">Email</h5>
                    <p className="mb-0">transport@bahria.edu.pk</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="text-primary me-3" size={20} />
                  <div>
                    <h5 className="mb-0">Address</h5>
                    <p className="mb-0">
                      Bahria University E8 Campus<br />
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <h3>Office Hours</h3>
              <div className="office-hours">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact; 