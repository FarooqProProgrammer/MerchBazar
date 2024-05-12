import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H4, P, Image } from '../../../AbstractElements';
import deletee from '../../../assets/images/dashboard/mirage-delete.png';
import { AskQuestion } from '../../../Constant';
import { Link } from 'react-router-dom';

const AskQnA = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="des-xl-50 box-col-6 help-sec-main">
        <Card className="o-hidden help-sec">
          <CardBody className="p-0">
            <div className="help-desk text-center">
              <div className="help-profile">
                <div className="round-animation"><i></i><i></i></div>
                <Image attrImage={{
                  className: 'img-fluid img-100',
                  src: `${deletee}`
                }} />
              </div>
              <H4 attrH4={{ className: 'font-light' }}>Have a any question</H4>
              <P attrPara={{ className: 'font-light' }}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</P>
              <Link className="btn btn-light" to={`${process.env.PUBLIC_URL}/faq`}>
                {AskQuestion}</Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default AskQnA;