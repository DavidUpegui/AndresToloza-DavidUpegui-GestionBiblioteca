'use client'
import Link from 'next/link';
import { useState } from 'react';

const Sidebar: React.FC = () => {
    
  
    return (
      <div
        className={` bg-gray-800 text-white h-full flex flex-col transition-all`}
    
      >
        <div className="p-4 text-2xl font-semibold border-b border-gray-700">
          My App
        </div>
        <nav className="flex-col p-4">
          <ul>
            <li className="mb-2">
              <Link href="/add-book">Transactions (Loans)</Link>
            </li>
            <li className="mb-2">
              <Link href="/route-2">Maestros</Link>
            </li>
            <li className="mb-2">
              <Link href="/route-3">Users</Link>
            </li>
          </ul>
        </nav>
   
      </div>
    );
  };
export default Sidebar;
