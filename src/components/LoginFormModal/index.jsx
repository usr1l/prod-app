'use client'

import { useState } from "react";
import { thunkLogin } from "@store/session";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '@app/globals.css';

function LoginFormModal() {
  const dispatch = useDispatch();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(thunkLogin(email, password));
    console.log(data);

  };

  return (
    <div className="border border-red-600">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {Object.entries(errors).map(([ err, errMsg ], idx) => (
            <li key={idx}>{err}: {errMsg}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
