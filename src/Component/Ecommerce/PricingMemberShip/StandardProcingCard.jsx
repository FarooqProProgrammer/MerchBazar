import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Btn, H1, H3, H6 } from '../../../AbstractElements';
import { LorumIpsum, Purchase } from '../../../Constant';
import { SmallCard } from '../../../Data/Ecommerce';

const StandardPricingcard = () => {
  return (
    <Fragment>
      <CardBody className="pt-0">
        <Row className=" pricing-block">
          {
            SmallCard.map((item) => {
              return (
                <Col xl="3" sm="6" className="box-col-6 xl-50" key={item.id}>
                  <Card className="pricing-simple">
                    <div className="pricing-content">
                      <H3>{item.title}</H3>
                      <H1>{item.prize}</H1>
                      <H6 attrH6={{ className: 'mb-0' }}>{LorumIpsum}</H6>
                    </div>
                    <Btn attrBtn={{ color: 'primary' }}>{Purchase}</Btn>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default StandardPricingcard;
