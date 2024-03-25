import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // Handle form submission logic here, e.g., send data to server
    // For demonstration, just set submitted to true
    setSubmitted(true);
  };

  return (
    <div className="contact-form" style={{ boxShadow: '0 0 10px rgba(160, 32, 240, 0.5)', padding: '20px', borderRadius: '10px' }}>
      {submitted ? (
        <div className="text-center mb-3">
          <p className="text-success">Submitted successfully!</p>
        </div>
      ) : (
        <>
          <h2>Send us a Message:</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  name="Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" name="Email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label style={{ fontWeight: "bold" }}>Subject</Form.Label>
                <Form.Control
                  required
                  as="textarea" rows={1}
                  placeholder="Type your subject here..."
                  name="Subject"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04" style={{ marginTop: "10px" }}>
                <Form.Label style={{ fontWeight: "bold" }}>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea" rows={4}
                  placeholder="Type your message here..."
                  name="Message"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" className="submit-button btn" style={{ backgroundColor: 'black', color: 'white', borderColor: 'white', transition: 'background-color 0.3s ease-in-out' }}>
              Submit
            </Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default ContactForm;
