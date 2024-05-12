import React, { Fragment } from 'react';
import { Card, CardBody, Col, Table } from 'reactstrap';
import { P, Image } from '../../../AbstractElements';
import { Country, Currency, Date, Name } from '../../../Constant';
import { DealerTables } from '../../../Data/DashDefault';
import { Link } from 'react-router-dom';

const DealerTable = () => {
  return (
    <Fragment>
      <Col xl="6" className="des-xl-100 xl-100 box-col-12 deals-sec">
        <Card>
          <CardBody>
            <div className="best-dealer-table responsive-tbl">
              <div className="item">
                <div className="table-responsive product-list">
                  <Table borderless>
                    <thead>
                      <tr>
                        <th>Deals</th>
                        <th>{Name}</th>
                        <th>{Date}</th>
                        <th>Projects</th>
                        <th>{Country}</th>
                        <th>{Currency}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        DealerTables.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.srno}</td>
                              <td>
                                <div className="t-title d-inline-block align-middle">
                                  <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                                    <Image attrImage={{
                                      className: 'img-40 m-r-15 rounded-circle align-top', src: `${item.img}`, alt: '', dataoriginaltitle: '', title: ''
                                    }}
                                  /></Link>
                                  <div className="status-circle bg-primary"></div>
                                  <div className="d-inline-block"><span><Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{item.name}</Link></span>
                                    <P>{item.year}</P>
                                  </div>
                                </div>
                              </td>
                              <td>{item.date}</td>
                              <td>{item.place}</td>
                              <td><i className={item.flag}></i></td>
                              <td><span className="label">{item.prize}</span></td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default DealerTable;