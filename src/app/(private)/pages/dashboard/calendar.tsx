'use client'
import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date();  // Captura a data de hoje para destacar no calendário

    const getDaysInMonth = (year: number, month: number) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const getPaddingDays = (year: number, month: number) => {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        return firstDayOfMonth;  // Retorna o índice do dia da semana
    };

    const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const paddingDays = getPaddingDays(currentDate.getFullYear(), currentDate.getMonth());

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());  // Redefine para a data atual
    };

    return (
        <div className="flex flex-col items-center p-4">
                <button onClick={goToToday} className='bg-customPrimary-deluge px-4 py-2 rounded-md self-start mb-2 hover:bg-customPrimary-bossanova text-white'>Today</button>  {/* Botão para voltar para o dia/mês atual */}

            <div className="flex justify-between items-center w-full mb-2">
                <button onClick={prevMonth}><IoChevronBack /></button>
                <h2 className='uppercase text-gray-600'>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                <button onClick={nextMonth}><IoChevronForward /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 w-full">
                {daysOfWeek.map(day => (
                    <div key={day} className="text-center font-bold text-gray-800">{day}</div>
                ))}
                {Array.from({ length: paddingDays }).map((_, index) => (
                    <div key={`padding-${index}`} className="text-center p-2"></div>  // Espaços vazios
                ))}
                {days.map((day, index) => (
                    <div key={index} className={`text-center p-2 ${day.getDate() === today.getDate() && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear() ? 'bg-customPrimary-deluge text-white' : 'text-gray-600'}`}>
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
