import React, { Fragment, useContext } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import JobSearchContext from '../../../../_helper/JobSearch';
import two from '../../../../assets/images/job-search/6.jpg';
import { H6, Image, P } from '../../../../AbstractElements';
import { SeniorUXDesigner } from '../../../../Constant';

const MainDataCard = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
    <Fragment>
      {jobData.slice(0, 4).map((data, id) => {
        return (
          <Col xl="6" key={id} className='xl-100'>
            <Card>
              <div className="job-search">
                <CardBody>
                  <Media>
                    <Image attrImage={{
                      className: 'img-40 img-fluid m-r-20',
                      src: require(`../../../../assets/images/${data.logo}`), alt: ''
                    }} />
                    <Media body>
                      <H6 attrH6={{ className: 'f-w-600' }}>
                        <a href="#javascript">{data.job_name}</a>
                        {data.badgeType === 'primary' ? (
                          <span className="badge badge-primary pull-right">
                            {data.badgeValue}
                          </span>
                        ) : (
                          ''
                        )}
                      </H6>
                      <P>
                        {data.job_area} <span>{data.job_city}</span>
                        <span>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning-o"></i>
                        </span>
                      </P>
                    </Media>
                  </Media>
                  <P>{data.Job_description}</P>
                </CardBody>
              </div>
            </Card>
          </Col>
        );
      })}
      <Col xl="12">
        <Card>
          <div className="job-search">
            <CardBody>
              <Media>
                <Image attrImage={{
                  className: 'img-40 img-fluid m-r-20', src: `${two}`,
                  alt: ''
                }} />
                <Media body>
                  <H6 attrH6={{ className: 'f-w-600' }}>
                    <a href="#javascript">{SeniorUXDesigner}</a>
                    <span className="pull-right">{'5 days ago'}</span>
                  </H6>
                  <P>{'Sutherland'}{' '}
                    <span>{'Lelystad, Netherlands'} </span>
                    <span>
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star font-warning"></i>
                      <i className="fa fa-star font-warning-half-o"></i>
                      <i className="fa fa-star font-warning-o"></i>
                    </span>
                  </P>
                </Media>
              </Media>
              <P> {'Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.'} </P>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default MainDataCard;