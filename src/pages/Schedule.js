import React, { useState } from 'react';
import { Container, Table, Form, Row, Col, Card } from 'react-bootstrap';
import { FaBus, FaClock, FaInfoCircle } from 'react-icons/fa';

function Schedule() {
  const [selectedRoute, setSelectedRoute] = useState('all');

  // Sample schedule data
  const schedules = [
    {
      id: 1,
      route: 'Route 1: Askari 14 to Bahria University E8 Campus',
      morningDeparture: '06:45 AM',
      morningArrival: '08:00 AM',
      afternoonDeparture: '04:00 PM',
      afternoonArrival: '05:15 PM',
      frequency: 'Twice a day'
    },
    {
      id: 2,
      route: 'Route 2: Scheme 3 to Bahria University E8 Campus',
      morningDeparture: '06:45 AM',
      morningArrival: '08:00 AM',
      afternoonDeparture: '04:30 PM',
      afternoonArrival: '05:45 PM',
      frequency: 'Twice a day'
    },
    {
      id: 3,
      route: 'Route 3: DHA to Bahria University E8 Campus',
      morningDeparture: '06:45 AM',
      morningArrival: '08:00 AM',
      afternoonDeparture: '05:30 PM',
      afternoonArrival: '06:45 PM',
      frequency: 'Twice a day'
    }
  ];

  const routes = [
    { id: 'all', name: 'All Routes' },
    { id: '1', name: 'Route 1: Askari 14 to Bahria University E8 Campus' },
    { id: '2', name: 'Route 2: Scheme 3 to Bahria University E8 Campus' },
    { id: '3', name: 'Route 3: DHA to Bahria University E8 Campus' }
  ];

  const filteredSchedules = selectedRoute === 'all'
    ? schedules
    : schedules.filter(schedule => schedule.id === parseInt(selectedRoute));

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Bus Schedule</h2>
        <FaBus className="text-primary" size={32} />
      </div>
      
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>
                  <FaClock className="me-2" />
                  Select Route
                </Form.Label>
                <Form.Select
                  value={selectedRoute}
                  onChange={(e) => setSelectedRoute(e.target.value)}
                  className="form-select-lg"
                >
                  {routes.map(route => (
                    <option key={route.id} value={route.id}>
                      {route.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive">
            <Table striped bordered hover className="schedule-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Morning Schedule</th>
                  <th>Afternoon Schedule</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchedules.map(schedule => (
                  <tr key={schedule.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <FaBus className="text-primary me-2" />
                        {schedule.route}
                      </div>
                    </td>
                    <td>
                      <div className="schedule-time">
                        <div className="time-label">First Stop:</div>
                        <div className="time-value">{schedule.morningDeparture}</div>
                        <div className="time-label mt-2">University:</div>
                        <div className="time-value">{schedule.morningArrival}</div>
                      </div>
                    </td>
                    <td>
                      <div className="schedule-time">
                        <div className="time-label">University:</div>
                        <div className="time-value">{schedule.afternoonDeparture}</div>
                        <div className="time-label mt-2">Last Stop:</div>
                        <div className="time-value">{schedule.afternoonArrival}</div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary">{schedule.frequency}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <FaInfoCircle className="text-primary me-2" size={24} />
            <h4 className="mb-0">Schedule Notes</h4>
          </div>
          <div className="schedule-notes">
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-check-circle text-success me-2"></i>
                All times are in local time zone
              </li>
              <li className="mb-2">
                <i className="fas fa-sun text-warning me-2"></i>
                Morning Schedule:
                <ul>
                  <li>First stop pickup: 6:45 AM</li>
                  <li>University arrival: 8:00 AM</li>
                </ul>
              </li>
              <li className="mb-2">
                <i className="fas fa-moon text-info me-2"></i>
                Afternoon Schedule:
                <ul>
                  <li>Route 1: University departure at 4:00 PM</li>
                  <li>Route 2: University departure at 4:30 PM</li>
                  <li>Route 3: University departure at 5:30 PM</li>
                </ul>
              </li>
              <li className="mb-2">
                <i className="fas fa-exclamation-circle text-danger me-2"></i>
                Schedules may vary during holidays and special events
              </li>
              <li>
                <i className="fas fa-clock text-primary me-2"></i>
                Please arrive at the bus stop 5 minutes before the scheduled departure time
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Schedule; 