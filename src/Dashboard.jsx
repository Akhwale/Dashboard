import React from 'react'
import { LineChart } from './LineChart'
import { DoughnutChart } from './DoughnutChart'
import { VerticalBar } from './VerticalBar'
import { PieChart } from './PieChart'
import { HorizontalBar } from './HorizontalBar'
import { CircularProgressBar } from './CircularProgress'


export default function Dashboard() {

    return (

        <div className='p-1 border h-screen'>
            <div className='bg-red-300 p-3'>
                <div className='grid grid-cols-12 md:h-[20vh] gap-3'>
                                       
                    <div className="col-span-12 md:col-span-2 bg-red-600">
                      <CircularProgressBar/>
                    </div>

    

                    <div className="col-span-12 md:col-span-2 bg-red-100">
                        <CircularProgressBar/>
                    </div>

                    <div className="col-span-12 md:col-span-2 bg-red-100">
                        <div className='flex-col'>
                            <h3>sddsdsd</h3>
                            <div class="w-20 h-20 bg-red-500 rounded-full text-3xl flex items-center justify-around border-4 border-red-900">990</div>
                            <h3>sddsdsd</h3>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-2 bg-red-100">
                    dsdsdsdsd
                    </div>

                       

                    
                    <div className="col-span-12 md:col-span-4 bg-red-600">
                       eeeeee
                    </div>

                </div>
            </div>


            {/* Second Row */}


            <div className='bg-red-300 p-3'>
                <div className='grid grid-cols-12 md:h-[50vh] gap-3'>
                    
                    <div className="col-span-12 md:col-span-6 bg-red-600">
                        <VerticalBar/>
                    </div>

    

                    <div className="col-span-12 md:col-span-3 bg-red-100">
                    <PieChart/>
                    </div>

                    <div className="col-span-12 md:col-span-3 bg-red-100">
                    <HorizontalBar/>
                    </div>

                </div>
            </div>


            {/* Third Row */}

            <div className='bg-red-100 p-3'>
                <div className='grid grid-cols-12 md:h-[40vh] gap-3'>
                    
                    <div className="col-span-12 md:col-span-4 bg-yellow-200">
                        <DoughnutChart/>
                    </div>

                    <div className="col-span-12 md:col-span-8 bg-yellow-100 ">
                        <LineChart />
                    </div>

                    

                </div>
            </div>


        </div>
    )
}
