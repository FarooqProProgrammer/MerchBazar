import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Completed } from '../../../Constant';
import { H5, P } from '../../../AbstractElements';
import { TodayProject } from '../../../Data/DashDefault';

const TodaysTaskProject = () => {
  return (
    <Fragment>
      <Col md="6" className="box-col-12 box-col-6 today-task-sec">
        <Card>
          <CardHeader className="justify-content-between pb-0">
            <H5>Today Task</H5>
            <div className="center-content">
              <P>5 Task</P>
              <span>{Completed}</span>
            </div>
          </CardHeader>
          <CardBody>
            <div className="table-responsive task-details">
              <Table className="table-bordernone">
                <tbody>
                  {
                    TodayProject.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <span><Link to={`${process.env.PUBLIC_URL}/tasks`}>{item.task}</Link></span>
                            <P>{item.time}</P>
                          </td>
                          <td className="progress-showcase">
                            <div className="progress sm-progress-bar">
                              <div className={item.class} role="progressbar" style={{ width: item.width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <P>{item.percent}</P>
                          </td>
                          <td>
                            <Link className={item.btnclass} to={`${process.env.PUBLIC_URL}/tasks`}>{item.btn}</Link>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </div>
            <div className="text-center">
              <a className="f-w-700" href="#javascript">More...</a>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TodaysTaskProject;
