import { MarkJecno, MARKJENCOEMAIL } from '../../Constant';
import Img from '../../assets/images/user/user.png';
import { H6, Image, P } from '../../AbstractElements';
import NavTab from './NavTab';
import BookmarksTabs from './BookmarksTabs';
import { Card, CardBody, Col, Container, Media, Row } from 'reactstrap';
import React, { Fragment, useState } from 'react';

const BookmarksContain = () => {
  const [Sidebar, setSidebar] = useState(false);
  const OnClickHandel = () => {
    setSidebar(!Sidebar);
  };
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl="3" className="xl-35 box-col-4">
              <div className="md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnClickHandel}>Bookmark Filter</a>
                <div className={`md-sidebar-aside ${Sidebar ? 'open' : ''}`}>
                  <Card>
                    <CardBody>
                      <div className="email-app-sidebar left-bookmark">
                        <Media>
                          <div className="media-size-email">
                            <Image attrImage={{
                              className: 'me-3 rounded-circle',
                              src: `${Img}`, alt: ''
                            }} />
                          </div>
                          <Media body>
                            <H6 attrH6={{ className: 'f-w-600' }}>{MarkJecno}</H6>
                            <P>{MARKJENCOEMAIL}</P>
                          </Media>
                        </Media>
                        <NavTab />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Col>
            <Col xl="9" md="12" className="box-col-8 xl-65">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="ps-0">
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BookmarksContain;