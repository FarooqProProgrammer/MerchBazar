import { CustomStateButtons } from '../../../Constant';
import { Btn, H5 } from '../../../AbstractElements';
import { FlatButtonData } from '../../../Data/Buttons';
import { Container, Row, Col, Card, CardHeader, CardBody, Input } from 'reactstrap';
import React, { Fragment } from 'react';

const FlatButtonContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            {FlatButtonData.map((item, i) =>
              <Card key={i}>
                <CardHeader className='pb-0'>
                  <H5>{item.title}</H5>
                  <span>{item.span} 
                    <code>{item.code}
                    </code> {item.detail}
                  </span>
                </CardHeader>
                <CardBody className="btn-showcase">
                  {
                    item.btnSub.map((btnItem, i) =>
                      <Btn attrBtn={{
                        color: btnItem.colorClass, size: btnItem.size && btnItem.size,
                        active: btnItem.active && true,
                        disabled: btnItem.disabled && true,
                        outline: btnItem.outline && true
                      }} key={i}
                      >
                        {btnItem.title}
                      </Btn>
                    )
                  }
                </CardBody>
              </Card>
            )}
            <Card>
              <CardHeader className='pb-0'>
                <H5>{CustomStateButtons}</H5>
                <span>{'The'} 
                  <code>{'.btn'}</code> {'class used with'} 
                  <code>&lt;{'button'}&gt;</code>, 
                  <code>&lt;{'a'}&gt;</code> {'and'} 
                  <code>&lt;{'input'}&gt;</code> {'elements.'}
                </span>
              </CardHeader>
              <CardBody className="btn-showcase">
                <Btn attrBtn={{ className: 'btn btn-square', color: 'primary' }} >{'Link'}</Btn>
                <Input className="btn btn-square btn-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                <Input className="btn btn-square btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                <Btn attrBtn={{ className: 'btn btn-square', color: 'info' }} type="submit">{'Button'}</Btn>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FlatButtonContain;