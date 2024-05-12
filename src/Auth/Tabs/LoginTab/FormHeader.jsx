import React, { Fragment } from 'react';
import { FormGroup } from 'reactstrap';
import { H4, P, UL } from '../../../AbstractElements';
import SocialAuth from './SocialAuth';

const FormHeader = (props) => {
    const { selected = '' } = props;
    return (
        <Fragment>
            <div className='login-header text-center'>
                <H4>{selected === 'firebase' ? 'Sign In With Firebase' : 'Sign In With Jwt'}</H4>
                <P>{'Enter your email & password to login'}</P>
            </div>
            <FormGroup>
                <UL attrUL={{ className: 'simple-list login-social1 flex-row' }}>
                    <SocialAuth />
                </UL>
            </FormGroup>
        </Fragment>
    );
};
export default FormHeader;