import React from 'react';
import { CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';

const ChartHeader = (props) => {
    return (
        <CardHeader>
            {props.children
                ? (
                    <Row>
                        <Col xs="9">
                            <H5>{props.title}</H5>
                        </Col>
                        <Col xs="3" className="text-end">
                            {props.children}
                        </Col>
                    </Row>
                ) : (
                    <H5>{props.title}</H5>
                )}

        </CardHeader>
    );
};

export default ChartHeader;
