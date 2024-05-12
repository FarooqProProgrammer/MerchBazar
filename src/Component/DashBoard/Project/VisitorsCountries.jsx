import React, { Fragment } from 'react';
import { Map } from "pigeon-maps"
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import { Country } from '../../../Constant';

const VisitorsCountries = () => {
  return (
    <Fragment>
      <Col xl="4" className="des-xl-100 box-col-12 visitor-sec">
        <Card>
          <CardHeader className="justify-content-between">
            <H5>Visitors Countries</H5>
            <div className="center-content">
              <P>{Country}</P>
              <span>195</span>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <Map height={315} defaultCenter={[45.879, 4.6997]} defaultZoom={11}>
            </Map>
            <div className="show-value-top d-flex">
              <div className="counry-data d-inline-block">
                <div className="round bg-primary d-inline-block"></div>
                <span>South America</span>
              </div>
              <div className="counry-data d-inline-block">
                <div className="round bg-secondary d-inline-block"></div>
                <span>Europe</span>
              </div>
              <div className="counry-data d-inline-block">
                <div className="round bg-warning d-inline-block"></div>
                <span>London</span>
              </div>
              <div className="counry-data d-inline-block">
                <div className="round bg-success d-inline-block"></div>
                <span>Australia</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default VisitorsCountries;