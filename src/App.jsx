

import './App.css'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Topnav from './Topnav'
import Calendar  from './Calendar'

function App() {
 
  return (
  <>
   <div className='w-full flex'>
      <Navbar/>

      <main className='flex flex-col grow'>
        <Topnav/>
        <Dashboard/>
        {/* <Calendar/> */}

      </main>

   </div>
  </>
      
    
  )
}

export default App
