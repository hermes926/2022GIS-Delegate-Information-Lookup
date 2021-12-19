
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import "./Schedule.css"

const DailyInfo2 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <EventComponent Time="9:00 - 12:00" Event="Opening Ceremony" Room="101" Place="Gong-Tong Teaching Building" Color="blue"/>
                        <EventComponent Time="12:00 - 13:00" Event="Action Project" Room="101" Place="Gong-Tong Teaching Building" Color="blue-green"/>
                        <EventComponent Time="13:00 - 14:00" Event="Culture Festival" Room="101" Place="Gong-Tong Teaching Building" Color="green"/>
                        <EventComponent Time="14:00 - 16:00" Event="Panel Discussion" Room="101" Place="Gong-Tong Teaching Building" Color="purple"/>
                        <EventComponent Time="16:00 - 17:00" Event="Break" Room="International Conference Room" Place="Main Library" Color="black"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo2;


