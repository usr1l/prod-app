'use client';

import React, { useEffect, useState } from "react";
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
  const [ disabled, setDisabled ] = useState(true);
  const [ errors, setErrors ] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {
    if (!email ||
      !firstname ||
      !username ||
      !lastname ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword ||
      errors.length
    ) setDisabled(true);
    else setDisabled(false);
  }, [ disabled, email, firstname, username, lastname, password, confirmPassword, errors ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();  // validate form
    if (Object.keys(validationErrors).length) return setErrors(validationErrors);
    dispatch(thunkSignup({ email, password, username, firstname, lastname }))
      .then((data) => {
        if (data) setErrors(data.payload);
        else {
          setErrors({});
          closeModal();
        };
      });
  };

  const validate = () => {
    const validationErrors = {};
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;

    if (username.length < 5) validationErrors.username = 'Username must be at least 5 characters long'
    if (!emailRegex.test(email)) validationErrors.email = "Email format not valid, please try again"

    if (password.length < 6) validationErrors.password = 'Please set a password at least 6 characters long'
    return validationErrors;
  };

  return (
    <div
      key={key}
      className={`modal ${className}`}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <ul className="modal-errors">
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
          disabled={disabled}
        >Submit</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
