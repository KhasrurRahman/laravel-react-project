import Header from '../Component/Header';
import { React,useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const history = useNavigate()
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    async function login() {
        let data = {email,password}
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method: "post",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data)
        });

        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result))
        history('/add')
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>User Login</h1>
                <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={login} className="btn btn-success">Login</button>
            </div>
        </>
    )
}

export default Login