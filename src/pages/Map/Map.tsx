import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { getCookie, setCookie } from "../../tools/cookie";
import './Map.css';


class Map extends React.Component<{}, {}> {
  // constructor() {
  //   super();
  //   // this.state = { Code: undefined, redirect: undefined };
  // }

  // handleChange = (event: any) => {
  //   this.setState({Code: event.target.value});
  // }

  // onSubmit = () => {
  //   setCookie("GISCode", this.state.Code, 30);
  //   this.setState({redirect: "/info" });
  // }


  render(){
    // console.log(this.state.redirect);
    // if (this.state.redirect) {
    //   return <Navigate to={this.state.redirect} />;
    // }
    return (
      <Container className="APP container">
        <Row>
          <h2 className="title px-2 py-2"> Map of National Taiwan University</h2>
        </Row>
        <Row>
          <Card body className="px-2 mapcard">
            <iframe className="responsive-iframe map " src={"https://map.ntu.edu.tw/ntu-eng.html"}></iframe>
          </Card>
        </Row>
        
      </Container>
    );
  }
}

export default Map;
