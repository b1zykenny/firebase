import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/reducers/actions';

const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser)
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <button type={'submit'}>SIGN UP</button>
            </form>
        </div>
    );
};

export default Register;