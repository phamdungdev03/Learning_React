import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExampleRouter from './routers/ExampleRouter.jsx'
import RouterAdvanced from './routers/RouterAdvanced.jsx'
import ExampleNavigate from './routers/ExampleNavigate.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Context/AppContext.jsx'
import TodoApp from './todoApp/TodoApp.jsx'
import AppMemoization from './memoization/AppMemoization.jsx'

createRoot(document.getElementById('root')).render(
  <strictMode>
    {/* <BrowserRouter>
      <ExampleNavigate />
    </BrowserRouter> */}
    {/* <AppContext /> */}

    <AppMemoization />
  </strictMode>
  // <App />
  // <ExampleRouter />
  
)
