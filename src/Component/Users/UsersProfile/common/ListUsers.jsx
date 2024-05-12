import React, { Fragment } from 'react';
import { CardBody } from 'reactstrap';
import { AddFriend } from '../../../../Constant';
import { Image } from '../../../../AbstractElements';
import { FollowersData } from '../../../../Data/users/index';

const ListUsers = () => {
  return (
    <Fragment>
      <CardBody className="social-list filter-cards-view">
        {
          FollowersData.map((item) =>
            <div className="media" key={item.id}>
              <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${(item.img)}` }} />
              <div className="media-body">
                <span className="d-block">{item.name}</span>
                <a href="#javascript">{AddFriend}</a>
              </div>
            </div>
          )
        }
      </CardBody>
    </Fragment>
  );
};

export default ListUsers;