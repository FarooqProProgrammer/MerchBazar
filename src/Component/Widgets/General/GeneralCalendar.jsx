import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { H2, P } from '../../../AbstractElements';

const GeneralCalendar = () => {
  // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setDate(date);
  };
  return (
    <Fragment>
      <Col xl="6" className="xl-100 box-col-12">
        <Card>
          <CardBody className="cal-date-widget">
            <Row>
              <Col xl="6" xs="12" md="6" sm="6">
                <div className="cal-info text-center">
                  <div>
                    <H2>{'24'}</H2>
                    <div className="d-inline-block">
                      <span className="b-r-dark pe-3">{'March'}</span>
                      <span className="ps-3">{'2022'}</span>
                    </div>
                    <P>There is no minimum donation, any sum is appreciated</P>
                  </div>
                </div>
              </Col>
              <Col xl="6" xs="12" md="6" sm="6">
                <div className="cal-datepicker">
                  <div className="datepicker-here float-sm-end" >
                    <DatePicker
                      selected={startDate}
                      onChange={handleChange}
                      inline
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default GeneralCalendar;