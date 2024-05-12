import { H5, Image } from '../../../AbstractElements';
import { CreditCard } from '../../../Constant';
import card from '../../../assets/images/ecommerce/card.png';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const CreditCards = () => {
  return (
    <Fragment>
      <Col sm="12" className='col-xxl-8 box-col-12'>
        <Card>
          <CardHeader className="pb-0 py-4">
            <H5>{CreditCard}</H5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="7">
                <Form className="theme-form mega-form">
                  <FormGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Card number"
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Input className="form-control" type="date" />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Name on card"
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <select className="form-select" size="1">
                      <option>Select Type</option>
                      <option>Master</option>
                      <option>Visa</option>
                    </select>
                  </FormGroup>
                </Form>
              </Col>
              <Col md="5" className="text-center">
                <Image
                  attrImage={{
                    className: 'img-fluid',
                    src: `${card}`,
                    alt: ''
                  }}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CreditCards;