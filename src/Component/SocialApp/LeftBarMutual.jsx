import { MutualFriends, } from '../../Constant';
import { H5, Image, Btn } from '../../AbstractElements';
import { MutualFrndData } from '../../Data/SocialApp';
import { Col, Card, CardHeader, CardBody, Media, Form, FormGroup, Input, Collapse, } from 'reactstrap';
import React, { Fragment, useState } from 'react';

const LeftBarMutual = () => {
  const [isMutual, setisMutual] = useState(true);
  return (
    <Fragment>
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0' }}>
            <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisMutual(!isMutual), databstoggle: 'collapse', datatarget: '#collapseicon14', ariaexpanded: 'isMutual', ariacontrols: 'collapseicon14' }}>{MutualFriends}</Btn></H5> </CardHeader>
          <Collapse isOpen={isMutual}>
            <CardBody className="social-status filter-cards-view">
            <Form> 
              <FormGroup>
                <Input className="form-control-social" type="search" placeholder="Search Contacts.." /> 
              </FormGroup></Form>
            {MutualFrndData.map((item) =>
              <Media key={item.id}>
                <Image attrImage={{ className: 'img-50 rounded-circle m-r-15', src: `${item.img}`, alt: 'twoImg' }} />
                <div className={`social-status ${item.socialClass}`}></div>
                <Media body>
                  <h6 className="f-w-600 d-block">{item.title}</h6>
                  <span className="d-block">{item.email}</span> 
                </Media>
              </Media>
            )}
          </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};

export default LeftBarMutual;