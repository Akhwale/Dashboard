import React from 'react'
import { LineChart } from './LineChart'
import { DoughnutChart } from './DoughnutChart'
import { VerticalBar } from './VerticalBar'
import { PieChart } from './PieChart'
import { HorizontalBar } from './HorizontalBar'
import { CircularProgressBar } from './CircularProgress'
import {  CalendarCheck, Globe, Home, MessageSquare, Star, Users } from "lucide-react"


export default function Dashboard() {

    return (

        <div className='p-1 border h-screen '>
            <div className='bg-gray-100 p-3'>
                <div className='grid grid-cols-12 md:h-[20vh] gap-3'>
                                       
                <div className="col-span-12 md:col-span-2 bg-white border shadow-lg">
                        <div className='flex flex-col items-center h-full justify-center '>
                         
                        <div className='flex'>
                        <div className="w-32 h-32 rounded-full text-5xl flex items-center shadow-lg justify-around border-8 border-gray-200">
                            <p className='font-bold text-gray-500'>786</p>
                        </div>
                        <div><Home size={30} color='gray'/></div>
                        </div>
                            <p className='font-bold pt-2 text-lg text-gray-700'>Listed Properties</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-2 bg-white border shadow-lg">
                        <div className='flex flex-col items-center h-full justify-center '>
                         
                        <div className='flex'>
                        <div className="w-32 h-32 rounded-full text-5xl flex items-center shadow-lg justify-around border-8 border-gray-200">
                            <p className='font-bold text-gray-500'>450</p>
                        </div>
                        <div><MessageSquare size={30} color='gray'/></div>
                        </div>
                            <p className='font-bold pt-2 text-lg text-gray-700'>Posted Reviews</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-2 bg-white border shadow-lg">
                        <div className='flex flex-col items-center h-full justify-center '>
                         
                        <div className='flex'>
                        <div className="w-32 h-32 rounded-full text-5xl flex items-center shadow-lg justify-around border-8 border-gray-200">
                            <p className='font-bold text-gray-500'>423</p>
                        </div>
                        <div><CalendarCheck size={30} color='gray'/></div>
                        </div>
                            <p className='font-bold pt-2 text-lg text-gray-700'>On Rental Terms</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-2 bg-white border shadow-lg">
                        <div className='flex flex-col items-center h-full justify-center '>
                         
                        <div className='flex'>
                        <div className="w-32 h-32 rounded-full text-5xl flex items-center shadow-lg justify-around border-8 border-gray-200">
                            <p className='font-bold text-gray-500'>450</p>
                        </div>
                        <div><Globe size={30} color='gray'/></div>
                        </div>
                            <p className='font-bold pt-2 text-lg text-gray-700'>Countries Featured</p>
                        </div>
                    </div>

                        {/* Table */}
                                    
                    <div className="col-span-12 md:col-span-4 border shadow-lg">
                        <div className='border-b p-1 bg-white flex justify-between '>
                           <div className='font-semibold'>Top Listed</div>
                            <div className='flex'>
                                <Star color='gold'/><Star color='gold'/><Star color='gold'/><Star color='gold'/><Star/>
                            </div>
                        </div>
                       
                        <table class="min-w-full border-collapse border border-gray-200 ">
                            <thead>
                                <tr>
                                    <th class="py-2 px-2 bg-gray-100 text-left">Property Name</th>
                                    <th class="py-2 px-2 bg-gray-100 text-left">Property Type</th>
                                    <th class="py-2 px-2 bg-gray-100 text-left">Location</th>
                                </tr>
                            </thead>
                    <tbody>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                            <td class="py-1 px-2 border-b border-gray-200">New York</td>
                        </tr>
                        <tr class="bg-white">
                            <td class="py-1 px-2 border-b border-gray-200">Trinedah</td>
                            <td class="py-1 px-2 border-b border-gray-200">Bungalow</td>
                            <td class="py-1 px-2 border-b border-gray-200">Pretoria</td>
                        </tr>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                            <td class="py-1 px-2 border-b border-gray-200">New York</td>
                        </tr>
                        
                        
                    </tbody>
                    </table>

                    </div>

                </div>
            </div>


            {/* Second Row */}

            <div className='bg-gray-100 p-3 mt-2'>
                <div className='grid grid-cols-12 md:h-[30vh] gap-3'>
                                       
                    <div className="col-span-12 md:col-span-4 bg-white border shadow-lg flex justify-center">
                       <DoughnutChart />
                    </div>

                    <div className="col-span-12 md:col-span-4 bg-white border shadow-lg">
                        <VerticalBar/>
                    </div>
                                    
                    <div className="col-span-12 md:col-span-4 border shadow-lg">
                                               
                        <HorizontalBar/>
                    </div>

                </div>
            </div>






            {/* Second Row */}


            {/* <div className='bg-red-300 p-3'>
                <div className='grid grid-cols-12 md:h-[50vh] gap-3'>
                    
                    <div className="col-span-12 md:col-span-6 bg-red-600">
                    <HorizontalBar/>
                    </div> */}

    

                    {/* <div className="col-span-12 md:col-span- bg-red-100">
                    <PieChart/>
                    </div> */}
{/* 
                    <div className="col-span-12 md:col-span-6 bg-red-100">
                        <VerticalBar/>
                    </div>

                </div>
            </div> */}


            {/* Third Row */}
{/* 
            <div className='bg-red-100 p-3'>
                <div className='grid grid-cols-12 md:h-[40vh] gap-3'>
                    
                    <div className="col-span-12 md:col-span-4 bg-yellow-200">
                        <DoughnutChart/>
                    </div>

                    <div className="col-span-12 md:col-span-8 bg-yellow-100 ">
                        <LineChart />
                    </div>

                    

                </div>
            </div> */}


        </div>
    )
}
