// EventSchedule.js
import React from 'react';
import RoundCard from './round_card';
import { fields1 } from '@/data/rounds_data';

const EventSchedule = () => {
    return (
        <section className="py-12 bg-darkurple" id='about'>
            <div className="container mx-auto px-4">
                {/* Schedule Header */}
                <h2 className="text-3xl font-bold text-white mb-6">Event Schedule</h2>
                <div className='border-myPink '>

                    <h2 className="text-4xl text-center font-extrabold text-white mb-8">Round 1</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 justify-center mx-30'>
                    {
                        fields1.map((field, index) => {
                            return (
                                <RoundCard key={index} name={field.name} image={field.image} date={field.date} speaker={field.speaker} time={field.time} description={field.description} />

                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default EventSchedule;



{/* Round 1
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Round 1: May 3rd - May 5th</h3>
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 3rd</h4>
                        <p className="text-white mb-4">Speaker: John Doe</p>
                        <p className="text-gray-300">Topic: Introduction to Web Development</p>
                    </div>
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 4th</h4>
                        <p className="text-white mb-4">Speaker: Jane Smith</p>
                        <p className="text-gray-300">Topic: UX Design Principles</p>
                    </div>
                    <div className="bg-pink-600 p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold text-white mb-2">May 5th</h4>
                        <p className="text-white mb-4">Speaker: David Johnson</p>
                        <p className="text-gray-300">Topic: Software Engineering Best Practices</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Round 2: May 10th - May 12th</h3>
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 10th</h4>
                        <p className="text-white mb-4">Speaker: Emily Brown</p>
                        <p className="text-gray-300">Topic: Frontend Frameworks Comparison</p>
                    </div>
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 11th</h4>
                        <p className="text-white mb-4">Speaker: Michael Wilson</p>
                        <p className="text-gray-300">Topic: Backend Development Trends</p>
                    </div>
                    <div className="bg-pink-600 p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold text-white mb-2">May 12th</h4>
                        <p className="text-white mb-4">Speaker: Sarah Adams</p>
                        <p className="text-gray-300">Topic: Cloud Computing Solutions</p>
                    </div>
                </div> */}