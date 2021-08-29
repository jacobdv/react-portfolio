import React from 'react';

export default function About() {
    return (
        <section id='about'>
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 classname='title-font sm:text-4x1 text-3x1 mb-4 font-medium text-white'>
                        Hi, I'm Jacob!
                        <br></br>
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        I recieved my Bachelor of Science in Psychology from the University of Oregon before completing a Data Analytics and Visualization program,
                        also through U of O. I love working with data. My interest initially peaked when I was exploring college basketball data to make predictions 
                        about March Madness. At this point, I was using Excel for all of my reformatting and analysis, which was painfully slow. Since then my repetoire 
                        of data analysis tools and languages has expanded tremendously, and I am now using Pandas and Python to do that same step in a fraction of the time. 
                        This has allowed me to move further into this project and begin developing a live page to display the data, my algorithms, and my predictions, which 
                        is my current project and will be added below as soon as it is live. For now, have a look at two other webpages I have designed.
                    </p>
                    <div className='flex justify-center'>
                        <a href='#contact' className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                            Contact Me
                        </a>
                        <a href='#projects' className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img className='object-cover object-center rounded' alt='hero' src='./me.png'></img>
                </div>
            </div>
        </section>
    )
}