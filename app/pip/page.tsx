'use client';

import React from 'react'
import { useState } from 'react'
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader"
import Script from 'next/script'
import router from 'next/router';


const loadingStates = [
  {
    text: "Surfing over the Local for spots that tickle your interests!",
  },
  {
    text: "Peeking through hotel windows (not literally!) to find you the perfect room...",
  },
  {
    text: "Sniffing out the tastiest treats in town... Hope you’re hungry!",
  },
  {
    text: "Wrapping up on Your Budget , so your wallet doesn't have to!",
  },
  {
    text: "Putting all the pieces together to create your dream adventure. ",
  },
  {
    text: "Hold tight, we’re nearly there!",
  },
  
];

const pip = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 6000);

    
  return (
<div>
    <Loader loadingStates={loadingStates} loading={loading} duration={1000} loop={false} />
    <div className="container mx-auto px-4 py-6">
            <div className="overflow-x-auto relative shadow-lg sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-700 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">Time</th>
                            <th scope="col" className="py-3 px-6">Day</th>
                            <th scope="col" className="py-3 px-6">Activity</th>
                            <th scope="col" className="py-3 px-6">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">8:00 AM - 10:00 AM</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Day 1</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Check-in at Hostel</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Vishwa Hostel - Near city center, quick access to local sites.</td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">12:00 PM</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Day 1</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Lunch</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Rameshwaram Cafe - Known for its authentic local cuisine.</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">2:00 PM - 5:00 PM</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Day 1</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Local Cultural Site Tour</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Visit ancient temples and museums within the city limits.</td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">All Day</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Day 2</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Wonderla Amusement Park</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Full day of rides and water parks at Wonderla.</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Morning</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Day 3</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Check-out and Departure</td>
                            <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Early morning check-out and drive back home.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>
    )
    }

export default pip