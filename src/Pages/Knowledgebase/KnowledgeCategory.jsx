import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KnowledgeCategoryContain from '../../Component/Knowledgebase/Knowledge Category';
import React, { Fragment } from 'react';

const KnowledgeCategory = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="KnowledgeBase" title=" Knowledge Category" />
        </div>
        <KnowledgeCategoryContain />
      </Fragment>
    );
};
export default KnowledgeCategory;