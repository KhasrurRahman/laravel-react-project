import Header from '../Component/Header';
import { React, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/add')
        }
    },[])

    async function signup() {
        let data = { name, email, password }
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: "post",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data)
        })

        result = await result.json();
        console.log(result)
        localStorage.setItem("user-info", JSON.stringify(result))
        history('/add')
    }


    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>User registration</h1>
            <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} className="form-control" />
            <br />
            <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
            <br />
            <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
            <br />
            <button onClick={signup} className="btn btn-success">Sign Up</button>
        </div>
        </>
    )
}

export default Register