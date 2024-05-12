import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5, P, Image } from '../../../../AbstractElements';
import facebook from '../../../../assets/images/dashboard-2/facebook.png';
import googleplus from '../../../../assets/images/dashboard-2/googleplus.png';
import twitter from '../../../../assets/images/dashboard-2/twitter.png';
import { Facebooks, Twitters } from '../../../../Constant';

const ContactWithUs = () => {
  return (
    <Fragment>
      <Col xl="12" sm="6" className='des-xl-50 box-col-6 des-sm-100'>
        <Card>
          <CardHeader>
            <H5>Connect With Us</H5>
            <div className="card-header-right">
            </div>
          </CardHeader>
          <CardBody className="p-t-0">
            <div className="connect-sec">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <div className="facebook-sec">
                        <Image attrImage={{ className: 'img-40', src: `${facebook}`, alt: '', title: '' }} />
                        <div className="name-user">
                          <span>{Facebooks}</span>
                          <P>680k</P>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="google-sec">
                        <Image attrImage={{ className: 'img-40', src: `${googleplus}`, alt: '', title: '' }} />
                        <div className="name-user">
                          <span>Google</span>
                          <P>546k</P>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="twitter-sec">
                        <Image attrImage={{ className: 'img-40', src: `${twitter}`, alt: '', title: '' }} />
                        <div className="name-user">
                          <span>{Twitters}</span>
                          <P>856k</P>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ContactWithUs;