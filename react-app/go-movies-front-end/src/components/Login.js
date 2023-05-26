import { useState } from "react";
import Input from "./form/Input";
import { useOutletContext } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
// this is to import the jwt token from App.js
    const {setJwtToken} = useOutletContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === "admin@example.com"){
            setJwtToken("abc");
        }

        console.log("email/pass", email, password)
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>

                <Input
                    title="Email Adderess"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr />
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                ></input>

            </form>
        </div>
    )
}

export default Login;