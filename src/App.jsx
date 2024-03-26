import './App.css'
import Navbar from './Navbar'
// import Topnav from './Topnav'
// import Calendar  from './Calendar'
import Dashboard from './Dashboard'

function App() {
 
  return (
  <>
   <div className='w-full flex'>
      <Navbar/>
      

      <main className='flex flex-col grow'>
        {/* <Topnav/> */}
        <Dashboard/>
        {/* <Calendar/> */}

      

      </main>

   </div>
  </>
      
    
  );
}

export default App
