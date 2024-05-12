import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import CountUp from 'react-countup';
import { BrowserWidgetsCardData } from '../../../Data/Widgets';
import { H4, P, Image } from '../../../AbstractElements';

const BrowserWidgetsCard = () => {
  return (
    <Fragment>
      {
        BrowserWidgetsCardData.map((item) => {
          return (
            <Col md="4" sm="12" key={item.id}>
              <Card className="browser-widget">
                <CardBody className="media">
                  <div className="media-img"><Image attrImage={{ src: `${item.img}`, alt: '' }} /></div>
                  <div className="media-body align-self-center">
                    <div>
                      <P>{item.title1} </P>
                      <H4><span className="counter">
                        <CountUp end={36} /></span>%</H4>
                    </div>
                    <div>
                      <P>{item.title2} </P>
                      <H4><span className="counter">
                        <CountUp end={96} /></span>%</H4>
                    </div>
                    <div>
                      <P>{item.title3} </P>
                      <H4><span className="counter">
                        <CountUp end={46} /></span>%</H4>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })
      }
    </Fragment>
  );
};
export default BrowserWidgetsCard;