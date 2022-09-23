import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`; 


function ContactList() {

  const[contacts, setContacts] = useState([]);
  const {contactId} = useParams();
  const navigate = useNavigate();

  const getAllContacts = () => {
    axios.get(`${API_URL}/contacts`)      
    .then((response) => {console.log(response.data)
      setContacts(response.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllContacts();
  }, [] );



  return (
    <div>
<div className="App">
    
      <div className="bg-white">


        <main className="overflow-hidden">
          {/* Header */}
          <div className="bg-warm-gray-50">
            <div className="py-24 lg:py-8">
              <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                Contact List
                </h1>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <section className="relative bg-white" aria-labelledby="contact-heading">
            <div className="absolute h-1/2 w-full bg-warm-gray-50" aria-hidden="true" />
            {/* Decorative dot pattern */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <svg
                className="absolute top-0 right-0 z-0 -translate-x-16 translate-y-1/2 transform sm:translate-y-1/4 md:-translate-y-24 lg:-translate-y-72"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-warm-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative bg-white shadow-xl">
                <h2 id="contact-heading" className="sr-only">
                  Contact us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Contact information */}
                  <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 py-10 px-6 sm:px-10 xl:p-12">
                    {/* Decorative angle backgrounds */}
                    
                    
                    <div
                      className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                      aria-hidden="true"
                    >

                      <svg
                        className="absolute inset-0 h-full w-full"
                        width={160}
                        height={678}
                        viewBox="0 0 160 678"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                          fill="url(#linear3)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear3"
                            x1="192.553"
                            y1="325.553"
                            x2="899.66"
                            y2="1032.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <h3 className="text-lg font-medium text-white">Contact List</h3>
                    <p className="mt-6 max-w-3xl text-base text-teal-50">
                    Here you can see the list of your added contacts.
                    </p>
            
                    <ul role="list" className="mt-12 ml-24">
                      
                        <li>
                          <img
                          className="object-fill h-32 w-auto "
                          src="https://cdn3.iconfinder.com/data/icons/network-and-communications-8/32/network_contact_list_contact_log_contact_book-512.png"
                          alt="Your Company"
                          />
                        </li>
                      
                    </ul>
                  </div>

                  <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"> 
                      <div className="mt-6 flow-root">
                              <ul role="list" className="-my-5 divide-y divide-gray-200">
                                {contacts.map((contact) => (
                                  <li key={contact.id} className="py-4">
                                    <div className="flex items-center space-x-4">              
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900">{contact.firstName} {contact.lastName}</p>
                                <p className="truncate text-sm text-gray-500">{ "📞"  + contact.phone}</p>
                              </div>

                              <div>
                                <Link
                                  to={`/contactlist/${contact._id}`}
                                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-teal-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                  </svg>
                                </Link>
                              </div>
                              
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>          
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>    
      </div>
    </div>
    
  );
}

export default ContactList;
