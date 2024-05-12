import { H5, P } from '../../../AbstractElements';
import { TableRowData } from '../../../Data/DashEcommerce';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { More } from '../../../Constant';
import { Link } from 'react-router-dom';

const OurActivities = () => {
  return (
    <Fragment>
      <Col xl="4" sm="6" className="box-col-12 our-activity-table des-xl-50 des-sm-100">
        <Card>
          <CardHeader>
            <H5>Our Activities</H5>
          </CardHeader>
          <CardBody className="p-t-0">
            <div className="table-responsive groups-table">
              <Table borderless>
                <tbody>
                  {TableRowData.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <Media>
                            <div className={item.divClass}>
                              <i className={item.Icons}></i>
                            </div>
                            <Media body>
                              <span>
                                <Link to={`${process.env.PUBLIC_URL}/todo`}>
                                  {item.title}
                                </Link>
                              </span>
                              <P attrPara={{ className: 'd-block' }}>
                                {item.place}
                              </P>
                            </Media>
                          </Media>
                        </td>
                        <td>
                          <P>{item.time}</P>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="text-center">
              <a className="f-w-700 btn-more" href="#javascript">{More}...</a>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default OurActivities;