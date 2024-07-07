import { Wrench } from 'lucide-react';
import React from 'react';

const UnderDevelopment = () => {
  return (
    <div className="flex items-center justify-center p-4 rounded-lg bg-orange-50">
      <div className="mr-4">
        <Wrench/>
      </div>
      <div className="font-bold text-gray-700 line-clamp-3 text-xl">
        <p>This feature is currently under development.</p>
        <p>We're working hard to bring it to you soon!</p>
        <p>Please use new account to access trial functionality if credits expired!</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
