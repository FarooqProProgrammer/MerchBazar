import { H5 } from '../../../../AbstractElements';
import { BasicInputGroups } from '../../../../Constant';
import BacicGroup from './BasicGroup';
import BacicGroup2 from './BasicGroup2';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const InputGroupsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicInputGroups}</H5>
              </CardHeader>
              <CardBody>
                <BacicGroup />
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicInputGroups}</H5>
              </CardHeader>
              <CardBody>
                <BacicGroup2 />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default InputGroupsContain;