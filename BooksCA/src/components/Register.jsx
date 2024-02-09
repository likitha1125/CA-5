import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Register() {
    const initState = {
        Name: '',
        Email: '',
        Password: '',
        RepeatPassword: ''
    };

    const alertState = {
        Name: '',
        Email: '',
        Password: '',
        RepeatPassword: ''
    };

    const [regisState, setRegisState] = useState(initState);
    const [alert, setAlert] = useState(alertState);
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state for registration success message

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert(alertState);

        if (!regisState.Name || !regisState.Email || !regisState.Password || !regisState.RepeatPassword) {
            setAlert({
                ...alertState,
                Name: regisState.Name ? '' : 'Name is not filled',
                Email: regisState.Email ? '' : 'Email is not filled',
                Password: regisState.Password ? '' : 'Password is not filled',
                RepeatPassword: regisState.RepeatPassword ? '' : 'Repeat Password is not filled '
            });
            return;
        }

        if (regisState.Password.length < 10 || regisState.Password.length > 20) {
            setAlert({
                ...alertState,
                Password: 'Password must be between 10 and 20 characters'
            });
            return;
        }

        if (regisState.Password !== regisState.RepeatPassword) {
            setAlert({
                ...alertState,
                RepeatPassword: 'Repeat Password is not same'
            });
            return;
        }

        if (!regisState.Email.includes('@')) {
            setAlert({
                ...alertState,
                Email: 'Email is not valid'
            });
            return;
        }

        // If all validations pass, set registration success
        setRegistrationSuccess(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisState({
            ...regisState,
            [name]: value
        });
    };

    return (
        <div>
           <h1 className="logo">Kalvium Books</h1>
            <div className="Form">
                <h2>REGISTER</h2>
                {registrationSuccess ? (
                    <div>
                        <div id='success'>Successfully registered!</div>
                        <Link to="/"><button id='buy' >Click here to buy books!</button></Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" placeholder="Your Name" name="Name" onChange={handleChange} value={regisState.Name}></input>
                        </label>
                        <div>{alert.Name}</div>

                        <label>
                            <input type="email" placeholder="Your Email" name="Email" onChange={handleChange} value={regisState.Email}></input>
                        </label>
                        <div>{alert.Email}</div>
                        <label>
                            <input type="password" placeholder="Password" name="Password" onChange={handleChange} value={regisState.Password}></input>
                        </label>
                        <div>{alert.Password}</div>
                        <label>
                            <input type="password" placeholder="Repeat Password" name="RepeatPassword" onChange={handleChange} value={regisState.RepeatPassword}></input>
                        </label>
                        <div>{alert.RepeatPassword}</div>

                        <button type="Sign-up">Sign-Up</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;
