import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { WishlistTitle } from '../../../Constant';
import WishListData from './WishListData';

const WishListContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>{WishlistTitle}</H5>
              </CardHeader>
              <CardBody className="whishlist-main pt-0">
                <Row>
                  <WishListData />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
};
export default WishListContain;