import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { getCookie, setCookie } from "../../tools/cookie";
import './Login.css';

interface LoginPageState {
  Code: string | undefined;
  redirect: string | undefined;
}

class Login extends React.Component<{}, LoginPageState> {
  constructor(props: LoginPageState) {
    super(props);
    this.state = { Code: undefined, redirect: undefined };
  }

  handleChange = (event: any) => {
    this.setState({Code: event.target.value});
  }

  onSubmit = () => {
    setCookie("GISCode", this.state.Code, 30);
    this.setState({redirect: "/info" });
  }


  render(){
    // console.log(this.state.redirect);
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }
    return (
      <Container className="APP container">
        <Row>
          <h2 className="title px-2 py-2"> Welcome to GIS 2022!</h2>
        </Row>
        <Row>
          <Card body className="px-2 card">
            <Card.Title>Please enter your GIS code</Card.Title>
            <Row>
              <Col xs={9}>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control 
                    type="string" 
                    placeholder="GIS___"
                    onChange={(e) => this.handleChange(e)}
                    />
                </Form.Group>
              </Form>
              </Col>
              <Col> 
                <Button variant="outline-primary" onClick={() => this.onSubmit()}>Submit</Button>
              </Col>
            </Row>
          </Card>
        </Row>
        
      </Container>
    );
  }
}

export default Login;
