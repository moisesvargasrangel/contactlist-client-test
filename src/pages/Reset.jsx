import React, { Component } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
 

export class Reset extends Component {
  state={};

  handleSubmit = e =>{
    e.preventDefault()

    const data = {
      token: this.props.match.params.id,
      password: this.password,
      password_confirm: this.password_confirm
    }

    axios.post('reset', data).then(
      res => {
        console.log(res);
        this.setState({
          reset: true
        });
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };

render() {
  if(this.state.reset){
    return <Navigate to={'/login'}/>
  }
  return (
       <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>          
            <p className="mt-2 text-center text-sm text-gray-600">
            Did you forget your password?               
                
            </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={this.handleSubmit} className="space-y-6 auth__form"  action="#" method="POST">

              <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      type="text"
                      name="password"
                      placeholder="Password"
                      onChange={e => this.password = e.target.value}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
              </div>

              <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password Confirm
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      type="text"
                      name="password_confirm"
                      placeholder="Password Confirm"
                      onChange={e => this.password_confirm = e.target.value}
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
                 Send Email
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </> 
    

  )
}
}

export default Reset
      







