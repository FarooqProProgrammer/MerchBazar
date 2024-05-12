import React, { Fragment } from 'react';
import { FastForward } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import Smiley from '../../../assets/images/smiley.png';
import user4 from '../../../assets/images/user/4.jpg';
import user5 from '../../../assets/images/user/5.jpg';
import { Image } from '../../../AbstractElements';

const RecentMessages = () => {
  return (
    <Fragment>
      <Col xl="4" lg="12" md="6" className="des-md-45 xl-50 des-xl-45 box-col-6 dash-chat">
        <Card>
          <CardHeader className="pb-0">
            <H5>Recent messages</H5>
          </CardHeader>
          <CardBody>
            <div className="chat-box dashboard-chat">
              <div className="chat">
                <div className="media left-side-chat">
                  <a href="#javascript"><Image attrImage={{
                    className: 'rounded-circle chat-user-img img-40 me-2',
                    src: `${user4}`, alt: ''
                  }} /></a>
                  <div className="media-body">
                    <div className="message-main">
                      <P attrPara={{ className: 'mb-0' }}>Hi I am Alan,can you help me to find best admin?.</P>
                    </div>
                  </div>
                </div>
                <div className="media right-side-chat">
                  <div className="media-body text-end">
                    <div className="message-main">
                      <P attrPara={{ className: 'pull-right' }}>Sure, wingo is best admin for your project, you can check it
                        <a href="https://themeforest.net/user/pixelstrap/portfolio"> Here</a>
                      </P>
                    </div>
                  </div>
                  <a href="#javascript"><Image attrImage={{
                    className: 'rounded-circle chat-user-img img-40 m-l-10',
                    src: `${user5}`, alt: ''
                  }} /></a>
                </div>
                <div className="media m-t-10 left-side-chat">
                  <a href="#javascript">
                    <Image attrImage={{
                      className: 'rounded-circle chat-user-img img-40 me-2', src: `${user4}`, alt: ''
                    }} /></a>
                  <div className="media-body">
                    <div className="message-main">
                      <P>I checked it's nice theme, Thanks man.</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media chat-footer bg-primary">
              <a href="#javascript">
                <Image attrImage={{
                  className: 'img-fluid imogi',
                  src: `${Smiley}`, alt: ''
                }} /></a>
              <div className="media-body">
                <Input className="form-control" type="text" placeholder="Type your message" required="" />
              </div>
              <a className="d-flex" href="#javascript"><FastForward /></a>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default RecentMessages;