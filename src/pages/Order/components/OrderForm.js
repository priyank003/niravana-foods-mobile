import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./OrderForm.css";

export default function OrderForm() {
  return (
    <Form>
      <Row className="mb-2">
        <Form.Group
          as={Col}
          controlId="officeNo"
          className="col-10 form__group"
        >
          <Form.Label>Apt./ Office No</Form.Label>
          <Form.Control type="text" placeholder="Apt. / Office No." />
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="city" className="col-6 form__group">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="city" />
        </Form.Group>

        <Form.Group className="mb-2 col-6 form__group" controlId="pinCode ">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control placeholder="pin code" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 col-10 form__group" controlId="Address ">
        <Form.Label>Address </Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>

      <Button variant="primary" className="order__form-btn">
        Save & Continue
      </Button>
    </Form>
  );
}
