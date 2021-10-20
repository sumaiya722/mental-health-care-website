import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle } = useAuth();
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleRegistration = e => {
        console.log(email, password)
        e.preventDefault();
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please Register</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label onBlur={handlePasswordChange} htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <br /> <br /> <br />
            <div>------------</div>
            <br /> <br /> <br />
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;