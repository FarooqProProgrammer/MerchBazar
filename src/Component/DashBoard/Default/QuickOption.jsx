import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5, H6, P } from '../../../AbstractElements';
import { QuickOptionData } from '../../../Data/DashDefault';

const QuickOption = () => {
  return (
    <Fragment>
      <Col xl="4" lg="12" md="6" className="des-md-55 des-xl-55 xl-50 box-col-6 monthly-earning-sec">
        <Card>
          <CardHeader className="justify-content-between">
            <H5>Quick Option</H5>
            <div className="center-content">
              <div className="center-content-left">
                <P>Total transaction</P>
                <span className="counter">66548400 </span>
              </div>
            </div>
          </CardHeader>
          <CardBody className="p-t-0">
            <Row className="options-main">
              {
                QuickOptionData.map((item) => {
                  return (
                    <div className="col-4" key={item.id}>
                      <div className="option-box">
                        <i className={item.class}></i>
                        <H5>{item.price}</H5>
                        <H6>{item.title}</H6>
                      </div>
                    </div>
                  );
                })
              }
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default QuickOption;