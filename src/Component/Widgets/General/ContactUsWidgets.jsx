import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ContactUs, Email, Message, SEND_IT, YourName } from '../../../Constant';
import { Btn, H5 } from '../../../AbstractElements';
import { Link } from 'react-router-dom';

const ContactUsWidgets = () => {
  return (
    <Fragment>
      <Col sm="12" lg="6" xl="8" md="12" className="box-col-6 xl-50">
        <Card className="height-equal">
          <CardHeader>
            <H5>{ContactUs}</H5>
          </CardHeader>
          <CardBody className="contact-form">
            <Form className="theme-form">
              <div className="form-icon">
                <i className="icofont icofont-envelope-open"></i>
              </div>
              <FormGroup className="mb-2">
                <Label for="exampleInputName">{YourName}</Label>
                <Input className="form-control" id="exampleInputName" type="text" placeholder="John Dio" />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label className="col-form-label" htmlFor="exampleInputEmail1">{Email}</Label>
                <Input className="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label className="col-form-label" htmlFor="exampleInputEmail1">{Message}</Label>
                <textarea className="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
              </FormGroup>
              <div className="text-sm-end">
                <Btn attrBtn={{ className: 'btn btn-primary', color: 'primary', type: 'reset' }}><Link to={`${process.env.PUBLIC_URL}/contacts`}>{SEND_IT}</Link></Btn>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ContactUsWidgets;