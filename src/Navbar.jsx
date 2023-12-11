import React from "react";
import { Users, LayoutDashboard, ListChecks, BadgeDollarSign, ScrollText, ChevronRightCircle} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  {
    name:"Dashboard",
    icon:LayoutDashboard
  },
  {
    name:"Products",
    icon:LayoutDashboard
  },
  {
    name:"Orders",
    icon:LayoutDashboard
  },
  {
    name:"Members",
    icon:LayoutDashboard
  },
  {
    name:"Appointments",
    icon:LayoutDashboard
  },
]


const variants = {
  expanded: {
    width: "20%"
  },
  notExpanded: {
    width: "5%"
  }
}

export default function Navbar(){

  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return(
   
      <motion.nav 
      animate = {
        isExpanded ? "expanded" : "notExpanded"
      }
      variants={variants}
      
      
      className="sidenav flex flex-col h-screen shadow-lg w-1/5 border border-r-1 px-2 relative" >
        <header className="flex justify-between py-4 items-center ">
          <h1>Logo</h1>
          <h2 className={isExpanded ? "block" : "hidden"}>Name</h2>
        </header>  


        <div onClick={()=> setIsExpanded(!isExpanded)}className="w-6 h-6 rounded-full bg-red-400 absolute -right-3 top-4">
          <ChevronRightCircle className="text-[#ffffff]"/>
        </div>

      <div className="flex flex-col space-y-8">
        {navLinks.map((item, index) => <div key = {index} className={"flex space-x-3 p-2 rounded " + (activeNavIndex === index ? "bg-[#FFc8C8] text-[#ffffff] font-semibold" : "")} onClick={ ()=>setActiveNavIndex
        (index)}> 
          <item.icon/>
          <span className={(isExpanded ? "block" : "hidden")}>{item?.name}</span></div>)}
  
      </div>



      </motion.nav>
   

  );
}




