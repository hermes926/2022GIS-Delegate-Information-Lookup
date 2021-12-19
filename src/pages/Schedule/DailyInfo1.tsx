
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import "./Schedule.css"

const DailyInfo1 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <EventComponent Time="8:30 - 11:30" Event="Opening Ceremony" Room="Shih-Liang Chien Lecture Hall" Place="Zonghe Lecture Building" Floor="2F" Color="blue"/>
                        <EventComponent Time="11:35 - 12:15" Event="Lunch Break" Room="Room 402" Place="Zonghe Lecture Building" Floor="4F" Color="blue-green"/>
                        <EventComponent Time="12:30 - 14:30" Event="Culture Festival" Room="Room 406" Place="Zonghe Lecture Building" Floor="4 - 6F" Color="green"/>
                        <EventComponent Time="14:40 - 17:00" Event="Mentor Discussion" Room="Room 406" Place="Zonghe Lecture Building" Floor="4 - 6F" Color="purple"/>
                        <EventComponent Time="18:15 - 21:00" Event="Night Tour" Room="XinYi District" Place="Taipei City" Color="black"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo1;


