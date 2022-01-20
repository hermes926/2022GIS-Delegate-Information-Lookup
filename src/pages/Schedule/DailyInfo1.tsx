
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import MentorComponent from './MentorComponent';
import LunchComponent from './LunchComponent';
import "./Schedule.css"

const DailyInfo1 = (props: any) => {
    const Code = getCookie("GISCode");
    console.log(props);
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <EventComponent Time="8:30 - 11:30" Event="Opening Ceremony" Room="Shih-Liang Chien Lecture Hall" Place="Zonghe Building" />
                        <LunchComponent Time="11:35 - 12:15" Event="Lunch Break" Room={props.Day1Lunch} Place="Zonghe Building" />
                        <EventComponent Time="" Event="Culture Festival" Room={props.CF1} Place="Zonghe Building" />
                        <EventComponent Time="" Event="Culture Festival" Room={props.CF2} Place="Zonghe Building" />
                        <EventComponent Time="" Event="Culture Festival" Room={props.CF3} Place="Zonghe Building" />
                        <MentorComponent Time="14:40 - 17:00" Event="Mentor Discussion" Room={props.Day1mentor} Place="Zonghe Lecture Building"/>
                        <EventComponent Time="18:15 - 21:00" Event="Night Tour" Room="XinYi District" Place="Taipei City"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo1;


