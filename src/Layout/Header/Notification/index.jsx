import { LI, P, UL } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Bell } from 'react-feather';
import { Link } from 'react-router-dom';

const Notification = () => {
    return (
      <Fragment>
        <LI attrLI={{ className: 'onhover-dropdown' }}>
          <div className="notification-box">
            <i><Bell /></i>
            <span className="badge rounded-pill badge-primary">4</span>
          </div>
          <div className="notification-dropdown onhover-show-div">
            <div className="m-3">
              <Link className="btn btn-dark w-100" to={`${process.env.PUBLIC_URL}/email/mailbox`}>You have 4 notifications</Link>
            </div>
            <UL attrUL={{ className: 'simple-line border-top' }}>
              <LI>
                <P attrPara={{ className: 'mb-0 ps-4 p-relative' }}>
                  <Link to={`${process.env.PUBLIC_URL}/email/mailbox`}>
                    <i className="fa fa-circle me-3 font-primary"> </i>Delivery processing 
                  </Link>
                  <span className="pull-right">10 min.</span>
                </P>
              </LI>
              <LI>
                <P attrPara={{ className: 'mb-0 ps-4 p-relative' }}>
                  <Link to={`${process.env.PUBLIC_URL}/email/mailbox`}>
                    <i className="fa fa-circle me-3 font-success"></i>Order Complete
                  </Link>
                  <span className="pull-right">1 hr</span>
                </P>
              </LI>
              <LI>
                <P attrPara={{ className: 'mb-0 ps-4 p-relative' }}>
                  <Link to={`${process.env.PUBLIC_URL}/email/mailbox`}>
                    <i className="fa fa-circle me-3 font-info"></i>Tickets Generated
                  </Link>
                  <span className="pull-right">3 hr</span>
                </P>
              </LI>
              <LI>
                <P attrPara={{ className: 'mb-0 ps-4 p-relative' }}>
                  <Link to={`${process.env.PUBLIC_URL}/email/mailbox`}>
                    <i className="fa fa-circle me-3 font-warning"></i>Delivery Complete
                  </Link>
                  <span className="pull-right">6 hr  </span>
                </P>
              </LI>
            </UL>
            <div className="m-3 mt-1">
            <Link className="btn btn-light w-100" to={`${process.env.PUBLIC_URL}/email/mailbox`}>View all</Link>
            </div>
          </div>
        </LI>
      </Fragment>
    );
};
export default Notification;