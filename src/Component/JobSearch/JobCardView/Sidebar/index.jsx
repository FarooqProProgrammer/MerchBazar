import React, { Fragment, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Filter from './Filter';
import Location from './Location';
import JobTitleClass from './JobTitle';
import Industry from './Industry';
import SkillClass from './Skill';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onHandelClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <Col xl="3" className="box-col-4 xl-40">
        <div className="job-sidebar md-sidebar">
          <a className="btn btn-primary  md-sidebar-toggle" href="#javascript" onClick={onHandelClick}>Job Filter</a>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''} `}>
            <div className="default-according style-1 job-accordion" id="accordionoc">
              <Row>
                <Filter />
                <Location />
                <JobTitleClass />
                <Industry />
                <SkillClass />
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default Sidebar;