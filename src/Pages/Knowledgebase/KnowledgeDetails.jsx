import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KnowledgeDetailContain from '../../Component/Knowledgebase/Knowledge Details';
import React, { Fragment } from 'react';

const KnowledgeDetails = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="KnowledgeBase" title=" Knowledge Details" />
        </div>
        <KnowledgeDetailContain />
      </Fragment>
    );
};
export default KnowledgeDetails;