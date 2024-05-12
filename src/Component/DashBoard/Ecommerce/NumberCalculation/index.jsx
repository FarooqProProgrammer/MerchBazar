import NumberOfFollowers from './NumberOfFollowers';
import NumberOfMeeting from './NumberOfMeeting';
import NumberOfOrders from './NumberOfOrders';
import { Col, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const NumberOfCalculation = () => {
    return (
      <Fragment>
        <Col xl="7" className="box-col-12 des-xl-100 meeting-sec">
          <Row>
            <NumberOfMeeting />
            <NumberOfFollowers />
            <NumberOfOrders />
          </Row>
        </Col>
      </Fragment>
    );
};
export default NumberOfCalculation;