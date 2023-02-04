import reactLogo from './assets/react.svg'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css'
import Router from './routes'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Router />
    </div>
  )
}

export default App
