
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import  EventComponent from './EventComponent';
import KeynoteComponent from './KeynoteComponent';
import PanelComponent from './PanelComponent';
import "./Schedule.css"

const DailyInfo2 = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion className="py-2 card">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Your Day {props.day} Schedule</Accordion.Header>
                    <Accordion.Body>
                        <KeynoteComponent Time="9:00 - 11:00" Event="Keynote Speech" Place={props.Day2Speech}  Topic={props.Speech1}/>
                        <PanelComponent Time="11:00 - 12:00" Event="Panel Discussion" Place={props.Day2Speech} />
                        <EventComponent Time="14:30 - 17:30" Event="Carnival 2022" Room="Multi-fuctional Exhibition Center" Place="Songshan Cultural and Creative Park"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default DailyInfo2;


