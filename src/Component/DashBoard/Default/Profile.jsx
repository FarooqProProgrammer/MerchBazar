import React, { Fragment } from 'react';
import ChartistChart from 'react-chartist';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import cardcap from '../../../assets/images/dashboard/profile_img.png';
import { H5, P, Image } from '../../../AbstractElements';
import { SmallChartData1, SmallChartOption1 } from '../../../Pages/DashBoard/ChartsData/SmallChart';
import { Manager, New } from '../../../Constant';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Fragment>
      <Col xl="3" md="6" lg="6" sm="6" className="des-xl-50 xl-30 box-col-6 profile-sec">
        <Card>
          <CardHeader className="pb-0">
            <H5>Profile</H5>
          </CardHeader>
          <CardBody className="p-t-0">
            <div className="user-details-main">
              <div className="user-img">
                <Image attrImage={{
                  className: 'rounded-circle', src: `${cardcap}`, alt: 'Card image cap'
                }} />
                <span className="badge flat-badge-primary">{New}</span>
              </div>
              <div className="user-detail">
                <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                  <span>Emay Walter</span>
                </Link>
                <P>{Manager}</P>
              </div>
            </div>
            <div className="user-content">
              <div className="small-bar">
                <ChartistChart
                  className="small-chart1 flot-chart-container"
                  data={SmallChartData1}
                  options={SmallChartOption1}
                  type={'Bar'}
                  listener={{
                    'draw': function (data) {
                      if (data.type === 'bar') {
                        data.element.attr({
                          style: 'stroke-width: 3px'
                        });
                      }
                    }
                  }}
                />
              </div>
              <div className="user-content-right">
                <span>+26%</span>
                <P>Productivity </P>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Profile;