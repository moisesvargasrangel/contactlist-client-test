import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { username, password, email } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
      email,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.CONTACTLIST);
    });
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>          
            <p className="mt-2 text-center text-sm text-gray-600">
              Do you already have an accout? {' '}              
                <a href="/login" className="font-medium text-teal-600 hover:text-gray-900">
                  Log In Here!
                </a>
            </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleFormSubmission} className="space-y-6 auth__form"  action="#" method="POST">

              <div>
                <label htmlFor="input-username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="input-username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="input-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                    required
                    minLength="8"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  {error && (
                  <div className="error-block">
                    <p>There was an error submiting the form:</p>
                    <p>{error.message}</p>
                  </div>
                )}                  
                </div>
              </div>

           

              <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button__submit
                  w-full flex justify-center 
                  py-2 px-4 border border-transparent 
                  rounded-md shadow-sm text-sm font-medium 
                  text-white 
                  bg-teal-600
                  hover:bg-teal-700
                  focus:outline-none focus:ring-2 
                  focus:ring-offset-2 focus:ring-grey-500"
                >
                  Sign Up
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
