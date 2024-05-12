import React, { Fragment } from 'react';
import { H6, P, UL, LI, Btn } from '../../../../AbstractElements';
import { AgencyExperience, Perks, Share } from '../../../../Constant';
import { JobDescriptionData, onlyDescription, QualificationsData } from '../../../../Data/Jobsearch';

const JobDescription = () => {
  return (
    <Fragment>
      <div className="job-description">
        <H6>Job Description</H6>
        <P attrPara={{ className: 'text-start' }} >{onlyDescription}</P>
      </div>
      <div className="job-description">
        {JobDescriptionData.map((item) => {
          return (
            <LI key={item.id}>{item.data}</LI>
          );
        })}
        <div className="job-description">
          <H6>Qualifications </H6>
          <UL>
            {QualificationsData.map((item) => {
              return (
                <LI key={item.id}>{item.data}</LI>
              );
            })}
          </UL>
        </div>
      </div>
      <div className="job-description">
        <H6>{AgencyExperience}</H6>
        <UL>
          <LI>Experience working with Agile development teams</LI>
          <LI>Experience with RITE method usability testing</LI>
          <LI>Experience in visual and motion design; ability to translate UX design into high quality visuals</LI>
          <LI>Mastery of Sketch & InVision</LI>
          <LI>Knowledge of mobile or front-end web programming</LI>
        </UL>
      </div>
      <div className="job-description">
        <H6>{Perks}</H6>
        <UL>
          <LI>Competitive pay</LI>
          <LI>Competitive medical, dental, and vision insurance plans</LI>
          <LI>-proviCompanyded 401(k) plan</LI>
          <LI>Paid vacation and sick time</LI>
          <LI>Free snacks and beverages</LI>
        </UL>
      </div>
      <div className="job-description">
        <Btn attrBtn={{ className: 'btn me-2', color: 'primary', type: 'button' }}>
          <span>
            <i className="fa fa-check" ></i>
          </span> Save this job
        </Btn>
        <Btn attrBtn={{ className: 'btn', color: 'primary', type: 'button' }} >
          <span>
            <i className="fa fa-share-alt"></i>
          </span> {Share}
        </Btn>
      </div>
    </Fragment>
  );
};

export default JobDescription;