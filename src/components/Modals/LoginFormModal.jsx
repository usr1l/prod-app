'use client'

import { useState } from "react";
import { thunkLogin } from "@store/session";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import './modals.css';

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
    <div className="modal">
      <h1 className="modal-header">Log In</h1>
      <form className="modal-form" onSubmit={handleSubmit}>
        <ul className="modal-errors">
          {Object.entries(errors).map(([ err, errMsg ], idx) => (
            <li key={idx}>{err}: {errMsg}</li>
          ))}
        </ul>
        <label className="modal-label">
          Email
        </label>
        <input className="modal-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="modal-label">
          Password
        </label>
        <input className="modal-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
