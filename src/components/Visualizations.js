import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { visualizations } from '../data';

export default function Visualizations() {
    return (
        <section id='visualizations' className='text-gray-400 bg-gray-900 body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <CodeIcon className='mx-auto inline-block w-10 mb-4'></CodeIcon>
                    <h1 className='sm:text-4x1 text-3x1 font-medium title-font mb-4 text-white'>
                        Visualizations
                    </h1>
                    {/* <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Details about my past projects.
                    </p> */}
                </div>
                <div className='flex flex-wrap -m-4'>
                    {visualizations.map((visualization) => (
                        <a href={visualization.link} key={visualization.image} className='sm:w-1/2 w-100 p-4'>
                            <div className='flex relative'>
                                <img alt='gallery' className='absolute inset-0 w-full h-full object-cover object-center' src={visualization.image}></img>
                                <div className='px-8 py-10  w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                                    <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                                        {visualization.subtitle}
                                    </h2>
                                    <h1 className='title-font text-lg font-medium text-white mb-3'>
                                        {visualization.title}
                                    </h1>
                                    <p className='leading-relaxed'>
                                        {visualization.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}