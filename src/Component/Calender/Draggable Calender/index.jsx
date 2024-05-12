import { H5 } from '../../../AbstractElements';
import { Dragging_Event } from '../../../Constant';
import DragCalendar from './DragCalendar';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const DraggableContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>{Dragging_Event}</H5>
              </CardHeader>
              <CardBody>
                <div className="basic-calendar">
                  <Row>
                    <DragCalendar />
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DraggableContain;