import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useIndexKey from "../custom_hooks/useIndexKey";
import usePrimaryKey from "../custom_hooks/usePrimaryKey";
import { addUser, setSession } from "../features/Slice";
import { dataHubType } from "../types/types";
type MySetting = {
  keyGenerator: (lists: any) => string | undefined;
};
const LoginSignup = () => {
  //get all dataset from redux which is datahubType
  const state: dataHubType = useSelector((state: dataHubType) => state);
  // dispatch function to call redux actions
  const dispatch = useDispatch();
  // login or signup toggler state
  const [login, setLogin] = useState(true);
  // generate unique id for users who signup
  const { keyGenerator }: MySetting = usePrimaryKey();
  // useIndexKey is custom hook for check email already exist or not
  const checker = useIndexKey();
  // useRef for displaying error message ex: wrong password
  const msg = useRef<HTMLHeadingElement>(null);
  // this hook for navigate through router
  const navigate = useNavigate();

  // if Already loggedIn
  useEffect(() => {
    if (state.session !== "") navigate("/");
  }, [state]);

  // set msg empty when login state changes
  useEffect(() => {
    msg.current!.innerText = "";
  }, [login]);

  //   handle form Submit for login and sign up both also don validation here and error msg propogate
  const AuthHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    msg.current!.innerText = "";
// check call for login or signup
    if (login) {
      // if for login
      let details = state.users.filter(
        (x: any) => x.email === email && x.password === password
      );
      if (details.length === 1) { 
        dispatch(setSession(details[0]));
        e.currentTarget.reset();
      } else {
        msg.current!.innerText = "wrnong Username or Password";
      }
    } else {
      // for signup block
      const name = e.currentTarget.username.value;
      if(!name){
        msg.current!.innerText = "name field cant be empty.";
      }
      if (checker(state.users, "email", e.currentTarget.email.value) !== -1) {
        msg.current!.innerText = "This Email account already exist.";
      } else if (!regEmail.test(email)) {
        msg.current!.innerText = "please Enter Valid Email";
      } else if (!regPass.test(password)) {
        msg.current!.innerText =
          "password at least contain 8 letter, a symbol, upper and lower case letters & number";
      } else {
        dispatch(
          addUser({
            id: keyGenerator(state.users),
            name,
            role: "User",
            email,
            password,
          })
        );
        setLogin(true);
      }
    }
  };

  return (
    <>
      <div className="row justify-content-center mx-auto w-100">
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center py-4">
            <a
              href="#"
              className="logo d-flex align-items-center w-auto"
              onClick={() => navigate("/")}
            >
              <img
                src="376-3768060_stark-industries-logo.png"
                alt="Logo"
                style={{ maxWidth: "120px" }}
              />
            </a>
          </div>
          <div className="card m-3">
            <div className="card-body">
              <div className="p-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  {login ? "Login to Your Account" : "Create Your Account"}
                </h5>
                <p className="text-center small">
                  {login
                    ? " Enter your username & password to login"
                    : "Fill details to signUp"}
                </p>
              </div>
              <form
                className="row g-3 needs-validation"
                onSubmit={(e) => {
                  e.preventDefault();
                  AuthHandler(e);
                }}
              >
                {!login && (
                  <div className="col-12">
                    <label htmlFor="yourUsername" className="form-label">
                      Name
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="yourUsername"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your username.
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">
                    Email
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="yourUsername"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your username.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="yourPassword"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your password!
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                      value="true"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">
                    {login ? "Login" : "Create Account"}
                  </button>
                </div>
                <div className="col-12">
                  <p className="small mb-0">
                    {login ? "Don't" : "Already"} have account?
                    <a href="#" onClick={() => setLogin((prev) => !prev)}>
                      {login ? "Create an account" : "Sign In?"}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="credits">
            <h4 ref={msg} className="fs-6 text-danger m-0 text-center"></h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
