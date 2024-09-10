import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const Notification = ({ message, type }) => (
  <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-yellow-500'} text-white flex items-center`}>
    {type === 'success' ? <Check className="mr-2" /> : <AlertCircle className="mr-2" />}
    {message}
  </div>
);

export default Notification;