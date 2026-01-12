import React from 'react'
import { Routes , Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './Pages/About/About'
import Footer from './components/Footer/Footer'
import Faculty from './Pages/Faculty/Faculty'
import Gallery from './Pages/Gallery/Gallery'
import GalleryAdmin from './admin/pages/GalleryAdmin'
import FacultyAdmin from './admin/pages/FacultyAdmin'
import Login from './admin/pages/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminDashboard from './admin/pages/AdminDashboard'
import AnimalKingdom from './Pages/AnimalDiversity/AnimalDiversity'
import Courses from './Pages/Courses/Courses'
import Contact from './Pages/Contact/Contact'
import NotesAdmin from './admin/pages/NotesAdmin'
import Notes from './Pages/Notes/Notes'

const routes = (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/courses' element={<Courses />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/faculty' element={<Faculty />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/notes' element={<Notes />} />
    <Route path='/animaldiversity' element={<AnimalKingdom />} />
    <Route path='/admin/login' element={ <Login /> } />
    <Route path='/admin/gallery' element={<ProtectedRoute> <GalleryAdmin /> </ProtectedRoute>} />
    <Route path='/admin/faculty' element={<ProtectedRoute> <FacultyAdmin /> </ProtectedRoute>} />
    <Route path='/admin/dashboard' element={<ProtectedRoute> <AdminDashboard /> </ProtectedRoute>} />
    <Route path='/admin/notesadmin' element={<ProtectedRoute> <NotesAdmin /> </ProtectedRoute>} />
  </Routes>
)

const App = () => {

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");


  return (
    <div>
      {!isAdminRoute && <Navbar />}
      {routes}
      {!isAdminRoute && <Footer />}
    </div>
  )
}

export default App
