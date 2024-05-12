import React, { Fragment, useState } from 'react';
import { Card, CardHeader, Col, Collapse } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { Follower } from '../../../Constant';
import ListUsers from './common/ListUsers';

const FollowerSidebar = () => {
  const [isFollowings, setisFollowings] = useState(true);

  const toggleClick = () => {
    setisFollowings(!isFollowings);
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
              }} >{Follower}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFollowings}>
            <div className="collapse show" id="collapseicon8" aria-labelledby="collapseicon8" data-parent="#accordion">
              <ListUsers />
            </div>
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};
export default FollowerSidebar;