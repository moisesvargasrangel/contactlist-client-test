import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'


const navigation = [
  { name: 'Contact List', href: '/contactlist', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  const {user, handleLogout} = props;
  return (
    <Disclosure as="nav" className="bg-teal-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">    
                <div className="flex flex-shrink-0 items-center ">
                  <a href='/' className='hover:bg-teal-700'>
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://cdn-icons-png.flaticon.com/512/1915/1915648.png"
                      alt="Your Company"
                      />                  
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://cdn-icons-png.flaticon.com/512/1915/1915648.png"
                      alt="Your Company"
                      />
                      </a>
                </div>
              </div>

            {/* IF NOT LOGGED IN */}        
                <div className="flex items-center">
                {!user && (
                <>
                  <div className="flex-shrink-0 ml-1">
                    <a href="/signup">
                    <button                  
                      type="button"
                      className="relative inline-flex items-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >                    
                    <span>Sign Up</span>
                    </button>
                    </a>
                  </div>
                  <div className="flex-shrink-0 ml-1">
                    <a href="/login">
                    <button                  
                      type="button"
                      className="relative inline-flex items-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >                    
                      <span>Log In</span>
                    </button>
                    </a>
                  </div>
                </>
              )}

            {/* IF LOGGED IN */}
                {user && (
                  <>
                    <div className=' text-white px-4 py-2 rounded-md text-sm font-medium'>
                          Welcome <b>{user?.username}</b>  
                    </div>

                    <div className="relative inline-flex items-center rounded-md border border-transparent bg-teal-700 px-4 py-2 mr-2 text-sm font-medium text-white shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-800">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current  
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="flex-shrink-0">
                        <a href="/newcontact">
                        <button                  
                          type="button"
                          className="relative inline-flex items-center rounded-md border border-transparent bg-teal-700 px-4 py-2 mr-2 text-sm font-medium text-white shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                          <span>Add Contact</span>
                        </button>
                        </a>
                      </div>               
                      <button
                        onClick={handleLogout}                            
                        className="relative inline-flex items-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-800">
                                                  
                        Log Out
                      </button>
                  </>
                )}
                                
            </div> 
          </div>
        </div>       
        </>
      )}
    </Disclosure>
  )
}
