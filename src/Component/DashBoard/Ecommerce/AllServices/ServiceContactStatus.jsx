import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import React, { Fragment } from 'react';
import { H5, P } from '../../../../AbstractElements';
import { Image } from '../../../../AbstractElements';
import S1 from '../../../../assets/images/dashboard-2/s_1.png';
import S2 from '../../../../assets/images/dashboard-2/s_2.png';
import ContactWithUs from './ContactWithUs';
import { Link } from 'react-router-dom';

const ServiceContactStatus = () => {
  return (
    <Fragment>
      <Col xl="5" className='box-col-12 service-contact-sec des-xl-100'>
        <Row>
          <Col xl="12" sm="6" className='des-xl-50 box-col-6 des-sm-100'>
            <Card>
              <CardHeader className=" pb-0">
                <H5>Services Contact</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive groups-table service-contact-table">
                  <Table className="table-bordernone">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-inline-block align-middle">
                            <div className="t-title">
                            <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                                <Image
                                  attrImage={{
                                    className:
                                      'img-radius img-40 align-top m-r-15 rounded-circle',
                                    src: `${S1}`,
                                    alt: '',
                                  }}
                                />
                              </Link>
                              <div className="d-inline-block">
                                <span>+1(056)5685 5684</span>
                                <P attrPara={{ className: 'd-block' }}>
                                  Marshel Medroled
                                </P>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <P>Available Now</P>
                        </td>
                        <td>
                          <div className="gradient-round">
                            <i className="fa fa-phone"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-inline-block align-middle">
                            <div className="t-title">
                              <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                                <Image attrImage={{
                                  className: 'img-radius img-40 align-top m-r-15 rounded-circle', src: `${S2}`, alt: '',
                                }}
                                />
                              </Link>
                              <div className="d-inline-block">
                                <span>+1(253) 3017 9801</span>
                                <P attrPara={{ className: 'd-block' }}>
                                  Eliyana Geloren
                                </P>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <P>Available Now</P>
                        </td>
                        <td>
                          <div className="gradient-round">
                            <i className="fa fa-phone"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <ContactWithUs />
        </Row>
      </Col>
    </Fragment>
  );
};
export default ServiceContactStatus;