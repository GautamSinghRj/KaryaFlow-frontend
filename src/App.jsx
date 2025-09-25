import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './routes/login'
import Register from './routes/register'
import Home from './routes/home'
import Dashboard from './routes/dashboard'
import QuickCreate from './routes/quick-create.jsx'
import DashboardHome from "@/components/dashboard-home.jsx";
import Tasks from "./routes/tasks.jsx"
import Chat from "./routes/chat.jsx"
import Projects from "./routes/projects.jsx"
import Team from "./routes/team.jsx"

export default function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<DashboardHome/>}/>
              <Route path='create' element={<QuickCreate/>}/>
              <Route path='tasks' element={<Tasks/>}/>
              <Route path='chat' element={<Chat/>}/>
              <Route path='projects' element={<Projects/>}/>
              <Route path='team' element={<Team/>}/>
          </Route>
        </Routes>
     </Router>
    </>
  )
}


