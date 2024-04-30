// TeamSection.js
import React from 'react';

const SpeakerSection = () => {
    return (
        <section className="py-12 bg-darkurple" >
            <div className="container mx-auto px-4 " id='speakers'>
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-white mb-6">Meet Our Speakers</h2>
                {/* Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member Card */}
                    <div className="bg-pink-600 rounded-lg overflow-hidden shadow-md">
                        {/* Image */}
                        <img src="/team-member1.jpg" alt="Team Member" className="w-full h-56 object-cover object-center" />
                        {/* Name */}
                        <h3 className="text-xl font-semibold text-white mt-4">John Doe</h3>
                        {/* Position */}
                        <p className="text-white">Software Engineer</p>
                    </div>
                    <div className="bg-pink-600 rounded-lg overflow-hidden shadow-md">
                        {/* Image */}
                        <img src="/team-member1.jpg" alt="Team Member" className="w-full h-56 object-cover object-center" />
                        {/* Name */}
                        <h3 className="text-xl font-semibold text-white mt-4">John Doe</h3>
                        {/* Position */}
                        <p className="text-white">Software Engineer</p>
                    </div>
                    <div className="bg-pink-600 rounded-lg overflow-hidden shadow-md">
                        {/* Image */}
                        <img src="/team-member1.jpg" alt="Team Member" className="w-full h-56 object-cover object-center" />
                        {/* Name */}
                        <h3 className="text-xl font-semibold text-white mt-4">John Doe</h3>
                        {/* Position */}
                        <p className="text-white">Software Engineer</p>
                    </div>

                    {/* Repeat similar structure for other team members */}
                </div>
            </div>
        </section>
    );
};

export default SpeakerSection;
