import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import RegisterFrom from './RegisterFrom';
import imgg from '../../../assets/images/login/login_bg.jpg';

const RegisterSimple = () => {
    return (
        <Fragment>
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col xs='12' className="p-0">
                            <div className="login-card img-fluid bg-img-cover" style={{
                                backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block'
                            }}>
                                <RegisterFrom />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment >
    );
};

export default RegisterSimple;