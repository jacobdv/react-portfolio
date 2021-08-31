import React from 'react';

export default function Contact() {
    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [message, setMessage] = React.useState('');

    function encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    }

    // function handleSubmit(e) { 
    //     e.preventDefault();
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: encode({ 'form-name': 'contact', name, email, message })
    //     }).then(() => alert('Message sent!')).catch((error) => alert(error));
    // }

    return (
        <section id="contact" >
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3040456467647!2d-122.62750258443985!3d45.54420887910194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a72aad4f4549%3A0xbed4dbb063837473!2s2933%20NE%2037th%20Ave%2C%20Portland%2C%20OR%2097212!5e0!3m2!1sen!2sus!4v1629916330564!5m2!1sen!2sus"
                /> */}
                {/* <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1 px-6">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            ADDRESS
                        </h2>
                        <p className="mt-1">
                            2933 NE 37th Ave <br />
                            Portland, OR 97212
                        </p>
                    </div>
                    <div className="lg:w-7/12 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <a className="text-indigo-400 leading-relaxed">
                            mrjacobdevries@gmail.com
                        </a>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                            PHONE
                        </h2>
                        <p className="leading-relaxed">(541) 539-1828</p>
                    </div>
                </div> */}
                {/* </div> */}
                    <form
                    netlify
                    name="contact"
                    className="lg:w-8/10 md:w-8/10 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-center mb-20">
                        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                            Contact Me
                        </h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            I would love to talk with you about any opportunities or any of my projects displayed above. Please reach out however is most convenient for you. I look forward to talking with you. Thank you!
                        </p>
                        <br></br>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-9 text-sm text-white">
                            Email
                            </label>
                            <h1 className='leading-7 text-sm text-gray-400'>
                                mrjacobdevries@gmail.com
                            </h1>
                            {/* <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            /> */}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone" className="leading-9 text-sm text-white">
                            Phone Number
                            </label>
                            <h1 className='leading-7 text-sm text-gray-400'>
                                (541) 539-1828
                            </h1>
                            {/* <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            /> */}
                        </div>
                        <div className="relative mb-4">
                            <label
                            htmlFor="linkedin"
                            className="leading-9 text-sm text-white">
                            LinkedIn
                            </label>
                            <h1 className='leading-7 text-sm text-gray-400'><a>
                                https://www.linkedin.com/in/jacobdv/                            
                            </a></h1>
                            {/* <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            /> */}
                        </div>
                        <div className="relative mb-4">
                            <label
                            htmlFor="github"
                            className="leading-9 text-sm text-white">
                            GitHub
                            </label>
                            <h1 className='leading-7 text-sm text-gray-400'><a>
                                https://github.com/jacobdv                         
                            </a></h1>
                            {/* <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            /> */}
                        </div>
                        {/* <button
                            onclick='handleSubmit(e);'
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button> */}
                    </form>
                </div>
            </section>
    )
}