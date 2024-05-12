import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { H5, H6, P } from '../../../AbstractElements';

const CalendarWidgets = () => {
  return (
    <Fragment>
      <Col sm="12" lg="6" xl="4" md="12" className="box-col-6 xl-50">
        <Card className="height-equal">
          <div className="calender-widget">
            <div className="cal-img"></div>
            <div className="cal-date">
              <H5>25<br />APRIL</H5>
            </div>
            <div className="cal-desc text-center card-body">
              <H6 attrH6={{ className: 'f-w-600' }}>I must explain to you how?</H6>
              <P attrPara={{ className: 'text-muted mt-3 mb-0' }}>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets.</P>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CalendarWidgets;