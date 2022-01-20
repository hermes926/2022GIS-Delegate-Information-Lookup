
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import LunchComponent from './LunchComponent';
import KeynoteComponent from './KeynoteComponent';
import MentorComponent from './MentorComponent';
import WorkComponent from './WorkComponent';
import PanelComponent from './PanelComponent';
import "./Schedule.css"

const DailyInfo3 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <KeynoteComponent Time="9:00 - 11:00" Event="Keynote Speech" Place={props.Day3Speech}  Topic={props.Speech2}/>
                        <PanelComponent Time="11:00 - 12:00" Event="Panel Discussion" Place={props.Day3Speech} />
                        <LunchComponent Time="12:15 - 12:50" Event="Lunch Break" Room={props.Day3Lunch} Place="Zonghe Lecture Building" />
                        <WorkComponent Time="13:00 - 15:00" Event="Workshop" Room={props.Day3Workshop} Place="Zonghe Lecture Building" />
                        <MentorComponent Time="15:00 - 17:00" Event="Mentor Discussion" Room={props.Day3Mentor} Place="Zonghe Lecture Building"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo3;


