import React, { Fragment } from 'react';
import { Col, CardBody, Row } from 'reactstrap';
import { Btn, H3, H4, LI, UL } from '../../../AbstractElements';
import { SignUp } from '../../../Constant';
import { StandardData } from '../../../Data/Ecommerce';

const Standards = () => {
  return (
    <Fragment>
      <CardBody className="pt-0">
        <Row className="pricing-block">
          {StandardData.map((item) => {
            return (
              <Col md="6" lg="3" className="box-col-6" key={item.id}>
                <div className="pricingtable">
                  <div className="pricing-header">
                    <H3>{item.title}</H3>
                  </div>
                  <div className="pricing-content">
                    <div className="price-value">
                      <div>
                        <H4>
                          {item.prize}
                          <span>{item.month}</span>
                        </H4>
                      </div>
                    </div>
                    <UL attrUL={{ className: 'simple-list pricing-list ' }}>
                      <LI>
                        <span>{item.storage1}</span>
                        {item.props1}
                      </LI>
                      <LI>
                        <span>{item.storage2}</span>
                        {item.props2}
                      </LI>
                      <LI>
                        <span>{item.storage3}</span>
                        {item.props3}
                      </LI>
                      <LI>
                        <span>{item.storage4}</span>
                        {item.props4}
                      </LI>
                      <LI>
                        <span>{item.storage5}</span>
                        {item.props5}
                      </LI>
                    </UL>
                    <div className="pricingtable-signup">
                      <Btn attrBtn={{ color: 'primary', size: 'lg' }}>
                        {SignUp}
                      </Btn>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default Standards;
