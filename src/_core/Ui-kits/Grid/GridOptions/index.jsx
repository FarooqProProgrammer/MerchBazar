import React from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { ColumnOrdering, ExtraLarge, ExtraSmall, GridBehavior, GridOptions, GutterWidth, Large, Medium, Nestable, Offsets, Small } from '../../../../Constant/index';

const GridOptionsCard = () => {
  return (
    <Col sm="12">
      <Card className='grid-wrapper'>
        <CardHeader>
          <H5>{GridOptions}</H5><span>{'Bootstrap grid allows building an equal height flexbile blocks easily'}</span>
        </CardHeader>
        <CardBody className="card-body">
          <p>{'While Bootstrap uses'} <code>{'em'} </code>{'or'} <code>{'rem'} </code>{'for defining most sizes'}, <code>{'px'}</code> {'are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the'} <a href="#javascript">{'font size'}</a>.</p>
          <div className="table-responsive">
            <Table bordered striped>
              <thead>
                <tr>
                  <th></th>
                  <th className="text-center">{ExtraSmall}<br /><small>&lt;{'576px'}</small></th>
                  <th className="text-center">{Small}<br /><small>{'≥576px'}</small></th>
                  <th className="text-center">{Medium}<br /><small>{'≥768px'}</small></th>
                  <th className="text-center">{Large}<br /><small>{'≥992px'}</small></th>
                  <th className="text-center">{ExtraLarge}<br /><small>{'≥1200px'}</small></th>
                  <th className="text-center">{ExtraLarge}<br /><small>{'≥1400px'}</small></th>
                </tr>
              </thead>
              <tbody>
                <tr> 
                  <th className="text-nowrap" scope="row">{GridBehavior}</th>
                  <td>{'Horizontal at all times'}</td>
                  <td colSpan={6}>{'Collapsed to start, horizontal above breakpoints'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{'Max container width'}</th>
                  <td>{'None (auto)'}</td>
                  <td>{'540px'}</td>
                  <td>{'720px'}</td>
                  <td>{'960px'}</td>
                  <td>{'1140px'}</td>
                  <td>{'1400px'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{'className prefix'}</th>
                  <td><code>{'.col-'}</code></td>
                  <td><code>{'.col-sm-'}</code></td>
                  <td><code>{'.col-md-'}</code></td>
                  <td><code>{'.col-lg-'}</code></td>
                  <td><code>{'.col-xl-'}</code></td>
                  <td><code>{'.col-xxl-'}</code></td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{'# of columns'}</th>
                  <td colSpan={6}>{'12'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{GutterWidth}</th>
                  <td colSpan={6}>{'30px (15px on each side of a column)'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{Nestable}</th>
                  <td colSpan={6}>{'Yes'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{Offsets}</th>
                  <td colSpan={6}>{'Yes'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{ColumnOrdering}</th>
                  <td colSpan={6}>{'Yes'}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCard;