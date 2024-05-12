import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import { WE_ARE_COMING_SOON } from '../../../Constant';
import CountdownData from './countdownData';

const ComingSimple = () => {
    return (
        <Fragment>
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {/* <!-- Page Body Start--> */}
                <Container fluid={true} className="p-0">
                    <div className="comingsoon bg-white">
                        <div className="comingsoon-inner text-center">
                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                {/* <a href="#javascript"> */}
                                <Image attrImage={{ className: 'img-fluid', src: `${require('../../../assets/images/other-images/logo-login.png')}`, alt: '' }} />
                                {/* </a> */}
                            </Link>
                            <H5>{WE_ARE_COMING_SOON}</H5>
                            <div className="countdown" id="clockdiv">
                                <CountdownData />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default ComingSimple;