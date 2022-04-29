import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/reducers/actions';

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser)
    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleAuth}>Log out</button>
        </div>
    );
};

export default Home;