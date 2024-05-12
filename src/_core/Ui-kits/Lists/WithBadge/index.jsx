import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, LI, UL } from '../../../../AbstractElements';
import { WithBadges } from '../../../../Constant/index';

const WithBadge = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{WithBadges}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Cras justo odio'}<span className="badge badge-primary counter">{'14'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Dapibus ac facilisis in'}<span className="badge badge-secondary counter">{'2'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Morbi leo risus'}<span className="badge badge-success rounded-pill counter">{'1'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Dapibus ac facilisis in'}<span className="badge badge-info rounded-pill">{'100%'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Dapibus ac facilisis in'}<span className="badge badge-warning counter">{'2'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Morbi leo risus'}<span className="badge badge-danger rounded-pill">{'sale'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Cras justo odio'}<span className="badge badge-light counter">{'14'}</span></LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithBadge;
