import React from 'react';
import { FaCog } from 'react-icons/fa';
import Calendar from './calendar';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { MdOutlineKeyboardBackspace, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
const UpcomingReviews = () => {
    return (
        <section className="flex flex-col grow bg-white p-5 border-l-2">
            <h2 className="text-lg font-bold mb-5">Próximas Revisões</h2>
            <div className="flex items-center justify-between space-x-4 mb-5">
                <IoArrowBackOutline size={32} color='gray' />
                <div className="bg-customPrimary-deluge text-white rounded-full flex items-center justify-center w-16 h-16 text-lg">1</div>
                <div className="bg-gray-100 text-gray-500 font-bold rounded-full flex items-center justify-center text-lg h-12 w-12">3</div>
                <div className="bg-gray-100 text-gray-500 font-bold rounded-full flex items-center justify-center text-lg h-12 w-12">7</div>
                <div className="bg-gray-100 text-gray-500 font-bold rounded-full flex items-center justify-center text-lg h-12 w-12">15</div>
                <IoArrowForwardOutline size={32} color='gray' />
            </div>
            <Calendar />

        </section>
    );
};

export default UpcomingReviews;
