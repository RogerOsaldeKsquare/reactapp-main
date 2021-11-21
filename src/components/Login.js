import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Login() {
const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLoginEmail = (event) => {
    event.preventDefault();

    if (email !== 'example@example.com' || password !== 'password') {
        localStorage.setItem('authorized', '0');
        setShowError(true) 
        return
    };
    localStorage.setItem('authorized', '1');
    navigate('/pagination');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isValidLogin = () => {
    return email?.length && password?.length;
  };
    return (
    <div>
            <form onSubmit={handleLoginEmail}>
      <div>
        <TextField
          label="Email"
          placeholder="test@test.com"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
          fullWidth
        ></TextField>
        <div></div>
        <TextField
          label="Password"
          placeholder="Password"
          type={"password"}
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
          fullWidth
        ></TextField>
      </div>

      <div>
        <div className={"Button"}>
          <Button type="submit" disabled={!isValidLogin()} variant="contained" fullWidth>
            LOG IN
          </Button>
        </div>
      </div>
    </form>
        </div>
    )
}

export default Login
