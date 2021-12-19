
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import "./Schedule.css"

const EventComponent = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion flush className="py-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.Time} {props.Event}</Accordion.Header>
                    <Accordion.Body className={props.Color}>
                     At {props.Room}, {props.Place} {props.Floor}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default EventComponent;


