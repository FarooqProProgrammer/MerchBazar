import React, { Fragment } from 'react';
import { P } from '../../AbstractElements';

const LikeComments = () => {
    const comment2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse sed urna in justo euismod condimentum.Fusceplacerat enim et odio molestie sagittis.';
    return (
        <Fragment>
            <P>{comment2}</P>
            <div className="like-content">
                <span>
                    <i className="fa fa-heart font-danger"></i>
                </span>
                <span className="pull-right comment-number">
                    <span>20 </span>
                    <span>
                        <i className="fa fa-share-alt me-0"></i>
                    </span>
                </span>
                <span className="pull-right comment-number">
                    <span>10 </span>
                    <span>
                        <i className="fa fa-comments-o"></i>
                    </span>
                </span>
            </div>
        </Fragment>
    );
};
export default LikeComments;