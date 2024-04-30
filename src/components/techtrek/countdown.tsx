"use client"
// import React, { useState, useEffect } from 'react';

// type CountdownTimerProps = {
//     eventDate: string;
// };

// type TimeLeft = {
//     days?: number;
//     hours?: number;
//     minutes?: number;
//     seconds?: number;
//     [key: string]: number | undefined;
// };

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate }) => {
//     const calculateTimeLeft = (): TimeLeft => {
//         const difference = +new Date(eventDate) - +new Date();
//         let timeLeft: TimeLeft = {};

//         if (difference > 0) {
//             timeLeft = {
//                 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                 minutes: Math.floor((difference / 1000 / 60) % 60),
//                 seconds: Math.floor((difference / 1000) % 60),
//             };
//         }

//         return timeLeft;
//     };

//     const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearTimeout(timer);
//     }, [eventDate]);

//     const timerComponents: JSX.Element[] = [];

//     Object.keys(timeLeft).forEach((interval) => {
//         if (!timeLeft[interval]) {
//             return;
//         }

//         timerComponents.push(
//             <span key={interval} className='text-white text-[70px]'>
//                 {timeLeft[interval]} {interval}{' '}
//             </span>
//         );
//     });

//     return (
//         <div>
//             {timerComponents.length ? (
//                 timerComponents
//             ) : (
//                 <span>Event has ended!</span>
//             )}
//         </div>
//     );
// };

// export default CountdownTimer;


import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
    eventDate: string;
};

type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    [key: string]: number | undefined;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(eventDate) - +new Date();
        let timeLeft: TimeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="inline-block bg-myPink text-white text-center mx-3 w-[70px] py-3 rounded-lg">
                <div className="text-2xl">{timeLeft[interval]!.toString().padStart(2, '0')}</div>
                <div>{interval}</div>
            </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? (
                timerComponents
            ) : (
                <span>Event has ended!</span>
            )}
        </div>
    );
};

export default CountdownTimer;
