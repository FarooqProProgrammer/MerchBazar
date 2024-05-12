import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5, H6, Image } from '../../../AbstractElements';
import { Designation, Employee_Status, Experience, Name, SkillLevel } from '../../../Constant';
import { employeeStatus } from '../../../Data/employee';
import { Link } from 'react-router-dom';

const EmoployeeStatus = () => {
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Col md="6" className="box-col-12">
        <Card className="employee-status">
          <CardHeader className=" pb-0 d-flex justify-content-between align-items-center">
            <H5>{Employee_Status}</H5>
          </CardHeader>
          <CardBody>
            <div className="user-status table-responsive">
              <Table borderless>
                <thead>
                  <tr>
                    <th scope="col">{Name}</th>
                    <th scope="col">{Designation}</th>
                    <th scope="col">{SkillLevel}</th>
                    <th scope="col">{Experience}</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeStatus.map(data => (
                    <tr key={data.id}>
                      <td className="bd-t-none u-s-tb">
                        <div className="align-middle image-sm-size">
                          <Image attrImage={{ className: 'img-radius align-top m-r-15 rounded-circle', src: `${dynamicImage(data.imagepath)}`, alt: '' }} />
                          <div className="d-inline-block">
                            <H6><Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{data.title}</Link>
                              <span className="text-muted">({data.online})</span>
                            </H6>
                          </div>
                        </div>
                      </td>
                      <td>{data.position}</td>
                      <td>
                        <div className="progress-showcase">
                          <div className="progress" style={{ height: '8px' }}>
                            <div className={`progress-bar bg-${data.classname}`} role="progressbar" style={{ 'width': data.skill }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                      <td>{data.exp}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default EmoployeeStatus;