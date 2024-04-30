// EventDetails.js
import React from 'react';

const EventDetails = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Agenda */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Agenda</h2>
                    <p className="text-gray-600">
                        Dive into insightful sessions covering a range of topics, from industry trends to practical tips.
                    </p>
                </div>
                {/* Speakers */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Speakers</h2>
                    <p className="text-gray-600">
                        Learn from renowned experts and thought leaders sharing their knowledge and experiences.
                    </p>
                </div>
                {/* Special Highlights */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Special Highlights</h2>
                    <p className="text-gray-600">
                        Don't miss out on exclusive workshops, networking opportunities, and exciting surprises!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
