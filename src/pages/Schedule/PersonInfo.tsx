import React from 'react';
import { Card, Table} from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import "./Schedule.css";

const PersonInfo = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Card body className="card">
            <Table striped bordered hover>
                <thead className="title">
                    <tr>
                    <td>GIS Code</td>
                    <td>{Code}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{props.Name}</td>
                    </tr>
                    <tr>
                        <td>Action Project Topic</td>
                        <td>{props.Topic}</td>
                    </tr>
                    <tr>
                        <td>Team</td>
                        <td>{props.Team}</td>
                    </tr>
                    <tr>
                        <td>Dietary Restrictions</td>
                        <td>{props.Diet}</td>
                    </tr>
                    
                </tbody>
                </Table>
            </Card>
        </>
    );
};

export default PersonInfo;
