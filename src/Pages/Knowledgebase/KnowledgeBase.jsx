import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KnowledgeBaseContain from '../../Component/Knowledgebase/Knowledgebase';
import React, { Fragment } from 'react';

const KnowledgeBase = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="KnowledgeBase" title=" Knowledge Base" />
        </div>
        <KnowledgeBaseContain />
      </Fragment>
    );
};
export default KnowledgeBase;