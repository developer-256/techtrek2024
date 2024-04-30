// TeamSection.js
import React from 'react';
import Card from './card';

const TeamSection = () => {
    return (
        <section className="py-12 bg-darkurple" id='schedule'>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
                {/* Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member Card */}
                    <Card image={require('../../assets/images/AhmadManzoor.jpg')} name="Ahmad manzoor" position="CEO" linkedin={''} company='FUTURE TECHS' />


                    {/* Repeat similar structure for other team members */}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
