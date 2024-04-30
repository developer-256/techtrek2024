// EventSchedule.js
import React from 'react';

const EventSchedule = () => {
    return (
        <section className="py-12 bg-darkurple">
            <div className="container mx-auto px-4">
                {/* Schedule Header */}
                <h2 className="text-3xl font-bold text-white mb-6">Event Schedule</h2>
                {/* Round 1 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Round 1: May 3rd - May 5th</h3>
                    {/* Day 1 */}
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 3rd</h4>
                        <p className="text-white mb-4">Speaker: John Doe</p>
                        <p className="text-gray-300">Topic: Introduction to Web Development</p>
                    </div>
                    {/* Day 2 */}
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 4th</h4>
                        <p className="text-white mb-4">Speaker: Jane Smith</p>
                        <p className="text-gray-300">Topic: UX Design Principles</p>
                    </div>
                    {/* Day 3 */}
                    <div className="bg-pink-600 p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold text-white mb-2">May 5th</h4>
                        <p className="text-white mb-4">Speaker: David Johnson</p>
                        <p className="text-gray-300">Topic: Software Engineering Best Practices</p>
                    </div>
                </div>
                {/* Round 2 */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Round 2: May 10th - May 12th</h3>
                    {/* Day 1 */}
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 10th</h4>
                        <p className="text-white mb-4">Speaker: Emily Brown</p>
                        <p className="text-gray-300">Topic: Frontend Frameworks Comparison</p>
                    </div>
                    {/* Day 2 */}
                    <div className="bg-pink-600 p-6 rounded shadow-md mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">May 11th</h4>
                        <p className="text-white mb-4">Speaker: Michael Wilson</p>
                        <p className="text-gray-300">Topic: Backend Development Trends</p>
                    </div>
                    {/* Day 3 */}
                    <div className="bg-pink-600 p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold text-white mb-2">May 12th</h4>
                        <p className="text-white mb-4">Speaker: Sarah Adams</p>
                        <p className="text-gray-300">Topic: Cloud Computing Solutions</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventSchedule;
