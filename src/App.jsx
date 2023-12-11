
import './App.css'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Topnav from './Topnav'

function App() {
 
  return (
  <>
   <div className='w-full flex'>
      <Navbar/>

      <main className='flex flex-col grow'>
        <Topnav/>
        <Dashboard/>
      </main>

   </div>
  </>
      
    
  )
}

export default App
