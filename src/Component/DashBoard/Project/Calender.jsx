import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import { CalanderData } from '../../../Data/DashDefault';

const Calender = () => {
  const [setDate] = useState({ date: new Date() });
  const [startDate] = useState(new Date());
  const handleChange = date => {
    setDate(date);
  };
  return (
    <Fragment>
      <Col xl="4" className="des-xl-100 box-col-12">
        <Row>
          <Col xl="12" md="6" className="des-xl-50 box-col-6 project-calendar">
            <Card data-intro="This is Date picker">
              <CardHeader>
                <H5>calendar</H5>
                <div className="card-header-right">
                </div>
              </CardHeader>
              <CardBody>
                <div className="default-datepicker">
                  <DatePicker
                    selected={startDate}
                    inline
                    onChange={handleChange}
                  />
                </div>
              </CardBody>
              <span className="default-dots-stay overview-dots full-width-dots">
                <span className="dots-group">
                  <span className="dots dots1"></span>
                  <span className="dots dots2 dot-small"></span>
                  <span className="dots dots3 dot-small"></span>
                  <span className="dots dots4 dot-medium"></span>
                  <span className="dots dots5 dot-small"></span>
                  <span className="dots dots6 dot-small"></span>
                  <span className="dots dots7 dot-small-semi"></span>
                  <span className="dots dots8 dot-small-semi"></span>
                  <span className="dots dots9 dot-small"></span>
                </span>
              </span>
            </Card>
          </Col>
          <Col xl="12" md="6" className="des-xl-50 box-col-6 employee-sec">
            <Card>
              <CardBody>
                <div className="table-responsive groups-table emp-details-table">
                  <Table className="table-bordernone">
                    <tbody>
                      {
                        CalanderData.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                <div className="media">
                                  <div className={item.class}>
                                    <i className={item.icon}></i>
                                  </div>
                                  <div className="media-body">
                                    <span>{item.title}</span>
                                    <P>{item.place}</P>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <P>{item.time}</P>
                              </td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};
export default Calender;