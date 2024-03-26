import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { VerticalBar } from "./VerticalBar";
import { DoughnutChart } from "./DoughnutChart";
import { HorizontalBar } from "./HorizontalBar";
import { PieChart } from "./PieChart";
import { Home } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Globe } from "lucide-react";
import { VerticalBar2 } from "./VerticalBar2";


export default function Dashboard() {
    const [listedProperty, setListedProperty] = useState(0);
    const [postedReviews, setPostedReviews] = useState(0);
    const [featuredCountries, setFeaturedCountries] = useState(0);
    const [ propertyTypes, setPropertyTypes ] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use axios.all to make parallel requests
                const [respListedProperty, respPostedReviews, respFeaturedCountries, respPropertyTypes] = await axios.all([
                    axios.get('http://localhost:5000/listProp'),
                    axios.get('http://localhost:5000/listRev'),
                    axios.get('http://localhost:5000/noOfCountries'),
                    axios.get('http://localhost:5000/proptype')
                ]);

                setListedProperty(respListedProperty.data.NoListProp);
                setPostedReviews(respPostedReviews.data.reviewsCount);
                setFeaturedCountries(respFeaturedCountries.data.count);
                setPropertyTypes(respPropertyTypes.data.num);
                 // Fix: Use the correct property name

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className='p-1 border h-screen '>
            <div className='bg-gray-100 p-3'>
                <div className='grid grid-cols-12 md:h-[20vh] gap-3'>
                                       
                <div className="col-span-12 md:col-span-2 bg-white border shadow-lg">
                        <div className='flex flex-col items-center h-full justify-center '>
                         
                        <div className='flex'>
                        <div className="w-32 h-32 rounded-full text-5xl flex items-center shadow-lg justify-around border-8 border-gray-200">
                            <p className='font-bold text-gray-500'>{listedProperty}</p>
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
                            <p className='font-bold text-gray-500'>{postedReviews}</p>
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
                            <p className='font-bold text-gray-500'>{propertyTypes}</p>
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
                            <p className='font-bold text-gray-500'>{featuredCountries}</p>
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
                                {/* <Star color='gold'/><Star color='gold'/><Star color='gold'/><Star color='gold'/><Star/> */}
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
                                       
                    <div className="col-span-12 md:col-span-4 border shadow-lg  md:h-[30vh] ">
                        <div className="p-2 text-center font-bold text-gray-500">Representation Per Country</div>
                        <DoughnutChart/>
                    </div>
          
                    <div className="col-span-12 md:col-span-4 bg-white border shadow-lg">
                        <VerticalBar/>
                    </div>
                                    
                    <div className="col-span-12 md:col-span-4 border shadow-lg">                        
                        <HorizontalBar/>
                    </div>

                </div> 
               
            </div>


             {/* Third Row */}

             <div className='bg-gray-100 p-3 mt-2'>
                <div className='grid grid-cols-12 md:h-[30vh] gap-3'>
                                       
                 <div className="col-span-12 md:col-span-4 bg-white border shadow-lg">
                      { <HorizontalBar/> }
                        
                    </div>

                            
                    <div className="col-span-12 md:col-span-3 border shadow-lg">
                    <div className="p-2 text-center font-bold text-gray-500">Cancellation Policies</div>
                        <PieChart/>                         
                    </div>

                    <div className="col-span-12 md:col-span-3 border shadow-lg ">
                                               
                    <VerticalBar />
                    
                   
                    </div> 

                    <div className="col-span-12 md:col-span-2 border shadow-lg">
                         {/* <table class="min-w-full border-collapse border border-gray-200 ">
                            <thead>
                                <tr>
                                    <th class="py-2 px-2 bg-gray-100 text-left">Name</th>
                                    <th class="py-2 px-2 bg-gray-100 text-left">Type</th>
                                    
                                </tr>
                            </thead>
                    <tbody>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                        </tr>
                        <tr class="bg-white">
                            <td class="py-1 px-2 border-b border-gray-200">Trinedah</td>
                            <td class="py-1 px-2 border-b border-gray-200">Bungalow</td>
                        </tr>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                        </tr>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                        </tr>
                        <tr class="bg-white">
                            <td class="py-1 px-2 border-b border-gray-200">Trinedah</td>
                            <td class="py-1 px-2 border-b border-gray-200">Bungalow</td>
                        </tr>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                        </tr>
                        <tr class="bg-gray-200">
                            <td class="py-1 px-2 border-b border-gray-200">Jan Ventures</td>
                            <td class="py-1 px-2 border-b border-gray-200">Apartment</td>
                        </tr>
                    </tbody>
                </table> */}
            </div> 
           </div>
          </div>
        </div>
    )
}
