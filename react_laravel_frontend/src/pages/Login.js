import Header from '../Component/Header';
import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const history = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/add')
        }
    }, [])

    return (
        <>
            <Header />
            <div>
                <h1>Login</h1>
            </div>
        </>
    )
}

export default Login