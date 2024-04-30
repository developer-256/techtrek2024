// TeamSection.js
import { speakers } from '@/data/speaker_team_data';
import React from 'react';
import Card from './card';
import { ImageAssets } from '@/assets/ImageAssets';

const SpeakerSection = () => {
    return (
        <section className="py-12 bg-darkurple" >
            <div className="container mx-auto px-4 " id='speakers'>
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-white mb-6">Meet Our Speakers</h2>
                {/* Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 justify-center">
                    {/* Team Member Card */}
                    {
                        speakers.map((speaker, index) => {
                            return (
                                <Card key={index} image={ImageAssets.Speakers.img} name={speaker.name} position={speaker.position} linkedin={speaker.linkedin} company={speaker.company} />
                            )
                        })
                    }

                    {/* Repeat similar structure for other team members */}
                </div>
            </div>
        </section>
    );
};

export default SpeakerSection;
