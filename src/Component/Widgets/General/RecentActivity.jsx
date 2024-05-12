import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import { RecentActivityData } from '../../../Data/Widgets';

const RecentActivity = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="box-col-12">
        <div>
          <Card>
            <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
              <H5 attrH5={{ className: 'text-uppercase' }}>Recent Activity</H5>
            </CardHeader>
            <CardBody>
              <div className="crm-activity">
                <UL className="custom-scrollbar">
                  {
                    RecentActivityData.map((item) => {
                      return (
                        <LI attrLI={{ className: 'media' }} key={item.id}>
                          <span className={item.class}>{item.letter}</span>
                          <div className="align-self-center media-body">
                            <H6 attH6={{ className: 'mt-0' }}>{item.title}</H6>
                            <UL attrUL={{ className: 'simple-list dates d-flex flex-row' }}>
                              <LI>25 July 2022</LI>
                              <LI>20 hours ago</LI>
                            </UL>
                          </div>
                        </LI>
                      );
                    })
                  }
                  <LI attrLI={{ className: 'media' }}>
                    <div className="align-self-center media-body">
                      <UL attrUL={{ className: 'simple-list dates d-flex flex-row' }}>
                        <LI >25 July 2022</LI>
                        <LI >20 hours ago</LI>
                      </UL>
                    </div>
                  </LI>
                </UL>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};
export default RecentActivity;