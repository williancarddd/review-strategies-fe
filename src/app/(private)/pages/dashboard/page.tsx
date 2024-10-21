import React from 'react';
import UserProfile from '@/components/MenuClient/user-profile';
import { formatDate } from '@/utils/formatDate';
import { MdOutlineSearch, MdNotificationAdd } from "react-icons/md";
import WeeklyReviews from './weeklyReviews';
import UpcomingReviews from './upcomingReviews';
import { IoMdLogOut } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Conteúdo principal */}
      <div className="flex-grow p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-4 md:mb-8 md:border-none border-b-2 pb-4">
          <div className="flex flex-col md:flex-row items-center">
            <h1 className="text-xl md:text-3xl font-bold text-gray-500">OLÁ,</h1>
            <h1 className="text-xl md:text-3xl font-bold">ARTHUR!</h1>
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <p className="text-sm md:text-base text-gray-400 font-bold">{formatDate()}</p>
            <button className="p-1 md:p-2 bg-gray-100 rounded-sm">
              <MdOutlineSearch color='gray' size={20} />
            </button>
            <button className="p-1 md:p-2 bg-customPrimary-deluge rounded-sm">
              <MdNotificationAdd color='white' size={20} />
            </button>
          </div>
        </header>

        {/* Seções */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <WeeklyReviews />
          <UpcomingReviews />
        </div>
      </div>

      {/* Barra lateral */}
      <aside className="w-full md:w-1/6 bg-white p-4 flex flex-col items-center justify-between border-t md:border-t-0 md:border-l">
        <div>
          <UserProfile name='ARTHUR ZILIANI' role='Estudante' />
          <div className="mt-4 space-y-2">
            <div className="bg-gray-100 p-2 rounded-lg">
              <h3 className="text-xs md:text-sm text-gray-600">Revisões Concluídas</h3>
              <p className="text-xl md:text-3xl font-bold">27</p>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <h3 className="text-xs md:text-sm text-gray-600">Restantes</h3>
              <p className="text-xl md:text-3xl font-bold">2</p>
            </div>
          </div>
        </div>
        <button className='flex justify-between w-full px-2 py-1 hover:bg-slate-100 items-center rounded-md'>
          <span className='text-red-500 text-xs md:text-base'>SAIR</span>
          <IoMdLogOut size={24} color='lightgray' />
        </button>
      </aside>
    </div>
  );
};

export default Dashboard;
