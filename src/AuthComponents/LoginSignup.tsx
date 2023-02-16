import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePrimaryKey from "../Components/Hooks/usePrimaryKey";
import useIndexKey from "../CustomHooks/useIndexKey";
import { addUser, setSession } from "../Features/Slice";
import { dataHubType, userTypes } from "../Types/types";
import "./LoginSignup.css";
type MySetting = {
  keyGenerator: (lists: any) => string | undefined;
};
const LoginSignup = () => {
  const state: dataHubType = useSelector((state: dataHubType) => state);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const { keyGenerator }: MySetting = usePrimaryKey();
  const checker=useIndexKey()
  const msg = useRef<HTMLHeadingElement>(null);
  const navigate=useNavigate()

// if Already loggedIn
useEffect(()=>{
  if(state.session!='')
  navigate('/')
},[state])

//   handle Submit form
  const AuthHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    msg.current!.innerText=''
    if (login) {
      let details = state.users.filter(
        (x:any) => x.email === email && x.password === password
      );
      if (details.length === 1) {
        dispatch(setSession(details[0]));
        e.currentTarget.reset();
      } else {
        msg.current!.innerText = "wrnong Username or Password";
      }
    } else {
      const name = e.currentTarget.username.value;
       if(checker(state.users,'email',e.currentTarget.email.value)===-1)
     { dispatch(
        addUser({
          id: keyGenerator(state.users),
          name,
          role: "User",
          email,
          password,
        })
      );
      setLogin(true)
    }else{
      msg.current!.innerText = "This Email account already exist.";
    }
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center py-4">
            <a
              href="#"
              className="logo d-flex align-items-center w-auto"
              onClick={()=>navigate('/')}
            >
              <img src="376-3768060_stark-industries-logo.png" alt="Logo" style={{maxWidth:'200px'}} />
            </a>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
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
                      {/* <span className="input-group-text" id="inputGroupPrepend">
                            Email
                          </span> */}
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
                    {/* <span className="input-group-text" id="inputGroupPrepend">
                      Email
                    </span> */}
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
            <h4 ref={msg} className=""></h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
