import React from 'react';
import { Home, Book, Bell, User, ChevronDown, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Home size={24} />
        <Book size={24} />
        <Bell size={24} />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Buscar cursos" className="pl-8 pr-2 py-1 border rounded" />
          <Search size={18} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center space-x-2">
          <User size={24} />
          <span>jorge@onbotgo.com</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </nav>
  );
}