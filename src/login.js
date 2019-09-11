import React, { Component } from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'
import axios from "axios";

class Login extends Component{

render() {
    return (
      <div >
          <Col md={{span:4,offset:4}}>
              <Form style={{marginTop:'30px'}}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
              </Form>
          </Col>
      </div>
    );
}

}
export default Login;