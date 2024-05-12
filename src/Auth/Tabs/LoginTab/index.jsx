import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { EmailAddress, LoginWithJWT, Password, SignIn } from '../../../Constant';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { firebase_app, Jwt_token } from '../../../Config/Config';
import man from '../../../assets/images/dashboard/1.png';
import { handleResponse } from '../../../Services/Fack.Backend';
import FormHeader from './FormHeader';
import FormPassword from './FormPassword';

const LoginTab = ({ selected }) => {
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('test@123');
    const [loading, setLoading] = useState(false);
    const [togglePassword, setTogglePassword] = useState(false);
    const history = useNavigate();

    const [value, setValue] = useState(
        localStorage.getItem('profileURL' || man)
    );
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('profileURL', value);
        localStorage.setItem('Name', name);
    }, [value, name]);

    const loginAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setValue(man);
        setName('Emay Walter');
        setEmail('test@gmail.com');
        setPassword('test123');
        try {
            await firebase_app.auth().signInWithEmailAndPassword(email, password).then(function () {
                setValue(man);
                setName('Emay Walter');
                setTimeout(() => {
                    history(`${process.env.PUBLIC_URL}/dashboard/default`);
                }, 200);
            });
        } catch (error) {
            setTimeout(() => {
                toast.error('Oppss.. The password is invalid or the user does not have a password.');
            }, 200);
        }
    };
    const loginWithJwt = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: ({ email, password })
        };

        return fetch('/users/authenticate', requestOptions)
            .then(handleResponse)
            .then(user => {
                setValue(man);
                setName('Emay Walter');
                localStorage.setItem('token', Jwt_token);
                window.location.href = `${process.env.PUBLIC_URL}/dashboard/default/`;
                return user;
            });
    };

    return (
        <Fragment>
            <Form className="theme-form login-form1">
                <FormHeader selected={selected} />
                <div className="login-social-title1"><H5>Sign in with Email</H5> </div>
                <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" required="" onChange={e => setEmail(e.target.value)} defaultValue={email} />
                </FormGroup>
                <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <Input className="form-control" type={togglePassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} defaultValue={password} required="" />
                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? '' : 'show'}></span></div>
                </FormGroup>
                <FormPassword />
                <div>
                    {selected === 'firebase' ?
                        <Btn attrBtn={{ color: 'primary', disabled: loading ? loading : loading, onClick: (e) => loginAuth(e) }} >{loading ? 'LOADING...' : SignIn}</Btn>
                        :
                        <Btn attrBtn={{ color: 'primary', disabled: loading ? loading : loading, onClick: (e) => loginWithJwt(e) }} >{loading ? 'LOADING...' : LoginWithJWT}</Btn>
                    }
                </div>
            </Form>
        </Fragment>
    );
};

export default LoginTab;