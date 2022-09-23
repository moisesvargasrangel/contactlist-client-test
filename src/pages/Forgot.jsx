import React, { Component } from 'react'
import axios from 'axios';
 

export class Forgot extends Component {

  handleSubmit = e => {
    e.preventDefault();
 

  const data = {
    email: this.email
  };

  axios.post('forgot', data).then(
    res => {
      console.log(res)
    }
  ).catch(
    err => {
      console.log(err)
    }
  )
};

render() {
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={e => this.email = e.target.value}
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

export default Forgot
      





