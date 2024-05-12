import { H5 } from '../../../../AbstractElements';
import ServiceContact from './ServiceContact';
import ServiceContactStatus from './ServiceContactStatus';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import React, { Fragment } from 'react';
import { More } from '../../../../Constant';

const AllServices = () => {
  return (
    <Fragment>
      <Col xl="7" className="box-col-12 top-sell-sec des-xl-100">
        <Card>
          <CardHeader className="pb-0">
            <H5>Services Contact</H5>
          </CardHeader>
          <CardBody>
            <ServiceContact />
            <div className="text-center">
              <a className="f-w-700 btn-more" href="#javascript">{More}...</a>
            </div>
          </CardBody>
        </Card>
      </Col>
      <ServiceContactStatus />
    </Fragment>
  );
};
export default AllServices;