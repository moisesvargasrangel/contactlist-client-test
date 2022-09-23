import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";

export default function ContactDetail(props) {

  const [contact, setContact] = useState(null);
  const {user} = props;

  const {contactId} = useParams();
  const navigate = useNavigate()

 useEffect(() =>{
  axios.get(`${process.env.REACT_APP_SERVER_URL}/contacts/${contactId}`)
  .then(resultado => {
   setContact(resultado.data)
  })
  .catch(console.log)
 },[]);
  

 const handleDelete = () => {
  axios.delete(`${process.env.REACT_APP_SERVER_URL}/contacts/${contactId}`)
  .then(() =>{
    navigate("/contactlist")
  })
  .catch(console.log)
 }

  return (
    <div className="bg-white">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-14">
        <div className="text-center">
          <p className="mt-0 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Contact Details
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
        
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
             
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-teal-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-teal-600 px-4 py-1 text-base font-semibold text-white">
                        Contact
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        {contact?.phone}
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-center px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">        
                          <span className="font-bold text-center">{contact?.firstName} {contact?.lastName}</span>
                        </span>            
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                   
                    <div className="mt-0">
                      <div className="rounded-lg shadow-md">
                        <Link
                          to="#"
                          className="block w-full rounded-lg border border-transparent bg-blue-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-teal-700 mb-2"
                          aria-describedby="tier-growth"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={handleDelete}
                          className="block w-full rounded-lg border border-transparent bg-red-800 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-teal-700"
                          aria-describedby="tier-growth"
                        >
                         Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
