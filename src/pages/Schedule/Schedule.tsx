import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { getCookie } from "../../tools/cookie";
import './Schedule.css';
import PersonInfo from "./PersonInfo";
import DailyInfo1 from "./DailyInfo1";
import DailyInfo2 from "./DailyInfo2";
import DailyInfo3 from "./DailyInfo3";
import DailyInfo4 from "./DailyInfo4";
import DailyInfo5 from "./DailyInfo5";

interface SchedulePageState {
    Code: string | undefined;
}


class Schedule extends React.Component<{}, SchedulePageState> {
  constructor(props: SchedulePageState) {
    super(props);
    this.state = { Code: undefined };
  }

  componentDidMount = () => {
    const Code = getCookie("GISCode");
    this.setState({Code: Code});
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
    const Code = this.state.Code;
    if(Code === undefined){
      return (<> </>);
    }else{
    

      return (
        <Container className="APP container">
          <Row >
            <h2 className="title px-2 py-2"> Hi Albert Lin! </h2>
          </Row>
          <Row className="py-2 px-2">
            <PersonInfo />
          </Row>
          <Row className="py-2 px-2">
            <DailyInfo1 day={1}/>
          </Row>
          <Row className="py-2 px-2">
            <DailyInfo2 day={2}/>
          </Row>
          <Row className="py-2 px-2">
            <DailyInfo3 day={3}/>
          </Row>
          <Row className="py-2 px-2">
            <DailyInfo4 day={4}/>
          </Row>
          <Row className="py-2 px-2">
            <DailyInfo5 day={5}/>
          </Row>
          
        </Container>
      );
    }
  }
}

export default Schedule;
