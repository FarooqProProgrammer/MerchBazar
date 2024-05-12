import { Btn, H5, Image } from '../../../AbstractElements';
import { FriendsData } from '../../../Data/users/index';
import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody, Col, Collapse } from 'reactstrap';

const FriendsSidebar = () => {
  const [friends, setisFriends] = useState(true);
  const toggleClick = () => {
    setisFriends(!friends);
  };
  return (
    <Fragment>
      <Col xl="12" lg="6" sm="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'p-0' }}>
              <Btn attrBtn={{
                className: 'btn btn-link', databstoggle: 'collapse', databstarget: '#collapseicon4'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon4', color: 'transperant', onClick: toggleClick
              }} >Friends</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={friends}>
            <CardBody className="avatar-showcase filter-cards-view">
              {
                FriendsData.map((item) =>
                  <div className="d-inline-block friend-pic" key={item.id}>
                    <Image attrImage={{ className: 'img-50 rounded-circle', src: `${(item.img)}`, alt: '#' }} />
                  </div>
                )
              }
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};
export default FriendsSidebar;