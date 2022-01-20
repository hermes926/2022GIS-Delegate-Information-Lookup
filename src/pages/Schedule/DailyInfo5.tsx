
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import LunchComponent from './LunchComponent';
import "./Schedule.css"

const DailyInfo5 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <EventComponent Time="9:00 - 12:00" Event="Action Project Exhibition" Room="Basement, Room 103, 104" Place="First Student Activity Center" />
                        <LunchComponent Time="12:15 - 12:50" Event="Lunch Break" Room={props.Day5Lunch} Place="Zonghe Building" />
                        <EventComponent Time="13:00 - 14:00" Event="Action Project Presentation" Room="Shih-Liang Chien Lecture Hall" Place="Zonghe Building" />
                        <EventComponent Time="14:00 - 15:00" Event="Coffee Break" Room="Room 401 - 403, 501 - 503" Place="Zonghe Building" />
                        <EventComponent Time="15:00 - 16:30" Event="Closing Ceremony" Room="Shih-Liang Chien Lecture Hall" Place="Zonghe Building" />
                        <EventComponent Time="18:00 - 21:00" Event="After Party" Room="First Floor" Place="Terminal C - C.C.Work" />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo5;


