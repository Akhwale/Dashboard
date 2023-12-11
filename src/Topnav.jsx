import React from 'react'
import { Search, UserRound, Bell, Mail } from 'lucide-react';

export default function Topnav() {
    
  return (
   

    <div className="w-full flex justify-between items-center h-[50px] p-4 border-b shadow-sm bg-red-400">
        <div className="">
         <Search/>
        </div>
        <div class="flex space-x-2">
         
          <Bell/>
          <Mail/>
          <UserRound/>
        </div>
      </div>
  )
}
