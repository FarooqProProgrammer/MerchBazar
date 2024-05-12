import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { H4, H5 } from '../../../AbstractElements';
import { socialHandelData } from '../../../Data/Widgets';
import { Like, Post } from '../../../Constant';

const SocialHandle = () => {
  return (
    <Fragment>
      {
        socialHandelData.map((item) => {
          return (
            <Col sm="6" xl="3" lg="6" className="box-col-6 xl-25" key={item.id}>
              <Card className="social-widget-card">
                <CardBody>
                  <div className={item.class1} data-label="50%">
                    <i className={item.class2}></i></div>
                  <H5 attrH5={{ className: 'b-b-light' }}>{item.title}</H5>
                  <Row>
                    <Col className="text-center b-r-light"><span>{Post}</span>
                      <H4 attrH4={{ className: 'counter mb-0' }}>
                        <CountUp end={6589} /></H4>
                    </Col>
                    <Col className="text-center"><span>{Like}</span>
                      <H4 attrH4={{ className: 'counter mb-0' }}>
                        <CountUp end={75269} /></H4>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          );
        })
      }
    </Fragment>
  );
};
export default SocialHandle;