import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='min-h-full text-center'>
        <Header />
        <div className='grid grid-cols-4 grid-rows-1 '>
          <div className='col-span-1 p-4 border-2 border-white'>
            <Sidebar />
          </div>
          <div className='col-span-3 p-4 border-2 border-white justify-items-start'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default RootLayout