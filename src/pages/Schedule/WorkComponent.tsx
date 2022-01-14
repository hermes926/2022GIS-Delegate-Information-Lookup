
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { getCookie } from '../../tools/cookie';
import "./Schedule.css"

const WorkComponent = (props: any) => {
    const Code = getCookie("GISCode");
    return (
        <>
            <Accordion flush className="py-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.Time} {props.Event}</Accordion.Header>
                    <Accordion.Body className={props.Place}>
                        Topic: {props.Topic} <br />
                        At {props.Room}, {props.Place} <br />
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default WorkComponent;


