'use client';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkSignup } from "@store/session";
import { useModal } from "@context/Modal";
import InputDiv from "@components/InputDiv";
import { useRouter } from "next/navigation";
import './modals.css';

function SignupFormModal({
  className,
  key
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ firstname, setFirstName ] = useState("");
  const [ lastname, setLastName ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ errors, setErrors ] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(thunkSignup({ email, password, username, firstname, lastname }));
  };

  return (
    <div
      key={key}
      className={`modal ${className}`}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <ul className="modal-errors">
          {Object.entries(errors).map(([ err, errMsg ], idx) => (
            <li key={idx}>{err}: {errMsg}</li>
          ))}
        </ul>
        <InputDiv
          label={"Email"}
          error={errors.email}>
          <input
            className="modal-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv
          label={"Username"}
          error={errors.username}>
          <input
            className="modal-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv
          label={"FirstName"}
          error={errors.firstname}>
          <input
            className="modal-input"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv
          label={"LastName"}
          error={errors.lastname}>
          <input
            className="modal-input"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv
          label={"Password"}
          error={errors.password}>
          <input
            className="modal-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv
          label={"Confirm Password"}
          error={errors.confirmPassword}>
          <input
            className="modal-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputDiv>
        <button
          className="modal-button my-4 bg-gray-300 hover:bg-white"
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
