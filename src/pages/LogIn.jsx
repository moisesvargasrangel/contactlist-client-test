import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";


export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
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
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.CONTACTLIST);
    });
  }

  return (
    <>    
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            
            <div>
                
                
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Log In</h2>
                <p className="mt-2 text-sm text-gray-600">
                  You don't have an account? {' '}
                  
                  <a href="/signup" className="font-medium text-violet-400 hover:text-gray-900">
                    Sign Up Here!
                  </a>
                </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleFormSubmission} className="space-y-6 signup__form">
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
                        className="appearance-none block w-full px-3 py-2 border 
                                 border-gray-300 rounded-md shadow-sm 
                                 placeholder-gray-400 focus:outline-none 
                                 focus:ring-gray-500 
                                 focus:border-gray-500  
                                 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
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
                        className="appearance-none block w-full px-3 py-2 border 
                                  border-gray-300 rounded-md shadow-sm 
                                  placeholder-gray-400 focus:outline-none 
                                  focus:ring-gray-500 
                                  focus:border-gray-500 
                                  sm:text-sm"
                      />
                      <Link to="/forgot" className="font-light text-violet-400 hover:text-gray-900">
                    Forget your password?
                  </Link>
                                   {error && (
                                  <div className="error-block">
                                    <p>There was an error submiting the form:</p>
                                    <p>{error.message}</p>
                                  </div>
                                )}
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
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1 mt-12">
          <img
            className="absolute inset h-full w-full object-cover"
            src="https://img.freepik.com/vector-premium/refiera-concepto-amigo-manos-dibujos-animados-sosteniendo-telefono-lista-contactos-amigos-banner-estrategia-marketing-referencia-plantilla-pagina-destino-interfaz-usuario-web-aplicacion-movil-poster-pancarta-folleto_186332-211.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
