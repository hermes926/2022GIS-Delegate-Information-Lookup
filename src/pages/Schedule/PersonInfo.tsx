import React from 'react';
import { Card, Table} from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import "./Schedule.css"

const PersonInfo = () => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Card body className="card">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <td>GIS Code</td>
                    <td>{Code}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>Albert Lin</td>
                    </tr>
                    <tr>
                    <td>Action Project</td>
                    <td>Green Hunting</td>
                    </tr>
                    <tr>
                    <td>Team</td>
                    <td>A-05</td>
                    </tr>
                    <tr>
                    <td>Dietary Restrictions</td>
                    <td>None</td>
                    </tr>
                    <tr>
                    <td>Accomodation</td>
                    <td>No</td>
                    </tr>
                    
                </tbody>
                </Table>
            </Card>
        </>
    );
};

export default PersonInfo;
