import {Routes, Route} from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import {Home, Tasks} from './pages'

function App() {

  return (
      <Routes>

        <Route element={<RootLayout/>}>

          <Route index element={<Home/>} />
          <Route path='/tasks' element={<Tasks />} />

        </Route>

      </Routes>
  )
}

export default App
