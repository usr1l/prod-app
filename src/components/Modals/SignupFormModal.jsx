'use client';

import React, { useState } from "react";
import { thunkLogin } from "@store/session";
import { useDispatch } from "react-redux";
import { useModal } from "@context/Modal";
import './modals.css';

export default function SignupFormModal() {
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ firstname, setFirstName ] = useState("");
  const [ lastname, setLastName ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ errors, setErrors ] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(thunkLogin(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  return (
    <div className="modal">
      <h1 className="modal-header">Create An Account</h1>
      <form className="modal-form" onSubmit={handleSubmit}>
        <ul className="modal-errors">
          {Object.entries(errors).map(([ err, errMsg ], idx) => (
            <li key={idx}>{err}: {errMsg}</li>
          ))}
        </ul>
        <label className="moda-label">
          Email
        </label>
        <input
          className="modal-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="modal-label">
          Username
        </label>
        <input
          className="modal-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="modal-label">
          FirstName
        </label>
        <input
          className="modal-input"
          type="text"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label className="modal-label">
          LastName
        </label>
        <input
          className="modal-input"
          type="text"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label className="modal-label">
          Password
        </label>
        <input
          className="modal-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="modal-label">
          Confirm Password
        </label>
        <input
          className="modal-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          className="modal-button my-4 hover:text-black hover:bg-white"
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
}
