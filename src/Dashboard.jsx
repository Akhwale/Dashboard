import React from 'react'
import { ScrollText } from "lucide-react"

export default function Dashboard() {

  return (

    <div className='p-1 border h-screen'>
        <div className='bg-red-300 p-1'>
            <h3>Dashboard Analysis</h3> 
            <div className='grid grid-cols-12 md:h-[20vh] gap-2'>
                <div className='col-span-12 md:col-span-8 bg-yellow-200'>
                    <div className='md:flex justify-between h-full gap-2'>
                    <div class="border">
            <div class="card-inner">
              <p className="text-primary flex ">Insight Questions
              <span> <ScrollText/>
                </span>
                </p>
            </div>
            <span class="text-purple font-weight-bold">89282</span>
          </div>


     <div className="bg-white p-4 shadow-sm border">
        <h6 className="mb-3 text-sm  text-neutral-800 flex justify-between text-lg font-bold">
             Orders<span><ScrollText/></span>
        </h6>
        <h1  className="mb-3 text-base text-neutral-600 text-center text-bold text-3xl">
            98
        </h1>
        <p className='text-sm tex-center'>In Quessssssssssue</p>
    </div> 
    
    <div className="bg-white p-4 shadow-sm border">
        <h6 className="mb-3 text-sm  text-neutral-800 flex justify-between text-lg font-bold">
             Users<span><ScrollText/></span>
        </h6>
        <h1  className="mb-3 text-base text-neutral-600 text-center text-bold text-3xl">
            234
        </h1>
        <p className='text-sm tex-center'>pin Stsssssssssssssssore</p>
    </div> 
    <div className="bg-white p-4 shadow-sm border">
        <h6 className="mb-3 text-sm  text-neutral-800 flex justify-between text-lg font-bold">
            Inventory<span><ScrollText/></span>
        </h6>
        <h1  className="mb-3 text-base text-neutral-600 text-center text-bold text-3xl">
            234
        </h1>
        <p className='text-sm tex-center'>rods issssssssssssssn Store</p>
    </div> 

                    </div>

                </div>
                <div className="col-span-12 md:col-span-4 bg-red-600">
                    inini
                </div>
                
            </div>
        </div>

    {/* <div className='flex justify-between p-5 '>
                <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>   
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    </div>

    <div className='w-full p-5'>
        <h3>
            Top 5 Selling Products
        </h3>


        
        <div className='flex justify-between'>
        <table className='border'>
            <tr className='border'>
                <th>Item Name</th>
                <th>Item Name</th>
                <th>Item Name</th>
                <th>Item Name</th>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
        </table>
        <table className='border'>
            <tr className='border'>
                <th>Item Name</th>
                <th>Item Name</th>
                <th>Item Name</th>
                <th>Item Name</th>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
                <td>Item Name</td>
            </tr>
        </table>
        <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>




    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>







        </div>



    </div>
 */}






<div class="grid grid-cols-12 gap-4">


<div class="col-span-12 md:col-span-8 bg-red-200">
    <div className='md:flex justify-between'>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
   
    </div>
</div>


<div class="col-span-12 md:col-span-4 bg-red-700">
<div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
</div>

</div>




<div class="grid grid-cols-12 gap-4 ">


<div class="col-span-12 md:col-span-6 bg-red-200">
    <div className='md:flex justify-between'>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
   
   
   
    
    </div>
</div>


<div class="col-span-12 md:col-span-6 bg-red-700">
    <div className='flex justify-between'>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    <div className="rounded-lg bg-white p-6 shadow-sm border">
        <h6 className="mb-2 font-medium leading-tight text-neutral-800 flex justify-between">
            Total Number of Products<span><ScrollText/></span>
        </h6>
        <h1  class="mb-4 text-base text-neutral-600 ">
            234
        </h1>
        <p>Total number of products in Store</p>
    </div>
    </div>
</div>

</div>












    </div>
  )
}
