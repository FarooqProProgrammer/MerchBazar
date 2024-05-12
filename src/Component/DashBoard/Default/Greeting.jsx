import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H1, H6, P, Image } from '../../../AbstractElements';
import dashImg from '../../../assets/images/dashboard/1.png';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className='des-xl-50 box-col-6'>
        <Card className="profile-greeting">
          <div className="card-decore">
            <div className="main">
              <Image attrImage={{ className: 'img-fluid', src: `${dashImg}`, alt: 'Image description' }} /></div>
            <div className="dot dot1"></div>
            <div className="dot dot2"> </div>
            <div className="dot dot3"> </div>
            <div className="dot dot4"></div>
            <div className="cross cross1"> </div>
            <div className="cross cross2"> </div>
            <div className="cross cross3"> </div>
          </div>
          <CardBody>
            <div className="media"></div>
            <div className="greeting-user text-center">
              <div>
                <H1>Welcome </H1>
                <H6>Congratulations! Allie Grater</H6>
                <P>Have you seen our latest blog post? Why not head over there and give it a read? We're sure
                  you'll love it! </P><Link className="btn btn-light" to={`${process.env.PUBLIC_URL}/blog/blogdetail`}>Check Update</Link>
              </div>
            </div>
          </CardBody>
          <canvas id="confetti"></canvas>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Greeting;