import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Stack from "react-bootstrap/Stack";
import React from 'react';
const styles={
container:{
height:"100%",
width:"100%",

backgroundImage: "url(https://images.unsplash.com/photo-1508505459706-81c1f1b3d467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hZ2ljJTIwbXVzaHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60)",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
},

wrapper:{
 // background:"white",
  //marginTop:"3%"
},
chatbox: {
  margin: "2%",
  color: "black",
  boxShadow: "0px 0px 10px black",
  //border: "3px solid green",
  //textAlign: "center",
  fontFamily: "Abril Fatface",
  //letterSpacing: "15px",
  //fontSize: "xxx-large",
  background: "white",
  borderRadius: "10px",
  //padding: "3%",
  opacity: ".8",
  height:"100%",
  
},
feed: {
  margin: "3%",
  color: "black",
  boxShadow: "0px 0px 3px gray",
  //border: "3px solid green",
  textAlign: "center",
  fontFamily: "Abril Fatface",
  //letterSpacing: "15px",
  //fontSize: "xxx-large",
  background: "white",
  borderRadius: "10px",
  //padding: "3%",
  opacity: "1",
  height:"85vh"
},
input: {
  margin: "3%",
  color: "black",
  boxShadow: "0px 0px 3px gray",
  //border: "3px solid green",
  //textAlign: "center",
  fontFamily: "Abril Fatface",
  //letterSpacing: "15px",
  //fontSize: "xxx-large",
  //background: "green",
  borderRadius: "10px",
  //padding: "3%",
  opacity: "1",
  height:"8vh"
},
textarea:{
  height:"8vh",
  resize:"none",
  border:"none",
  borderRadius:"10px",
},
button:{
  width:"10%",
  backgroundImage: "url(https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60)",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
fontWeight:"x-bold",
borderRadius:"8px",
padding:"0%",
border:"none",
// boxShadow: "0px 0px 3px gray",
margin:".6%"

},
posttext:{
  // background: "black",
  // padding:"6%",
  textShadow: "0px 0px 4px black",
  color:"white",
  // borderRadius:"2px",
  //opacity:"50%",
  fontSize:"130%"
},
postbox:{
  margin: "1%",
  color: "black",
 // boxShadow: "0px 0px 10px black",
  //border: "3px solid green",
  textAlign: "left",
  fontFamily: "Abril Fatface",
  //letterSpacing: "15px",
  //fontSize: "xxx-large",
  background: "#e0e0e0",
  borderRadius: "10px",
  //padding: "3%",
  opacity: "1",
  padding:"3%",
  height:"100%",
 overflowWrap:"break-word"
 
},
postcontainer:{
marginTop:"3%",
padding:"1%",
width:"100%",

},
username:{
fontWeight:"bold"
},
userpost:{

},
timestamp:{
fontSize:"small",
},

}
const navigation = [
  { name: "Topic 1", href: "/discussions", current: false },
  { name: "Topic 2", href: "/discussions", current: false },
  { name: "Topic 3", href: "/discussions", current: false },
  { name: "Topic 4", href: "/discussions", current: false },
  { name: "Topic 5", href: "/discussions", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Discussions() {
  return (
    <div>
 <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
             
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
               
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  <div style={styles.container}>

<Stack gap={3} className="col-md-11 mx-auto" style={styles.wrapper} >
        <div style={styles.chatbox}>
          <div style={styles.feed}>
            <div style={styles.postcontainer}>


            <div style={styles.postbox}>
              <p style={styles.username}>Kamary Gillespie</p>
              <p style={styles.timestamp}>@kamarygillespie</p>
              <p style={styles.userpost}>

Eiusmod nisi aliquip eu voluptate voluptate minim consectetur cillum non. Tempor id qui dolore cillum non enim officia Lorem eiusmod. Officia irure fugiat culpa elit est et veniam laboris labore ea dolor. Ad enim aute adipisicing eiusmod. Anim minim laborum culpa deserunt aliqua laborum quis officia cupidatat voluptate commodo ea.
              </p>
              <p style={styles.timestamp}>6:47 pm</p>
            </div>
            </div>



            </div>
          <div style={styles.input}>
          <div class="input-group input-group-sm mb-6">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={styles.textarea}></textarea>
  <button type="button" class="btn" style={styles.button}><span style={styles.posttext}>Post</span></button>
</div>
            </div>
          
        </div>

        
      </Stack>
</div>

    </div>
  );
}

export default Discussions;