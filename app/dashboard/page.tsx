'use client';
import { auth } from '@/firebase';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DatePicker from 'react-datepicker';
import { db } from '@/firebase'; // Make sure this path to your Firebase config is correct
import 'react-datepicker/dist/react-datepicker.css';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

 
const DashBoard = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        startDate: new Date(),
        endDate: new Date()
    });

    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // Function to update the state for each form field
    const handleChange = (field: string, value: string | Date) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Function to handle form submission
    const handleItinerarySubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const { from, to, startDate, endDate } = formData;

        if (!from || !to || !startDate || !endDate) {
            toast.error("Please fill in all fields");
            return;
        }

        const userId = auth.currentUser ? auth.currentUser.uid : null;

        if (!userId) {
            toast.error("No user is logged in");
        return;
    }


        try {
            await addDoc(collection(db, "itineraries"), {
                userId,
                from,
                to,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfPeople,
            });
            toast.success("Got your Details!");
            setFormData({ from: '', to: '', startDate: new Date(), endDate: new Date() }); // Reset form
            setNumberOfPeople(1); // Reset the counter
            router.push('/pip'); // Redirect to itineraries page after 7 seconds

        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("Failed to save itinerary.");
        }
    };

    return (
        <div>
            <Navbar />
            <ToastContainer position="top-center" autoClose={6000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
                <h1 className="text-lg font-bold text-center mb-4">Plan Your Itinerary</h1>
                <form onSubmit={handleItinerarySubmit} className="space-y-4 w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="From"
                        value={formData.from}
                        onChange={(e) => handleChange('from', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="text"
                        placeholder="To"
                        value={formData.to}
                        onChange={(e) => handleChange('to', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <DatePicker
                        selected={formData.startDate}
                        onChange={(date) => handleChange('startDate', date || new Date())}
                        className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                    />
                    <DatePicker
                        selected={formData.endDate}
                        onChange={(date) => handleChange('endDate', date || new Date())}
                        className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                    />
                    <div className='counter-container'>
                        
                    <button className='counter-button'onClick={() => setNumberOfPeople(prev => Math.max(1, prev - 1))}>-</button>
                    <span className='counter-display'>{numberOfPeople}</span>
                    <button className='counter-button' onClick={() => setNumberOfPeople(prev => prev + 1)}>+</button>
                    </div>
                    <button
                        onClick = {handleItinerarySubmit}
                        type="submit"
                        className="block w-full text-center text-white py-3 rounded-md shadow-md bg-orange-500 hover:bg-orange-600 transition ease-in-out"
                    >
                        Plan Your Itinerary
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashBoard;
