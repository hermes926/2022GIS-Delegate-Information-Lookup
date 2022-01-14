
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import "./Schedule.css"

const DailyInfo4 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <EventComponent Time="9:00 - 12:00" Event="GIS Talk" Room="Shih-Liang Chien Lecture Hall" Place="Zonghe Lecture Building" />
                        <EventComponent Time="13:00 - 17:30" Event="Leaders Dialogue" Room="8F Mega Room" Place="W Hotel Taipei" />
                        <EventComponent Time="18:00 - 21:00" Event="Banquet" Room="8F Mega Room" Place="W Hotel Taipei" />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo4;


