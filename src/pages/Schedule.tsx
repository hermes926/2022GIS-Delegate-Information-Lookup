import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import './Schedule.css';

interface SchedulePageState {
    Code: string | undefined;
}

class Schedule extends React.Component<{}, SchedulePageState> {
  constructor(props: SchedulePageState) {
    super(props);
    this.state = { Code: undefined };
  }

//   handleChange = (event: any) => {
//     this.setState({Code: event.target.value});
//   }

//   onSubmit = () => {
//     this.setState({redirect: "/info/" + this.state.Code});
//   }


  render(){
    // console.log(this.state.redirect);
    // if (this.state.redirect) {
    //   return <Navigate to={this.state.redirect} />;
    // }
    return (
      <Container>
        
        
      </Container>
    );
  }
}

export default Schedule;
