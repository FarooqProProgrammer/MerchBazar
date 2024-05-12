import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import { ArticalsData } from '../../../Data/KnowledegesBase';

const Articals = () => {
  return (
    <Fragment>
      {
        ArticalsData.map((item) => {
          return (
            <Col xl="4" className={`${item.class ? 'xl-100 box-col-12' : ' xl-50 col-md-6 box-col-6'}`} key={item.is}>
              <Card className="bg-primary">
                <CardBody>
                  <Media className="faq-widgets">
                    <Media body>
                      <H5>{item.title}</H5>
                      <P>{item.para}</P>
                    </Media>{item.icon}
                  </Media>
                </CardBody>
              </Card>
            </Col>
          );
        })
      }
    </Fragment >
  );
};
export default Articals;