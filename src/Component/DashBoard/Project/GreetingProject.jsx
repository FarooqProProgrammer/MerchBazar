import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H3, P } from '../../../AbstractElements';
import ProjectGoal from './ProjectGoal';
import TodaysTaskProject from './TodaysTaskProject';

const GreetingProject = () => {
    return (
      <Fragment>
        <Col xl="8" className="des-xl-100 congrats-sec-main box-col-12">
          <Row >
            <Col md="12">
              <Card>
                <CardBody className="p-0">
                  <div className="congrats-sec">
                    <div className="congrats-content">
                      <H3>Congratulations mark jecno </H3>
                      <P>Lorem ipsum is simply dummy text of the printing and typesetting printing and typesetting industry.</P><Link className="btn btn-light learn-btn" to={`${process.env.PUBLIC_URL}/blog/blogsingle`}>Learn More<i className="fa fa-arrow-right font-primary ms-2"></i></Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <TodaysTaskProject />
            <ProjectGoal />
          </Row>
        </Col>
      </Fragment>
    );
};
export default GreetingProject;