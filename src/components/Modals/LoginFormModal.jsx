'use client'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkLogin } from "@lib/store";
import { useModal } from "../../context/Modal";
import InputDiv from "@components/InputDiv";
import './modals.css';

function LoginFormModal({
  className,
  key
}) {
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(thunkLogin({ email, password }))
      .then(() => closeModal());
  };

  return (
    <div
      key={key}
      className={`modal ${className}`}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <InputDiv
          label={"Email"}
          error={errors.email}
        >
          <input className="modal-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputDiv>
        <InputDiv
          label={"Password"}
          error={errors.password}
        >
          <input className="modal-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputDiv>
        <button
          className="modal-button my-4 bg-gray-300 hover:bg-white"
          type="submit"
        >Log In</button>
      </form>
    </div>
  );
}


export default LoginFormModal;
