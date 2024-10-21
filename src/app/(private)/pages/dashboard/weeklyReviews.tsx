'use client'
import React, { useState } from 'react';

const reviewsData = [
    { subject: "Geografia", start: '07:30', time: "07:30 - 08:15", count: 219, color: "bg-blue-200" },
    { subject: "Matemática", start: '08:25', time: "08:25 - 09:10", count: 128, color: "bg-red-200" },
    { subject: "Português", start: '09:20', time: "09:20 - 10:05", count: 134, color: "bg-pink-200" },
    { subject: "História", start: '10:15', time: "10:15 - 11:00", count: 145, color: "bg-green-200" },
    { subject: "Química", start: '11:10', time: "11:10 - 11:55", count: 98, color: "bg-yellow-200" },
    { subject: "História", start: '10:15', time: "10:15 - 11:00", count: 145, color: "bg-green-200" },
    { subject: "Química", start: '11:10', time: "11:10 - 11:55", count: 98, color: "bg-yellow-200" },
    { subject: "História", start: '10:15', time: "10:15 - 11:00", count: 145, color: "bg-green-200" },
    { subject: "Química", start: '11:10', time: "11:10 - 11:55", count: 98, color: "bg-yellow-200" },
    { subject: "Física", start: '12:05', time: "12:05 - 12:50", count: 110, color: "bg-teal-200" }
];

const WeeklyReviews = () => {
    const [selectedDate, setSelectedDate] = useState("2024-10-16");  // Estado inicial definido como exemplo

    const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedDate(event.target.value);
    };

    return (
        <section className="flex flex-col grow bg-white p-5">
            <h2 className="text-lg font-bold mb-5">Revisões da Semana</h2>
            <input
                type="date"
                className="block w-full mb-5 p-2 border border-gray-300 rounded-lg"
                value={selectedDate}
                onChange={handleDateChange} 
            />
            <div className="flex-grow overflow-auto" style={{ maxHeight: '70vh' }}>
                <ul>
                    {reviewsData.map((review, index) => (
                        <li key={index} className="grid grid-cols-5 gap-2 p-3 mb-3 " style={{backgroundColor: review.color}}>
                            <div className="col-span-1 py-2">
                                <span className="text-sm font-bold text-gray-500">{review.start}</span>
                            </div>
                            <div className={`col-span-4 flex justify-between items-center p-4 rounded-md opacity-90 ${review.color}  `}>
                                <div>
                                    <p className="font-semibold text-gray-700">{review.subject}</p>
                                    <span className="text-sm text-gray-500">{review.time}</span>
                                </div>
                                <span className="text-xl font-bold text-gray-700">{review.count}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WeeklyReviews;
