
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import TableComponent from './TableComponent';
import MovingComponent from './MovingComponent';
import "./Schedule.css"

const DailyInfo4 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <EventComponent Time="9:00 - 12:00" Event="GIS Talk" Room="Shih-Liang Chien Lecture Hall" Place="Zonghe Building" />
                        <MovingComponent Time="12:00 - 12:30" Event="Moving to W Hotel" Bus={props.Bus} />
                        <TableComponent Time="14:00 - 14:30" Event="Leaders Dialogue" Table={props.LD1} Place="8F Mega Room, W Hotel Taipei" />
                        <TableComponent Time="14:40 - 15:10" Event="Leaders Dialogue" Table={props.LD2} Place="8F Mega Room, W Hotel Taipei" />
                        <TableComponent Time="15:20 - 15:50" Event="Leaders Dialogue" Table={props.LD3} Place="8F Mega Room, W Hotel Taipei" />
                        <TableComponent Time="18:00 - 21:00" Event="Banquet" Table={props.Banquet} Place="8F Mega Room, W Hotel Taipei" />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo4;


