import React from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Modal } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import Randomimg from './Randomimg';
import './Schedule.css';
import PersonInfo from './PersonInfo';
import DailyInfo1 from './DailyInfo1';
import DailyInfo2 from './DailyInfo2';
import DailyInfo3 from './DailyInfo3';
import DailyInfo4 from './DailyInfo4';
import DailyInfo5 from './DailyInfo5';

class DelegateInfo {
    Code: string | undefined;
    day2Speech: string | undefined;	
    day3Speech: string | undefined;
    day2Panel: string | undefined;	
    day3Panel: string | undefined;
    day1Mentor: string | undefined;	
    day3Mentor: string | undefined;
    day3Workshop: string | undefined;
    Name: string | undefined;
    Team: string | undefined;
    Topic: string | undefined;
    Diet: string | undefined;
    speech1: string | undefined;
    speech2: string | undefined;
    day1Lunch: string | undefined;
    day2Lunch: string | undefined;
    day3Lunch: string | undefined;
    day4Lunch: string | undefined;
    day5Lunch: string | undefined;
}

interface SchedulePageState {
  Code: string | undefined;
  Info: DelegateInfo | undefined;
  redirect: string | undefined;
  show: boolean;
  imgid: number;
}

class Schedule extends React.Component<{}, SchedulePageState> {
  constructor(props: SchedulePageState) {
    super(props);
    this.state = { Code: undefined, Info: undefined, redirect: undefined, show: true, imgid: 0};
  }

  componentDidMount = () => {
    const Code = getCookie('GISCode');
    const imgid = Math.floor(Math.random() * 2);
    this.setState({Code: Code, imgid: imgid});
    this.Readdata();
  }

  handleClose = (event: any) => {
    this.setState({show: false});
  }

  Readdata = async () => {  
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('1wJ2kovQJUdrRepD5pYnUIAO5JGn3KGhGCgScUuJhxHE');
    await doc.useServiceAccountAuth({
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDJytZ/klINiwcV\n43YRFfaaY1X/jMaDEJk4OmX3KCvyiw1B02nbYVkLI165PupiKT0UAX1oCOq8W/bX\nzKbdQuH8Oy8FVlRQCJBR/fwfxHe+WrXMEbxEFH+yO7CKye6dQJVTNmHwyJk8/UMj\n/0T0vFBYQFjTd4CD1UdbAAyd5GZ/buDdjn9TIhigclSaYeswqepGBbDJZaVmsEgw\nRnT+qZk1U+YqvPyf1PIHMkHaVahRqW14WScKy2s6Pgb25wneqP+dMZbUJ8Iadl0G\nOdn9sDL4tXLIKk3fOPuZiRR2VMWIrzIXibIxPeczmLquLAVSvI6fRcHhSX1LqmmG\niHzm01bbAgMBAAECggEAZNc7CuRlocP0xgD1+wLVSgDTNJI2j7/HOdyhIPqPv7Sy\nas9KKqoCs/i4eO1Sdrxx++HkuA0gtQFmISBx0MeAJCq1TD8AgkBNUtQQXxWw20z8\nZZ8FTKZLzBddGXZhCm+AT+Ww2wF75okPuNjzrjO/GOMLIJ4q+HaoIncrVuoROKOe\njJ94wUTkdppXBWltMya9/mHdXFXCvnfTKUwdhheHAT4b54RWQbSZcDIin2kIDKdP\njhMZNI1SnYBIoV9tneuVDg7/ybyjc1J6cGDBXw94Bd1RmLzMdPL/s44OMyyvu1Tp\nJRorb74tiATK2SjL2q0iKItJhkqpl+ZWfictbGnHOQKBgQDjpOCFyi240JYg2j/u\nv+QfVlcDnNomo92+I3tXmM3TgnKkO+IiXk7PxJjRtSHlADi9A2dnXThPk1X1mCu3\nJoduTHEWyMOLTzF2ysP/8W0pA1OlAuDd+alhpvd+XJ0T/TBFxioZ70lVARHl7Cxy\nAn/kMtf0NiRRJlyBqUAcs1KI0wKBgQDi7ZmrALx0s7m/ysaLtzSJyYa+OnooO4jn\nuVsnctFxF8XS42vOhtXl4MDp58IN2kKsv6qoZhdHYz0EuLCBQswgrxJJiHd2DP8H\nKD/WKhlwGq44S70HT8Q11sZFy0cyWhHhdNzRTO3XuqPK+8Iu5I/4JLMbAY+c7Zlt\nZ47wshO02QKBgQC+ncf3n6ULdXXQipAwPfQqHWT9PHEbG+nIlfNpFSV8b2XJie8/\n8hIyPZ/tMavxEm9wLhJ+5fsJ/whifwpT8WpD/LRRbMj4tNZpbz4R6boLNqLqsG9U\n0AJ6J5Jj9+771u1974I/dzPDfwLasRlCWj92+PAFqPReEy4w0GVD4xBASwKBgQDE\n/1jgj4IKmZ9N9T2JOqD8YJt9doxncs91wn50b4OMdwPAALetEXaM2iD+rbfTiL9K\n8hS3nfDlgywMdjyb6h4E3Za1iSeTrtKSJwnL5L4yiKbnrjBKMZ/20R1Mp5yGBJTz\nMR0lAXCUT60zYH0Bcl/dHhbyAdfndogz5qu7HgxneQKBgQCsAa627GrV3nj2vSwn\neR4KsS9Bl/ZMmKYyGahric0+9f8hcWV07/yZU1vnlvWSftlywhJBBvI7LAN+NYK1\n6M/Io9k16O0tTZ8qAc0gKDK72k9ssuDbKkk9MUPmCFAxrsu9/U19LzEweTDPLsz7\nwUGw3HD9clkXWW4D+QkI169D/Q==\n-----END PRIVATE KEY-----\n",
      "client_email": "accountforinfo@delegate-info-338210.iam.gserviceaccount.com"
    });
    await doc.loadInfo(); // loads document properties and worksheets
    if(doc){ 
      const sheet = doc.sheetsByIndex[0];
      var rows = await sheet.getRows();
      rows = rows.filter((row: any) => {return (row.GISCode === this.state.Code);});
      if(rows.length === 1){
        let Info = new DelegateInfo();
        Info.Code = rows[0].GISCode;
        Info.day2Speech = rows[0].Day2Speech;	
        Info.day3Speech = rows[0].Day3Speech;
        Info.day2Panel = rows[0].Day2Panel;	
        Info.day3Panel = rows[0].Day3Panel;
        Info.day1Mentor = rows[0].Day1Mentor;	
        Info.day3Mentor = rows[0].Day3Mentor;
        Info.day3Workshop = rows[0].Day3Workshop;
        Info.Name = rows[0].Name;
        Info.Team = rows[0].Team;
        Info.Topic = rows[0].Topic;
        Info.Diet = rows[0].Diet;
        Info.speech1 = rows[0].Speech1;
        Info.speech2 = rows[0].Speech2;
        Info.day1Lunch = rows[0].Day1Lunch;
        Info.day2Lunch = rows[0].Day2Lunch;
        Info.day3Lunch = rows[0].Day3Lunch;
        Info.day4Lunch = rows[0].Day4Lunch;
        Info.day5Lunch = rows[0].Day5Lunch;

        this.setState({Info: Info, Code: Info.Code});
      }else{
        alert("Please enter a valid GIS code!");
        this.setState({redirect: "/"});
        this.setState({Code: undefined});
        
      }
      console.log(rows);
    }
  };

  render(){
    // console.log(this.state.redirect);
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }
    const Code = this.state.Code;
    const Info = this.state.Info;
    console.log(Info);
    if(Code === undefined){
      return (<> </>);
    }else{
    

      return (
        <Container className='APP container'>
          <Row >
            <h2 className='title px-2 py-2'> Hello {Info?.Name}</h2>
          </Row>
          <Row className='py-2 px-2'>
            <PersonInfo Name={Info?.Name} Topic={Info?.Topic} Team={Info?.Team} Diet={Info?.Diet}/>
          </Row>
          <Row className='py-2 px-2'>
            <DailyInfo1 day={1} Day1Lunch={Info?.day1Lunch} Day1mentor={Info?.day1Mentor} />
          </Row>
          <Row className='py-2 px-2'>
            <DailyInfo2 day={2} Speech1={Info?.speech1} Day2Speech={Info?.day2Speech}/>
          </Row>
          <Row className='py-2 px-2'>
            <DailyInfo3 day={3} Speech2={Info?.speech2} Day3Speech={Info?.day3Speech} Day3Lunch={Info?.day3Lunch} Day3Mentor={Info?.day3Mentor} Day3Workshop={Info?.day3Workshop} />
          </Row>
          <Row className='py-2 px-2'>
            <DailyInfo4 day={4}/>
          </Row>
          <Row className='py-2 px-2'>
            <DailyInfo5 day={5} Day5Lunch={Info?.day5Lunch}/>
          </Row>
          <Modal show={this.state.show} onHide={this.handleClose} className="s-modal" >
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body>
            <Randomimg imgid={this.state.imgid} />
          </Modal.Body>
          </Modal>
          
        </Container>
      );
    }
  }
}

export default Schedule;
