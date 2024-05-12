import React, { Fragment } from 'react';
import { CloudDrizzle } from 'react-feather';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import { CloudHailAltFill } from '../../../Data/svgIcons';
import WeatheData from './WeatherData';

const WeatherWidgets = () => {
  return (
    <Fragment>
      <Col xl="3" sm="6" className="box-col-6 xl-50">
        <Card>
          <div className="weather-widget-two">
            <CardBody>
              <WeatheData />
              <div className="top-bg-whether">
                <CloudHailAltFill />
              </div>
              <div className="bottom-whetherinfo">
                <Row>
                  <Col className='col-6'>
                    <CloudDrizzle />
                  </Col>
                  <Col className='px-md-2 px-0 col-6'>
                    <div className="whether-content">
                      <span>India, Surat</span>
                      <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'36°F'}</H4>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default WeatherWidgets;