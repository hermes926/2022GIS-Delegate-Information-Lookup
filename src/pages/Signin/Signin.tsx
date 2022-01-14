import React from "react";
import { Container, Card, Row } from 'react-bootstrap';
import './Signin.css';

interface SigninState {
  GISCode: string | undefined,
}

class Signin extends React.Component<{}, SigninState> {
  constructor(props: SigninState) {
    super(props);
    this.setState({
      GISCode: undefined,
    });
  }

  componentDidMount = async () => {
    var GIScodet = '';
    var url = window.location.pathname.split('/');
    if(url.length > 2){
      GIScodet = url[2];
      const { GoogleSpreadsheet } = require('google-spreadsheet');
      const doc = new GoogleSpreadsheet('1wJ2kovQJUdrRepD5pYnUIAO5JGn3KGhGCgScUuJhxHE');
      await doc.useServiceAccountAuth({
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDJytZ/klINiwcV\n43YRFfaaY1X/jMaDEJk4OmX3KCvyiw1B02nbYVkLI165PupiKT0UAX1oCOq8W/bX\nzKbdQuH8Oy8FVlRQCJBR/fwfxHe+WrXMEbxEFH+yO7CKye6dQJVTNmHwyJk8/UMj\n/0T0vFBYQFjTd4CD1UdbAAyd5GZ/buDdjn9TIhigclSaYeswqepGBbDJZaVmsEgw\nRnT+qZk1U+YqvPyf1PIHMkHaVahRqW14WScKy2s6Pgb25wneqP+dMZbUJ8Iadl0G\nOdn9sDL4tXLIKk3fOPuZiRR2VMWIrzIXibIxPeczmLquLAVSvI6fRcHhSX1LqmmG\niHzm01bbAgMBAAECggEAZNc7CuRlocP0xgD1+wLVSgDTNJI2j7/HOdyhIPqPv7Sy\nas9KKqoCs/i4eO1Sdrxx++HkuA0gtQFmISBx0MeAJCq1TD8AgkBNUtQQXxWw20z8\nZZ8FTKZLzBddGXZhCm+AT+Ww2wF75okPuNjzrjO/GOMLIJ4q+HaoIncrVuoROKOe\njJ94wUTkdppXBWltMya9/mHdXFXCvnfTKUwdhheHAT4b54RWQbSZcDIin2kIDKdP\njhMZNI1SnYBIoV9tneuVDg7/ybyjc1J6cGDBXw94Bd1RmLzMdPL/s44OMyyvu1Tp\nJRorb74tiATK2SjL2q0iKItJhkqpl+ZWfictbGnHOQKBgQDjpOCFyi240JYg2j/u\nv+QfVlcDnNomo92+I3tXmM3TgnKkO+IiXk7PxJjRtSHlADi9A2dnXThPk1X1mCu3\nJoduTHEWyMOLTzF2ysP/8W0pA1OlAuDd+alhpvd+XJ0T/TBFxioZ70lVARHl7Cxy\nAn/kMtf0NiRRJlyBqUAcs1KI0wKBgQDi7ZmrALx0s7m/ysaLtzSJyYa+OnooO4jn\nuVsnctFxF8XS42vOhtXl4MDp58IN2kKsv6qoZhdHYz0EuLCBQswgrxJJiHd2DP8H\nKD/WKhlwGq44S70HT8Q11sZFy0cyWhHhdNzRTO3XuqPK+8Iu5I/4JLMbAY+c7Zlt\nZ47wshO02QKBgQC+ncf3n6ULdXXQipAwPfQqHWT9PHEbG+nIlfNpFSV8b2XJie8/\n8hIyPZ/tMavxEm9wLhJ+5fsJ/whifwpT8WpD/LRRbMj4tNZpbz4R6boLNqLqsG9U\n0AJ6J5Jj9+771u1974I/dzPDfwLasRlCWj92+PAFqPReEy4w0GVD4xBASwKBgQDE\n/1jgj4IKmZ9N9T2JOqD8YJt9doxncs91wn50b4OMdwPAALetEXaM2iD+rbfTiL9K\n8hS3nfDlgywMdjyb6h4E3Za1iSeTrtKSJwnL5L4yiKbnrjBKMZ/20R1Mp5yGBJTz\nMR0lAXCUT60zYH0Bcl/dHhbyAdfndogz5qu7HgxneQKBgQCsAa627GrV3nj2vSwn\neR4KsS9Bl/ZMmKYyGahric0+9f8hcWV07/yZU1vnlvWSftlywhJBBvI7LAN+NYK1\n6M/Io9k16O0tTZ8qAc0gKDK72k9ssuDbKkk9MUPmCFAxrsu9/U19LzEweTDPLsz7\nwUGw3HD9clkXWW4D+QkI169D/Q==\n-----END PRIVATE KEY-----\n",
        "client_email": "accountforinfo@delegate-info-338210.iam.gserviceaccount.com"
      });
      await doc.loadInfo(); // loads document properties and worksheets
      if(doc){ 
        const sheet = doc.sheetsByIndex[1];
        var rows = await sheet.getRows();
        rows = rows.filter((row: any) => {return (row.GISCode === GIScodet);});
        if(rows.length !== 1){
          this.setState({GISCode: undefined});
        }else{
          rows[0].Signup = 'V';
          rows[0].Timestamp = Date().toLocaleString();
          rows[0].save();
          this.setState({GISCode: rows[0].GISCode});
        }
      }
    }
  }

  render(){
    // const Code = this.state.GISCode;
    
    if(this.state && this.state.GISCode){
      return (
        <Container className="APP container">
          <Row>
            <h2 className="title px-2 py-2">Welcome, {this.state.GISCode}!</h2>
          </Row>
          <Row>
            <Card body className="px-2 card">
              <Card.Title>Signin successfully!</Card.Title>

            </Card>
          </Row>
        </Container>
      );
      }else{
        
      return (
        <Container className="APP container">
        <Row>
          <h2 className="title px-2 py-2"> Signin Page</h2>
        </Row>
        <Row>
          <Card body className="px-2 card">
            <Card.Title>You can find your signin QR code inside your nametag!</Card.Title>
          </Card>
        </Row>
        
      </Container>
      );
    }
  }
}

export default Signin;
