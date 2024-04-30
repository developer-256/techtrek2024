// InteractiveSchedule.js
import React from 'react';

const InteractiveSchedule = () => {
    return (
        <section className="py-12 bg-gray-100 " id='schedule'>
            <div className="container mx-auto px-4">
                {/* Schedule Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Interactive Schedule</h2>
                {/* Timeline or Schedule Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Session Card Example */}
                    <div className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Session Name</h3>
                        <p className="text-gray-600 mb-4">Time: 10:00 AM - 11:30 AM</p>
                        <p className="text-gray-700 mb-4">Speaker: John Doe</p>
                        <p className="text-gray-700 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sapien quam.</p>
                        <div className="flex justify-end">
                            {/* Add to Calendar Button */}
                        </div>
                    </div>
                    {/* Repeat similar structure for other sessions */}
                </div>
            </div>
        </section>
    );
};

export default InteractiveSchedule;
