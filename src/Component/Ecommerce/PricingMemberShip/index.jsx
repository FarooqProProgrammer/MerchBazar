import { H5 } from '../../../AbstractElements';
import { BecomeMember, SimplePricingCard } from '../../../Constant/index';
import Standards from './Standard';
import StandardPricingcard from './StandardProcingCard';
import { Card, Col, Container, Row, CardHeader } from 'reactstrap';
import React, { Fragment } from 'react';

const PricingMembershipContain = () => {
  return (
    <Fragment>
      <Container fluid={true} >
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>{BecomeMember}</H5>
              </CardHeader>
              <Standards />
            </Card>
            <Card>
              <CardHeader>
                <H5>{SimplePricingCard}</H5>
              </CardHeader>
              <StandardPricingcard />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default PricingMembershipContain;