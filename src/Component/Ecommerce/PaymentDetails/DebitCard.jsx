import { Btn, H5 } from '../../../AbstractElements';
import { DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit } from '../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Row, Label } from 'reactstrap';

const DebitCards = () => {
  return (
    <Fragment>
      <Col md="6" className="debit-card col-xxl-4 box-col-6">
        <Card>
          <CardHeader className="py-4 pb-0">
            <H5>{DebitCard}</H5>
          </CardHeader>
          <CardBody>
            <Row className="theme-form e-commerce-form">
              <FormGroup className="mb-3 col-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Full name here"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Card number"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="CVV number"
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="CVC"
                />
              </FormGroup>
              <div className="col-12">
                <Label className="col-form-label p-b-20">
                  {ExpirationDate}
                </Label>
              </div>
              <FormGroup className="mb-3 col-6 p-r-0">
                <select className="form-select" size="1">
                  {SelectMonth.map((months, i) =>
                    <option key={i}>{months}</option>
                  )}
                </select>
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <select className="form-select" size="1">
                  {SelectYear.map((years, i) =>
                    <option key={i}>{years}</option>
                  )}
                </select>
              </FormGroup>
              <div className="col-12">
                <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary' }}>
                  {Submit}
                </Btn>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default DebitCards;